import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import { defaultTo, getArrayValues, max as maximum, min as minimum, num, pipe, type Rule, values } from '../../../utils'

export type NumberProps = SchemaProps<number> & {
  /**
   * The `exclusiveMaximum` keyword is used to restrict the value to be less than the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <number exclusiveMaximum={10} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  exclusiveMaximum?: boolean
  /**
   * The `exclusiveMinimum` keyword is used to restrict the value to be greater than the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <number exclusiveMinimum={10} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  exclusiveMinimum?: boolean

  /**
   * An optional format modifier serves as a hint at the contents and format of the string.
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  format?: 'double' | 'float' | (string & {})

  /** Validate the number value by maximum. */
  max?: number

  /** Validate the number value by minimum. */
  min?: number

  /**
   * The `multipleOf` keyword is used to restrict the value to be a multiple of the specified number.
   * @example For example, the following value is valid:
   * ```tsx
   * <number multipleOf={2} />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
   * */
  multipleOf?: number
}

export const number: HandlerPlugin = () => {
  const {
    exclusiveMaximum,
    exclusiveMinimum,
    format,
    max,
    min,
    multipleOf,
    ...props
  } = useProps<NumberProps>() || {}

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
      schema.exclusiveMinimum = typeof exclusiveMinimum === 'boolean' ? exclusiveMinimum : Number(exclusiveMinimum)
    }

    if (exclusiveMaximum) {
      schema.exclusiveMaximum = typeof exclusiveMaximum === 'boolean' ? exclusiveMaximum : Number(exclusiveMaximum)
    }

    if (multipleOf !== undefined) {
      schema.multipleOf = Number(multipleOf)
    }
  }

  const rules: Rule[] = []

  if (props.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  rules.push(num)

  if (props.values) {
    rules.push(values(getArrayValues(props.values).map(Number)))
  }

  if (min !== undefined) {
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  if (props.default === undefined) {
    const rootRule = useParentRule()
    useRule(rootRule(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
