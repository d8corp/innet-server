import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useChildren, useContext } from '@innet/jsx'

import { allBodyTypes } from '../../../constants'
import { bodyContext, endpointContext, ruleContext, schemaContext, useEffect } from '../../../hooks'
import type { EndpointRules, RequestBodyObject, SchemaObject } from '../../../types'
import { getOrAdd } from '../../../utils'

export interface BodyProps {
  children?: any
}

export const body: HandlerPlugin = () => {
  const endpoint = useContext(endpointContext)

  if (!endpoint) {
    throw Error('<body> MUST be placed in <endpoint> element')
  }

  const children = useChildren()
  const { operation } = endpoint

  if (!operation.requestBody) {
    operation.requestBody = {
      content: {},
    }
  }

  const requestBody = operation.requestBody as RequestBodyObject

  for (const type of allBodyTypes) {
    if (requestBody.content[type]) {
      throw Error(`<body type="${type}"> already used`)
    }
  }

  const handler = useNewHandler()
  const schema: SchemaObject = {}

  schemaContext.set(handler, schema)

  const rules: EndpointRules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}])
  let fileUsed = false

  bodyContext.set(handler, {
    useFile: () => {
      fileUsed = true
    },
  })

  ruleContext.set(handler, rule => {
    rules.body = rule
  })

  useEffect(() => {
    if (fileUsed) {
      requestBody.content['multipart/form-data'] = { schema }
    } else {
      for (const type of allBodyTypes) {
        requestBody.content[type] = { schema }
      }
    }
  })

  innet(children, handler)
}
