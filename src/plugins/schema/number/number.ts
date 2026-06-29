import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import {
  defaultTo,
  getArrayValues,
  max as maximum,
  min as minimum,
  multipleOf as mpl,
  nullable,
  num,
  oneOf,
  pipe,
  type Rule,
  values,
} from '../../../utils'

export type NumberProps = SchemaProps<number> & {
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
   * // Value must be strictly less than 10 (9.99 is OK, 10 is not)
   * <number exclusive='max' max={10} />
   *
   * // Value must be strictly greater than 0 (0.01 is OK, 0 is not)
   * <number exclusive='min' min={0} />
   *
   * // Both boundaries are exclusive: 0 < value < 100
   * <number exclusive min={0} max={100} />
   * ```
   */
  exclusive?: 'max' | 'min' | boolean

  /**
   * Number format hint for OpenAPI documentation.
   *
   * - `'float'` — IEEE 754 single-precision floating-point number
   * - `'double'` — IEEE 754 double-precision floating-point number
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example
   * ```tsx
   * <number format='float' />
   * <number format='double' />
   * ```
   */
  format?: 'double' | 'float' | (string & {})

  /**
   * Maximum allowed value (inclusive by default). Use with `exclusive` to make it strict.
   *
   * @example
   * ```tsx
   * // Value must be <= 100
   * <number max={100} />
   *
   * // Value must be < 100
   * <number exclusive='max' max={100} />
   * ```
   */
  max?: number

  /**
   * Minimum allowed value (inclusive by default). Use with `exclusive` to make it strict.
   *
   * @example
   * ```tsx
   * // Value must be >= 0
   * <number min={0} />
   *
   * // Value must be > 0
   * <number exclusive='min' min={0} />
   * ```
   */
  min?: number

  /**
   * The value must be a multiple of the specified number.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example
   * ```tsx
   * // Allowed: ..., -2, 0, 2, 4, 6, ...
   * <number multipleOf={2} />
   *
   * // Allowed: ..., -0.05, 0, 0.05, 0.10, ...
   * <number multipleOf={0.05} />
   * ```
   */
  multipleOf?: number
}

export const number: HandlerPlugin = () => {
  const {
    exclusive,
    format,
    max,
    min,
    multipleOf,
    ...props
  } = useProps<NumberProps>() || {}
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly
  const exclusiveMinimum = exclusive && ['min', true].includes(exclusive)
  const exclusiveMaximum = exclusive && ['max', true].includes(exclusive)

  const schema = useSchemaType('number', props)

  if (schema) {
    if (format !== undefined) {
      schema.format = format
    }

    if (min !== undefined) {
      schema.minimum = min
    }

    if (max !== undefined) {
      schema.maximum = max
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

  if (props.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  rules.push(num)

  if (props.values) {
    rules.push(values(getArrayValues(props.values).map(Number)))
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

  if (props.default === undefined) {
    const rootRule = useParentRule()
    useRule(rootRule(rule))
  } else {
    useRule(rule)
  }
}
