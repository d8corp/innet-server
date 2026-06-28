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
  nullable,
  oneOf,
  optional,
  pipe,
  type Rule,
  values as valuesOf,
} from '../../../utils'

type IntProps<T extends bigint | number> = SchemaProps<T> & {
  /**
   * The `exclusiveMaximum` keyword is used to restrict the value to be less than the specified number.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example For example, the following value is valid:
   * ```tsx
   * <integer exclusiveMaximum={10} />
   * ```
   * */
  exclusiveMaximum?: T | boolean

  /**
   * The `exclusiveMinimum` keyword is used to restrict the value to be greater than the specified number.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example For example, the following value is valid:
   * ```tsx
   * <integer exclusiveMinimum={10} />
   * ```
   * */
  exclusiveMinimum?: T | boolean

  /**
   * An optional format modifier serves as a hint at the contents and format of the string.
   *
   * @see https://swagger.io/docs/specification/data-models/data-types/#numbers
   *
   * @example For example, the following value is valid:
   * ```tsx
   * <integer format='int64' />
   * ```
   * */
  format?: T extends bigint ? 'int64' : 'int32'

  /**
   * Validate the integer number value by maximum.
   *
   * @example
   * ```tsx
   * <integer max={100} />
   * ```
   * */
  max?: T

  /**
   * Validate the integer number value by minimum.
   *
   * @example
   * ```tsx
   * <integer min={100} />
   * ```
   * */
  min?: T

  /**
   * The `multipleOf` keyword is used to restrict the value to be a multiple of the specified number.
   *
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   *
   * @example For example, the following value is valid:
   * ```tsx
   * <number multipleOf={2} />
   * ```
   * */
  multipleOf?: T
}

export type IntegerProps = IntProps<number> | MakeRequired<IntProps<bigint>, 'format'>
export const integer: HandlerPlugin = () => {
  const {
    default: defaultValue,
    example,
    examples,
    exclusiveMaximum,
    exclusiveMinimum,
    format = 'int32',
    max,
    min,
    multipleOf,
    values,
    ...props
  } = useProps<IntegerProps>() || {}
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

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
      schema.exclusiveMinimum = typeof exclusiveMinimum === 'boolean' ? exclusiveMinimum : Number(exclusiveMinimum)
    }

    if (exclusiveMaximum) {
      schema.exclusiveMaximum = typeof exclusiveMaximum === 'boolean' ? exclusiveMaximum : Number(exclusiveMaximum)
    }

    if (multipleOf !== undefined) {
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
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules)

  if (defaultValue === undefined) {
    useRule(optional(rule))
  } else {
    useRule(rule)
  }
}
