import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import cookieLib, { type CookieSerializeOptions } from 'cookie'

import { useResponse, useThrow } from '../../../hooks'

export interface CookieProps extends CookieSerializeOptions {
  key: string
  value?: string
}

export const cookie: HandlerPlugin = () => {
  const res = useResponse()

  if (!res) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  const { key, value, ...opt } = useProps<CookieProps>()
  let cookies: string[] | string | undefined = res.getHeader('Set-Cookie') as any

  if (typeof cookies === 'string') {
    cookies = [cookies]
  }

  const normValue = typeof value === 'string' ? cookieLib.serialize(key, value, opt) : `${key}=; max-age=0`

  if (cookies) {
    cookies.push(normValue)
  } else {
    cookies = normValue
  }

  res.setHeader('Set-Cookie', cookies)
}
