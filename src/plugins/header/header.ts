import innet, { Handler } from 'innet'

import Action, { ACTION } from '../../action'

export interface HeaderProps {
  name: string
  value: string
}

export function header ({ props: { name, value }, children }, handler: Handler) {
  const { res }: Action = handler[ACTION]
  res.setHeader(name, value)
  return innet(children, handler)
}
