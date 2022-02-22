import { Children, Component, Props } from '@innet/jsx'
import innet, { Handler } from 'innet'

import Action, { ACTION } from '../../action'

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
  return `^${path ? `${path}${ish ? '(/[^?]*)?' : ''}` : '[^?]*'}(\\?.*)?$`
}

export interface Router {
  prefix?: string
  params?: Record<string, string>
}

export const ROUTER = Symbol('Parent Router') as unknown as string

export interface RouterComponent extends Component {
  router: Router
}

export interface RouterComponentConstructor {
  new (props?: Props, children?: Children, handler?: Handler): RouterComponent
  [key: string]: any
}

export function withRouter <T extends RouterComponentConstructor> (target: T): T {
  const originInit = target.prototype.init
  target.prototype.init = function init (...args) {
    this.router = args[2][ROUTER]
    return originInit.apply(this, args)
  }
  return target
}

export function router ({ props, children }, handler) {
  if (!children) return
  if (!props) return children

  const action: Action = handler[ACTION]
  const { req } = action

  if (!req) {
    throw Error('`router` should be used inside `server`')
  }

  if (props.method && props.method !== req.method) {
    return
  }

  const parent = handler[ROUTER] as Router
  const parentPrefix = parent?.prefix || ''

  if (parentPrefix && !req.url.startsWith(parentPrefix)) {
    return
  }

  const url = parentPrefix ? req.url.slice(parentPrefix.length) : req.url

  const newHandler = Object.create(handler)

  const current = newHandler[ROUTER] = Object.create(parent || null) as Router

  if (props.prefix) {
    current.prefix = parentPrefix + props.prefix
  }

  if (props.path || props.search) {
    const urlReg = new RegExp(getMatchReg(props))

    if (urlReg.test(url)) {
      current.params = url.match(urlReg).groups
    } else return
  }

  props.onMatch?.(action)

  return innet(children.length > 1 ? children : children[0], newHandler)
}
