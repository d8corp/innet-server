import { createHandler } from 'innet'
import {
  context, ContextProps,
  jsxComponent, jsxPlugins,
  slot, SlotProps,
  slots, SlotsProps,
} from '@innet/jsx'
import { array, arraySync, async, fn, nullish, object as isObject, promise } from '@innet/utils'

import { serverFn } from '../handlerPlugins'
import {
  api, ApiProps,
  contact, ContactProps,
  endpoint, EndpointProps,
  field, FieldProps,
  license, LicenseProps,
  number, NumberProps,
  object, ObjectProps,
  response, ResponseProps,
  server, ServerProps,
  stand, StandProps,
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
  field,
  number,
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
    }
  }
}
