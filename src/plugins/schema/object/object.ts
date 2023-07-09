import innet, { HandlerPlugin, useHandler, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useApi, useBlockPatch, useSchemaBase, useSchemaType } from '../../../hooks'
import { ReferenceObject, SchemaObject, SchemaTypeOptions } from '../../../types'

export interface ObjectProps extends SchemaTypeOptions <object> {
  ref?: string
}

export const object: HandlerPlugin = () => {
  useBlockPatch()

  const { ref, ...props } = useProps<ObjectProps>() || {}

  if (ref) {
    const schema = useSchemaBase() as ReferenceObject
    const { docs } = useApi()

    schema.$ref = `#/components/schemas/${ref}`

    if (!docs.components.schemas) {
      docs.components.schemas = {}
    }

    if (!docs.components.schemas[ref]) {
      const childSchema: SchemaObject = {}
      docs.components.schemas[ref] = childSchema
      childSchema.type = 'object'

      if (props) {
        Object.assign(childSchema, props)
      }

      const handler = useNewHandler()
      const children = useChildren()

      handler[schemaContext.key] = { schema: childSchema } satisfies SchemaContext

      innet(children, handler)
    }

    return
  }

  const handler = useHandler()
  const children = useChildren()

  useSchemaType('object', props)

  innet(children, handler)
}
