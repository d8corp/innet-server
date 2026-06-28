import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'

import { objectRuleContext, ruleContext, schemaContext, useObjectRule, useObjectSchemaContext } from '../../../hooks'
import { type SchemaObject } from '../../../types'
import { getSafeSchema, required } from '../../../utils'

export interface FieldProps {
  /**
   * Child elements defining the field schema.
   *
   * @example
   * <field key='id'>
   *   <uuid />
   * </field>
   */
  children?: any

  /**
   * Mark field as deprecated.
   *
   * @example
   * ```tsx
   * <field key='id' deprecated>
   *   <uuid />
   * </field>
   * ```
   */
  deprecated?: boolean

  /**
   * Field description in CommonMark format.
   *
   * @example
   * ```tsx
   * <field key='id' description='User unique identifier'>
   *   <uuid />
   * </field>
   * ```
   */
  description?: string

  /**
   * Field name (required).
   *
   * @example
   * <field key='email'>
   *   <string format='email' />
   * </field>
   */
  key: string

  /**
   * Mark field as optional (not required).
   *
   * @default false
   *
   * @example
   * <field key='nickname' optional>
   *   <string />
   * </field>
   */
  optional?: boolean

  /**
   * Mark field as read-only.
   *
   * @example
   * <field key='id' readOnly>
   *   <uuid />
   * </field>
   */
  readOnly?: boolean

  /**
   * Field title.
   *
   * @example
   * ```tsx
   * <field key='id' title='User unique identifier'>
   *   <uuid />
   * </field>
   * ```
   */
  title?: string

  /**
   * Mark field as write-only.
   *
   * @example
   * <field key='password' writeOnly>
   *   <string min={8} />
   * </field>
   */
  writeOnly?: boolean
}

export const field: HandlerPlugin = () => {
  const handler = useNewHandler()
  const {
    children,
    deprecated,
    description,
    key,
    optional,
    readOnly,
    title,
    writeOnly,
  } = useProps<FieldProps>()
  const schema = getSafeSchema(useObjectSchemaContext())

  if (!schema.properties) {
    schema.properties = {}
  }

  if (schema.properties[key]) {
    throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`)
  }

  const fieldSchema: SchemaObject = {}
  schemaContext.set(handler, fieldSchema)

  if (deprecated) {
    fieldSchema.deprecated = true
  }

  if (title) {
    fieldSchema.title = title
  }

  if (description) {
    fieldSchema.description = description
  }

  if (readOnly) {
    fieldSchema.readOnly = true
  }

  if (writeOnly) {
    fieldSchema.writeOnly = true
  }

  schema.properties[key] = fieldSchema

  if (!optional) {
    if (!schema.required) {
      schema.required = []
    }

    schema.required.push(key)
  }

  const map = useObjectRule()
  ruleContext.set(handler, rule => {
    if (optional) {
      map[key] = rule
    } else {
      map[key] = required(rule)
    }
  })

  objectRuleContext.set(handler, null)

  innet(children, handler)
}
