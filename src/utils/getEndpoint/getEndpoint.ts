import { Endpoint } from '../../types'

export function getEndpoint (path: string, parentEndpoint: Endpoint) {
  const splitPath = path.split('/').slice(1)

  for (let deep = 0; deep < splitPath.length; deep++) {
    const key = splitPath[deep]
    const isDynamic = key.startsWith('{') && key.endsWith('}')

    if (!isDynamic) {
      if (!parentEndpoint.static) {
        parentEndpoint.static = {}
      }

      if (!parentEndpoint.static[key]) {
        parentEndpoint.static[key] = { key }
      }

      parentEndpoint = parentEndpoint.static[key]

      if (deep + 1 === splitPath.length) {
        return parentEndpoint
      }

      continue
    }

    if (!parentEndpoint.dynamic) {
      parentEndpoint.dynamic = []
    }

    const newEndpoint: Endpoint = { key }

    parentEndpoint.dynamic.push(newEndpoint)
    parentEndpoint = newEndpoint

    if (deep + 1 === splitPath.length) {
      return parentEndpoint
    }
  }
}
