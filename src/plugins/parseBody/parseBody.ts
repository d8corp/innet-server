import innet from 'innet'

import { actionContext } from '../../hooks'

export interface ParseBodyProps {}

export interface ParseBodyJsxElement {
  props: ParseBodyProps
  children?: any
}

export function parseBody ({ props, children }: ParseBodyJsxElement, handler) {
  return actionContext.get(handler).parseBody().then(() => innet(children, handler))
}
