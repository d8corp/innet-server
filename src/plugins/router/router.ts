import innet from 'innet'
import { useHandler } from '@innet/jsx'

import { ACTION, Action } from '../../action'

export type Methods = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

export interface RouterProps {
  method?: Methods
  path?: string
  prefix?: string
  ish?: boolean
  onMatch?: (action: Action) => void
}

export function getMatchReg (props: RouterProps) {
  const { ish, path } = props
  return `^${path}${ish ? '(?<rest>/.*)?' : ''}$`
}

export interface Router {
  prefix?: string
  params?: Record<string, string>
}

export const ROUTER = Symbol('Parent Router') as unknown as string

export function useRouter (): Router {
  return useHandler()[ROUTER]
}

export function router ({ props, children }, handler) {
  if (!children) return
  if (!props) return children

  const action: Action = handler[ACTION]

  if (!action) {
    throw Error('`router` should be used inside `server`')
  }

  const { req, path } = action

  if (props.method && props.method !== req.method) {
    return
  }

  const parent = handler[ROUTER] as Router
  const parentPrefix = parent?.prefix || ''

  if (parentPrefix && !path.startsWith(parentPrefix)) {
    return
  }

  const url = parentPrefix ? path.slice(parentPrefix.length) : path

  const newHandler = Object.create(handler)

  const current = newHandler[ROUTER] = Object.create(parent || null) as Router

  if (props.prefix) {
    current.prefix = parentPrefix + props.prefix
  }

  if (props.path) {
    const urlReg = new RegExp(getMatchReg(props))

    if (urlReg.test(url)) {
      current.params = url.match(urlReg).groups
    } else return
  }

  props.onMatch?.(action)

  return innet(children.length > 1 ? children : children[0], newHandler)
}
