import { HandlerPlugin, useApp, useHandler } from 'innet'
import { JSXElement, useChildren } from '@innet/jsx'

import { useApi, useOperation } from '../../hooks'
import { Endpoint } from '../../types'

export interface RequestProps {

}

export const request: HandlerPlugin = () => {
  const operationContext = useOperation()

  if (!operationContext) {
    const { type } = useApp<JSXElement>()
    throw Error(`Use <${type}> inside <endpoint>`)
  }

  const children = useChildren()
  const { endpoints } = useApi()
  const { path, method } = operationContext

  if (!endpoints[method]) {
    endpoints[method] = { key: '' }
  }

  const splitPath = path.split('/').slice(1)

  let endpoint = endpoints[method]
  for (let deep = 0; deep < splitPath.length; deep++) {
    const key = splitPath[deep]
    const isDynamic = key.startsWith('{') && key.endsWith('}')

    if (!isDynamic) {
      if (!endpoint.static) {
        endpoint.static = {}
      }

      if (!endpoint.static[key]) {
        endpoint.static[key] = { key }
      }

      endpoint = endpoint.static[key]

      if (deep + 1 === splitPath.length) {
        if (endpoint.content) {
          throw Error(`You cannot use the same endpoints ${method}:${path}`)
        }

        endpoint.content = children
        endpoint.handler = useHandler()
        break
      }
      continue
    }

    if (!endpoint.dynamic) {
      endpoint.dynamic = []
    }

    const newEndpoint: Endpoint = { key }

    endpoint.dynamic.push(newEndpoint)
    endpoint = newEndpoint

    if (deep + 1 === splitPath.length) {
      endpoint.content = children
      endpoint.handler = useHandler()
    }
  }
}
