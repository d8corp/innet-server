import html from '@innet/html'
import { jsxComponent, jsxPlugins, jsxTemplate } from '@innet/jsx'
import { switchAsync, SwitchProps } from '@innet/switch'
import { array, arrayAsync, arrayClear, arraySingleLess, async, object } from '@innet/utils'
import { createHandler } from 'innet'

import {
  cms, CmsProps,
  cookie, CookieProps,
  error, ErrorProps,
  file, FileProps,
  header, HeaderProps,
  proxy, ProxyProps,
  router, RouterProps,
  success, SuccessProps,
  redirect, RedirectProps,
} from '../plugins'
import { server, ServerProps } from '../server'

export const arrayPlugins = [
  arrayAsync,
  arrayClear,
  arraySingleLess,
]

export const JSXPlugins = {
  server,
  html,
  switch: switchAsync,
  router,
  cookie,
  header,
  success,
  error,
  cms,
  file,
  proxy,
  redirect,
}

export const objectPlugins = [
  jsxPlugins(JSXPlugins),
  jsxComponent,
  jsxTemplate,
]

export default createHandler([
  async,
  array(arrayPlugins),
  object(objectPlugins),
])

declare global {
  namespace JSX {
    interface IntrinsicElements {
      server: ServerProps
      router: RouterProps
      redirect: RedirectProps
      cookie: CookieProps
      success: SuccessProps
      error: ErrorProps
      header: HeaderProps
      cms: CmsProps
      file: FileProps
      switch: SwitchProps
      proxy: ProxyProps
    }
  }
}
