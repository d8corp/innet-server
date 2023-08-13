import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  formatterContext,
  type SchemaContext,
  schemaContext,
  useBlockPatch,
  useSchemaType,
  useSetFormatter,
  useSetValidator,
  validatorContext,
} from '../../../hooks'
import { type ArraySchemaObject, type BaseSchemaProps, type SchemaObject } from '../../../types'
import { arrayFormatter, isArray } from '../../../utils'

export interface ArrayProps extends BaseSchemaProps <any[]> {

}

export const array: HandlerPlugin = () => {
  useBlockPatch()

  const setFormatter = useSetFormatter()
  const setValidator = useSetValidator()
  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<ArrayProps>()) as ArraySchemaObject
  const children = useChildren()

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  formatterContext.set(handler, formatter => {
    setFormatter(arrayFormatter(formatter))
  })

  validatorContext.set(handler, validator => {
    setValidator(isArray(validator))
  })

  innet(children, handler)
}
