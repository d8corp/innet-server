import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useEndpoint } from '../../../hooks'
import { BodyType, RequestBodyObject, SchemaObject } from '../../../types'

export interface BodyProps {
  /** A media type, one of `application/x-www-form-urlencoded` or `application/json` */
  type: BodyType
}

export const body: HandlerPlugin = () => {
  const children = useChildren()

  if (!children) {
    throw Error('<body> MUST contain type elements')
  }

  const { operation } = useEndpoint()

  if (!operation.requestBody) {
    operation.requestBody = {
      content: {},
    }
  }

  const { type } = useProps<BodyProps>()
  const requestBody = operation.requestBody as RequestBodyObject

  if (requestBody.content[type]) {
    throw Error(`<body type="${type}"> already used`)
  }

  const handler = useNewHandler()
  const schema: SchemaObject = {}

  requestBody.content[type] = { schema }

  handler[schemaContext.key] = { schema } satisfies SchemaContext

  innet(children, handler)
}
