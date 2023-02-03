import innet from 'innet'

import { ACTION } from '../../action'

export interface ParseBodyProps {}

export interface ParseBodyJsxElement {
  props: ParseBodyProps
  children?: any
}

export function parseBody ({ props, children }: ParseBodyJsxElement, handler) {
  return handler[ACTION].parseBody().then(() => innet(children, handler))
}
