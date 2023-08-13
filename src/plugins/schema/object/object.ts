import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  formatterContext, objectFormatterContext, objectValidatorContext,
  type SchemaContext,
  schemaContext,
  useBlockPatch,
  useFormatter,
  useSchemaType, useValidator, validatorContext,
} from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'
import { isObject, objectFormatter, type ObjectFormatterMap, type ObjectValidatorMap } from '../../../utils'

export interface ObjectProps extends BaseSchemaProps <object> {

}

export const object: HandlerPlugin = () => {
  useBlockPatch()

  const children = useChildren()
  const props = useProps<ObjectProps>() || {}

  const schema = useSchemaType('object', props)
  const handler = useNewHandler()

  if (schema) {
    handler[schemaContext.key] = schema satisfies SchemaContext
  }

  const formatterMap: ObjectFormatterMap = {}
  const validatorMap: ObjectValidatorMap = {}

  useFormatter(objectFormatter(formatterMap))
  useValidator(isObject(validatorMap))

  objectFormatterContext.set(handler, formatterMap)
  objectValidatorContext.set(handler, validatorMap)

  formatterContext.set(handler, null)
  validatorContext.set(handler, null)

  innet(children, handler)
}
