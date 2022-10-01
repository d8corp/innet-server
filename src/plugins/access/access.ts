import innet, { Handler } from 'innet'
import { Context } from '@innet/jsx'

import { ACTION, Action } from '../../action'

export interface AccessProps {
  role?: any
}

export interface AccessJsxElement {
  props: AccessProps
  children?: any
}

export interface AccessContext {
  handleRole?: (role: any, handler: Handler) => any
}

export const accessContext = new Context<AccessContext>({})

export function access ({ props, children }: AccessJsxElement, handler) {
  const action: Action = handler[ACTION]

  if (!action) {
    throw Error('`access` should be inside `server`')
  }

  const { handleRole } = accessContext.get(handler)
  const role = props?.role

  if (!handleRole) {
    return innet(children, handler)
  }

  const error = handleRole(role, handler)

  if (error) {
    return innet(error, handler)
  }

  return innet(children, handler)
}
