import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { type MakeRequired, type SchemaProps } from '../../../types'
import {
  defaultTo,
  getArrayValues,
  int,
  max as maximum,
  min as minimum,
  multipleOf as mpl,
  nullable,
  oneOf,
  optional,
  pipe,
  type Rule,
  values as valuesOf,
} from '../../../utils'

type IntProps<T extends bigint | number> = SchemaProps<T> & {
  /**
   * Controls whether the `min` and `max` boundaries are exclusive (strict) or inclusive.
   *
   * - `true` — both `min` and `max` are exclusive
   * - `'min'` — only `min` is exclusive, `max` remains inclusive
   * - `'max'` — only `max` is exclusive, `min` remains inclusive
   *
   * When a boundary is exclusive, the validated value must be **strictly**
   * greater (for `min`) or strictly less (for `max`) than the given limit.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example
   * ```tsx
   * // Value must be strictly less than 10 (9 is OK, 10 is not)
   * <integer exclusive='max' max={10} />
   *
   * // Value must be strictly greater than 0 (1 is OK, 0 is not)
   * <integer exclusive='min' min={0} />
   *
   * // Both boundaries are exclusive: 0 < value < 100
   * <integer exclusive min={0} max={100} />
   * ```
   */
  exclusive?: 'max' | 'min' | boolean

  /**
   * Integer format. Defines the bit width and the resulting JavaScript type.
   *
   * - `'int32'` (default) — 32-bit signed integer, results in JS `number`
   * - `'int64'` — 64-bit signed integer, results in JS `bigint`
   *
   * @see https://swagger.io/docs/specification/data-models/data-types/#numbers
   *
   * @example
   * ```tsx
   * // 32-bit integer (default)
   * <integer format='int32' />
   *
   * // 64-bit integer, converted to BigInt in JS
   * <integer format='int64' />
   * ```
   */
  format?: T extends bigint ? 'int64' : 'int32'

  /**
   * Maximum allowed value (inclusive by default). Use with `exclusive` to make it strict.
   *
   * @example
   * ```tsx
   * // Value must be <= 100
   * <integer max={100} />
   *
   * // Value must be < 100
   * <integer exclusive='max' max={100} />
   * ```
   */
  max?: T

  /**
   * Minimum allowed value (inclusive by default). Use with `exclusive` to make it strict.
   *
   * @example
   * ```tsx
   * // Value must be >= 0
   * <integer min={0} />
   *
   * // Value must be > 0
   * <integer exclusive='min' min={0} />
   * ```
   */
  min?: T

  /**
   * The value must be a multiple of the specified number.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example
   * ```tsx
   * // Allowed: ..., -10, -5, 0, 5, 10, 15, ...
   * <integer multipleOf={5} />
   * ```
   */
  multipleOf?: T
}

export type IntegerProps = IntProps<number> | MakeRequired<IntProps<bigint>, 'format'>
export const integer: HandlerPlugin = () => {
  const {
    default: defaultValue,
    example,
    examples,
    exclusive,
    format = 'int32',
    max,
    min,
    multipleOf,
    values,
    ...props
  } = useProps<IntegerProps>() || {}
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly
  const exclusiveMinimum = exclusive && ['min', true].includes(exclusive)
  const exclusiveMaximum = exclusive && ['max', true].includes(exclusive)

  const schema = useSchemaType('integer', {
    ...props,
    default: defaultValue !== undefined ? Number(defaultValue) : undefined,
    example: example !== undefined ? Number(example) : undefined,
    examples: examples?.map(Number),
    value: props.value !== undefined ? Number(props.value) : undefined,
    values: values && getArrayValues(values).map(Number),
  })

  if (schema) {
    if (format) {
      schema.format = format
    }

    if (min !== undefined) {
      schema.minimum = Number(min)
    }

    if (max !== undefined) {
      schema.maximum = Number(max)
    }

    if (exclusiveMinimum) {
      schema.exclusiveMinimum = true
    }

    if (exclusiveMaximum) {
      schema.exclusiveMaximum = true
    }

    if (multipleOf) {
      schema.multipleOf = Number(multipleOf)
    }
  }

  if (!hasRules) return

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push(defaultTo(defaultValue))
  }

  rules.push(int(format))

  if (values) {
    rules.push(valuesOf(getArrayValues(values).filter((v) => v !== null).map(v => int(format)(v))))
  }

  if (min !== undefined) {
    rules.push(minimum(min, exclusiveMinimum))
  }

  if (max !== undefined) {
    rules.push(maximum(max, exclusiveMaximum))
  }

  if (multipleOf) {
    rules.push(mpl(multipleOf))
  }

  const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules)

  if (defaultValue === undefined) {
    useRule(optional(rule))
  } else {
    useRule(rule)
  }
}
