import { createHandler } from 'innet'
import {
  context, type ContextProps,
  jsxComponent, jsxPlugins,
  slot, type SlotProps,
  slots, type SlotsProps,
} from '@innet/jsx'
import { array as isArray, arraySync, async, fn, nullish, object as isObject, promise } from '@innet/utils'

import {
  any, type AnyProps,
  api, type ApiProps,
  array, type ArrayProps,
  binary, type BinaryProps,
  blacklist, type BlacklistProps,
  body, type BodyProps,
  boolean, type BooleanProps,
  cms, type CmsProps,
  contact, type ContactProps,
  cookie, type CookieProps,
  date, type DateProps,
  dts, type DtsProps,
  endpoint, type EndpointProps,
  env, type EnvProps,
  error, type ErrorProps,
  field, type FieldProps,
  file, type FileProps,
  header, type HeaderProps,
  host, type HostProps,
  integer, type IntegerProps,
  license, type LicenseProps,
  nullPlugin, type NullProps,
  number, type NumberProps,
  object, type ObjectProps,
  param, type ParamProps,
  preset, type PresetProps,
  protection, type ProtectionProps,
  proxy, type ProxyProps,
  redirect, type RedirectProps,
  request, type RequestProps,
  response, type ResponseProps,
  server, serverFn, type ServerProps,
  string, type StringProps,
  success, type SuccessProps,
  swagger, type SwaggerProps,
  tag, type TagProps,
  tuple, type TupleProps,
  uuid, type UuidProps,
  variable, type VariableProps,
  whitelist, type WhitelistProps,
} from '../plugins'

export const arrayPlugins = [
  arraySync,
]

export const JSXPlugins = {
  any,
  api,
  array,
  binary,
  blacklist,
  body,
  boolean,
  cms,
  contact,
  context,
  cookie,
  date,
  dts,
  endpoint,
  env,
  error,
  field,
  file,
  header,
  host,
  integer,
  license,
  null: nullPlugin,
  number,
  object,
  param,
  preset,
  protection,
  proxy,
  redirect,
  request,
  response,
  slot,
  slots,
  server,
  swagger,
  string,
  success,
  tag,
  tuple,
  uuid,
  variable,
  whitelist,
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
  isArray(arrayPlugins),
  nullish([]),
  isObject(objectPlugins),
  fn(fnPlugins),
])

declare global {
  namespace JSX {
    interface IntrinsicElements {
      any: AnyProps
      api: ApiProps
      array: ArrayProps
      binary: BinaryProps
      blacklist: BlacklistProps
      body: BodyProps
      boolean: BooleanProps
      cms: CmsProps
      contact: ContactProps
      context: ContextProps
      cookie: CookieProps
      date: DateProps
      dts: DtsProps
      endpoint: EndpointProps
      env: EnvProps
      error: ErrorProps
      field: FieldProps
      file: FileProps
      header: HeaderProps
      host: HostProps
      integer: IntegerProps
      license: LicenseProps
      null: NullProps
      number: NumberProps
      object: ObjectProps
      param: ParamProps
      preset: PresetProps
      protection: ProtectionProps
      proxy: ProxyProps
      redirect: RedirectProps
      request: RequestProps
      response: ResponseProps
      slot: SlotProps
      slots: SlotsProps
      server: ServerProps
      swagger: SwaggerProps
      string: StringProps
      success: SuccessProps
      tag: TagProps
      tuple: TupleProps
      uuid: UuidProps
      variable: VariableProps
      whitelist: WhitelistProps
    }
  }
}
