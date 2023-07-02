import { createHandler } from 'innet'
import {
  context, ContextProps,
  jsxComponent, jsxPlugins,
  slot, SlotProps,
  slots, SlotsProps,
} from '@innet/jsx'
import { array as isArray, arraySync, async, fn, nullish, object as isObject, promise } from '@innet/utils'

import { serverFn } from '../handlerPlugins'
import {
  api, ApiProps,
  array, ArrayProps,
  contact, ContactProps,
  endpoint, EndpointProps,
  field, FieldProps,
  integer, IntegerProps,
  license, LicenseProps,
  number, NumberProps,
  object, ObjectProps,
  response, ResponseProps,
  server, ServerProps,
  stand, StandProps,
  string, StringProps,
  swagger, SwaggerProps,
  tag, TagProps,
  variable, VariableProps,
} from '../plugins'

export const arrayPlugins = [
  arraySync,
]

export const JSXPlugins = {
  context,
  slot,
  slots,
  server,
  stand,
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
    // @ts-ignore
    interface IntrinsicElements {
      context: ContextProps
      slot: SlotProps
      slots: SlotsProps
      server: ServerProps
      api: ApiProps,
      contact: ContactProps,
      license: LicenseProps,
      stand: StandProps,
      variable: VariableProps,
      tag: TagProps,
      endpoint: EndpointProps,
      swagger: SwaggerProps,
      response: ResponseProps,
      object: ObjectProps,
      field: FieldProps,
      number: NumberProps,
      integer: IntegerProps,
      string: StringProps,
      array: ArrayProps,
    }
  }
}
