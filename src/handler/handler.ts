import { createHandler } from 'innet'
import {
  context, type ContextProps,
  jsxComponent, jsxPlugins,
  slot, type SlotProps,
  slots, type SlotsProps,
} from '@innet/jsx'
import { array as isArray, arraySync, async, fn, nullish, object as isObject, promise } from '@innet/utils'

import { serverFn } from '../handlerPlugins'
import {
  api, type ApiProps,
  array, type ArrayProps,
  body, type BodyProps,
  boolean, type BooleanProps,
  contact, type ContactProps,
  date, type DateProps,
  dev, type DevProps,
  dts, type DtsProps,
  endpoint, type EndpointProps,
  error, type ErrorProps,
  fallback, type FallbackProps,
  field, type FieldProps,
  host, type HostProps,
  integer, type IntegerProps,
  license, type LicenseProps,
  nullPlugin, type NullProps,
  number, type NumberProps,
  object, type ObjectProps,
  param, type ParamProps,
  prod, type ProdProps,
  proxy, type ProxyProps,
  redirect, type RedirectProps,
  request, type RequestProps,
  response, type ResponseProps,
  server, type ServerProps,
  string, type StringProps,
  success, type SuccessProps,
  swagger, type SwaggerProps,
  tag, type TagProps,
  tuple, type TupleProps,
  uuid, type UuidProps,
  variable, type VariableProps,
} from '../plugins'

export const arrayPlugins = [
  arraySync,
]

export const JSXPlugins = {
  context,
  slot,
  slots,
  server,
  host,
  variable,
  api,
  contact,
  license,
  tag,
  endpoint,
  swagger,
  response,
  object,
  array,
  field,
  number,
  integer,
  string,
  boolean,
  null: nullPlugin,
  dts,
  request,
  success,
  error,
  param,
  body,
  proxy,
  redirect,
  date,
  fallback,
  tuple,
  dev,
  prod,
  uuid,
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
    // @ts-expect-error: FIXME
    interface IntrinsicElements {
      context: ContextProps
      slot: SlotProps
      slots: SlotsProps
      server: ServerProps
      api: ApiProps
      contact: ContactProps
      license: LicenseProps
      host: HostProps
      variable: VariableProps
      tag: TagProps
      endpoint: EndpointProps
      swagger: SwaggerProps
      response: ResponseProps
      object: ObjectProps
      field: FieldProps
      number: NumberProps
      integer: IntegerProps
      string: StringProps
      array: ArrayProps
      boolean: BooleanProps
      null: NullProps
      dts: DtsProps
      request: RequestProps
      success: SuccessProps
      error: ErrorProps
      param: ParamProps
      body: BodyProps
      proxy: ProxyProps
      redirect: RedirectProps
      date: DateProps
      fallback: FallbackProps
      tuple: TupleProps
      dev: DevProps
      prod: ProdProps
      uuid: UuidProps
    }
  }
}
