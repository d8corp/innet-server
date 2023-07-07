import { Endpoint } from '../../types'

export function mapEndpoints (path: string, endpoint: Endpoint, callback: (endpoint: Endpoint, dynamic: boolean) => void) {
  const splitPath = path.split('/').slice(1)

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
        callback(endpoint, true)
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
      callback(endpoint, false)
    }
  }
}
