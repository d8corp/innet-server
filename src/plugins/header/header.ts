import innet, { Handler } from 'innet'

import { actionContext } from '../../hooks'

export interface HeaderProps {
  name: string
  value: string
}

export function header ({ props: { name, value }, children }, handler: Handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <header> inside <action>')
  }

  action.res.setHeader(name, value)
  return innet(children, handler)
}
