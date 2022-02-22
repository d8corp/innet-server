import { CookieSerializeOptions } from 'cookie'
import innet, { Handler } from 'innet'

import Action, { ACTION } from '../../action'

export interface CookieProps extends CookieSerializeOptions {
  key: string
  value?: string
}

export function cookie ({ props: { key, value, ...opt }, children }, handler: Handler) {
  const action: Action = handler[ACTION]

  if (value === undefined) {
    action.setCookie(key, '', {
      path: '/',
      expires: new Date(0),
      ...opt,
    })
  } else {
    action.setCookie(key, value, opt)
  }
  return innet(children, handler)
}
