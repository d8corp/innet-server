import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { type IntegerFormats, type SchemaProps } from '../../../types'
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

export type IntegerProps = SchemaProps<bigint | number> & {
  /**
   * The `exclusiveMaximum` keyword is used to restrict the value to be less than the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <integer exclusiveMaximum={10} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  exclusiveMaximum?: bigint | boolean | number

  /**
   * The `exclusiveMinimum` keyword is used to restrict the value to be greater than the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <integer exclusiveMinimum={10} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  exclusiveMinimum?: bigint | boolean | number

  /**
   * An optional format modifier serves as a hint at the contents and format of the string.
   * @example For example, the following value is valid:
   * ```tsx
   * <integer format='int64' />
   * ```
   * @see https://swagger.io/docs/specification/data-models/data-types/#numbers
   * */
  format?: IntegerFormats

  /** Validate the integer number value by maximum. */
  max?: bigint | number

  /** Validate the integer number value by minimum. */
  min?: bigint | number

  /**
   * The `multipleOf` keyword is used to restrict the value to be a multiple of the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <number multipleOf={2} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  multipleOf?: bigint | number
}

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
