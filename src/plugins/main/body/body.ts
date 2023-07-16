import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { endpointContext, SchemaContext, schemaContext, useEndpoint } from '../../../hooks'
import { BodyType, RequestBodyObject, SchemaObject } from '../../../types'

export interface BodyProps {
  /** A media type, one of `application/x-www-form-urlencoded`, `application/json` or `multipart/form-data` */
  type?: BodyType | BodyType[]
}

const allBodyTypes: BodyType[] = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]

export const body: HandlerPlugin = () => {
  const endpoint = useContext(endpointContext)

  if (!endpoint) {
    throw Error('<body> MUST be placed in <endpoint> element')
  }

  const children = useChildren()
  const { type: rawType = allBodyTypes } = useProps<BodyProps>() || {}
  const { operation } = endpoint
  const types = Array.isArray(rawType) ? rawType : [rawType]

  if (!operation.requestBody) {
    operation.requestBody = {
      content: {},
    }
  }

  const requestBody = operation.requestBody as RequestBodyObject

  for (const type of types) {
    if (requestBody.content[type]) {
      throw Error(`<body type="${type}"> already used`)
    }
  }

  const handler = useNewHandler()
  const schema: SchemaObject = {}

  for (const type of types) {
    requestBody.content[type] = { schema }
  }

  handler[schemaContext.key] = { schema } satisfies SchemaContext

  innet(children, handler)
}
