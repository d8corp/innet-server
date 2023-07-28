import { type HandlerPlugin, useHandler } from 'innet'
import { useChildren } from '@innet/jsx'

import { useEndpoint } from '../../../hooks'

export interface RequestProps {

}

export const request: HandlerPlugin = () => {
  const endpointContext = useEndpoint()

  if (!endpointContext) {
    throw Error('Use <request> inside <endpoint>')
  }

  const children = useChildren()
  const handler = useHandler()
  const { endpoint, props } = endpointContext

  if (endpoint.content) {
    throw Error(`You cannot use the same endpoints ${props.method}:${props.path}`)
  }

  endpoint.content = children
  endpoint.handler = handler
}
