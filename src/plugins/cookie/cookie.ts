import innet, { Handler } from 'innet'
import { CookieSerializeOptions } from 'cookie'

import { actionContext } from '../../hooks'
import { Action } from '../../utils'

export interface CookieProps extends CookieSerializeOptions {
  key: string
  value?: string
}

export function cookie ({ props: { key, value, ...opt }, children }, handler: Handler) {
  const action: Action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <cookie> inside <action>')
  }

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
