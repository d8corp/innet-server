import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useApi, useBlockPatch, useNewSchema, useSchemaType } from '../../../hooks'
import { BaseSchemaProps, SchemaObject } from '../../../types'

export interface ObjectProps extends BaseSchemaProps <object> {
  ref?: string
}

export const object: HandlerPlugin = () => {
  useBlockPatch()

  const children = useChildren()
  const { ref, ...props } = useProps<ObjectProps>() || {}

  if (!ref) {
    const handler = useNewHandler()
    const schema = useSchemaType('object', props)

    handler[schemaContext.key] = schema satisfies SchemaContext

    innet(children, handler)
    return
  }

  const { docs } = useApi()

  if (docs.components.schemas?.[ref]) return

  if (!docs.components.schemas) {
    docs.components.schemas = {}
  }

  useNewSchema({
    $ref: `#/components/schemas/${ref}`,
  })

  const handler = useNewHandler()

  const childSchema: SchemaObject = {}
  docs.components.schemas[ref] = childSchema
  childSchema.type = 'object'

  if (props) {
    Object.assign(childSchema, props)
  }

  handler[schemaContext.key] = childSchema satisfies SchemaContext

  innet(children, handler)
}
