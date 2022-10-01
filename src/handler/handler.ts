import { createHandler } from 'innet'
import html from '@innet/html'
import {
  context, ContextProps,
  jsxComponent, jsxPlugins,
  slot, SlotProps,
  slots, SlotsProps,
} from '@innet/jsx'
import { switchAsync, SwitchProps } from '@innet/switch'
import { array, arrayAsync, arrayClear, arraySingleLess, async, fn, object, promise } from '@innet/utils'

import { serverFn } from '../experimental/serverFn'
import {
  access, AccessProps,
  cms, CmsProps,
  cookie, CookieProps,
  error, ErrorProps,
  file, FileProps,
  formatter, FormatterProps,
  header, HeaderProps,
  proxy, ProxyProps,
  redirect, RedirectProps,
  router, RouterProps,
  success, SuccessProps,
  validation, ValidationProps,
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
  validation,
  formatter,
  context,
  slot,
  slots,
  access,
}

export const fnPlugins = [
  serverFn,
]

export const objectPlugins = [
  jsxPlugins(JSXPlugins as any),
  jsxComponent,
]

export const promisePlugins = [
  async,
]

export const handler = createHandler([
  promise(promisePlugins),
  array(arrayPlugins),
  object(objectPlugins),
  fn(fnPlugins),
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
      validation: ValidationProps<any>
      formatter: FormatterProps<any>
      context: ContextProps
      slot: SlotProps
      slots: SlotsProps
      access: AccessProps
    }
  }
}
