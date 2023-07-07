import { HandlerPlugin, useApp, useHandler } from 'innet'
import { JSXElement, useChildren } from '@innet/jsx'

import { useMapEndpoints, useOperation } from '../../hooks'

export interface RequestProps {

}

export const request: HandlerPlugin = () => {
  const operationContext = useOperation()

  if (!operationContext) {
    const { type } = useApp<JSXElement>()
    throw Error(`Use <${type}> inside <endpoint>`)
  }

  const children = useChildren()
  const handler = useHandler()
  const { path, method } = operationContext

  useMapEndpoints((endpoint, dynamic) => {
    if (dynamic) {
      if (endpoint.content) {
        throw Error(`You cannot use the same endpoints ${method}:${path}`)
      }
    }

    endpoint.content = children
    endpoint.handler = handler
  })
}
