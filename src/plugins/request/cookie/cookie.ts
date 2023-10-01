import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { type CookieSerializeOptions } from 'cookie'

import { useAction } from '../../../hooks'

export interface CookieProps extends CookieSerializeOptions {
  key: string
  value?: string
}

export const cookie: HandlerPlugin = () => {
  const action = useAction()
  const {
    key,
    value,
    ...opt
  } = useProps<CookieProps>()

  action.setCookie(key, value, opt)
}
