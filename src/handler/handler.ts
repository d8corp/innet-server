import { createHandler } from 'innet'
import { jsxComponent, type JSXElement, jsxPlugins } from '@innet/jsx'
import { array as isArray, arraySync, async, fn, nullish, object as isObject, promise } from '@innet/utils'

import {
  any,
  type AnyProps,
  api,
  type ApiProps,
  array,
  type ArrayProps,
  binary,
  type BinaryProps,
  blacklist,
  type BlacklistProps,
  body,
  type BodyProps,
  boolean,
  type BooleanProps,
  cms,
  type CmsProps,
  contact,
  type ContactProps,
  cookie,
  type CookieProps,
  date,
  type DateProps,
  dts,
  type DtsProps,
  endpoint,
  type EndpointProps,
  env,
  type EnvProps,
  error,
  type ErrorProps,
  field,
  type FieldProps,
  file,
  type FileProps,
  header,
  type HeaderProps,
  host,
  type HostProps,
  integer,
  type IntegerProps,
  license,
  type LicenseProps,
  nullPlugin,
  type NullProps,
  number,
  type NumberProps,
  object,
  type ObjectProps,
  param,
  type ParamProps,
  preset,
  type PresetProps,
  protection,
  type ProtectionProps,
  proxy,
  type ProxyProps,
  redirect,
  type RedirectProps,
  response,
  type ResponseProps,
  returnPlugin,
  type ReturnProps,
  server,
  serverFn,
  type ServerProps,
  string,
  type StringProps,
  success,
  type SuccessProps,
  tag,
  type TagProps,
  tuple,
  type TupleProps,
  ui,
  type UiProps,
  uuid,
  type UuidProps,
  variable,
  type VariableProps,
  whitelist,
  type WhitelistProps,
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
  response,
  return: returnPlugin,
  server,
  string,
  success,
  tag,
  tuple,
  ui,
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
    type Element =
    // eslint-disable-next-line @typescript-eslint/ban-types
      | ({} & string)
      | ArrayElement
      | FunctionElement
      | JSXElement
      | boolean
      | null
      // eslint-disable-next-line @typescript-eslint/ban-types
      | number
      | undefined

    interface ArrayElement extends Array<Element> {}

    type FunctionElement = () => Element

    interface ElementChildrenAttribute {
      // eslint-disable-next-line @typescript-eslint/ban-types
      children: {}
    }
    interface IntrinsicElements {
      /** Accepts any value type. Useful when you want to allow flexible input without strict type validation. */
      any: AnyProps
      /** Defines a REST API with OpenAPI documentation. Place inside `<server>` to register endpoints and configure OpenAPI settings. */
      api: ApiProps
      /** Arrays represent collections of items of the same type. Control the number of items with `min` and `max`, and ensure uniqueness with `unique`. */
      array: ArrayProps
      /** File upload or binary data. Typically used with multipart/form-data. */
      binary: BinaryProps
      /** Block requests from specific IP addresses. */
      blacklist: BlacklistProps
      /** Define the structure and validation rules for the request body that your endpoint accepts. */
      body: BodyProps
      /** True or false value. */
      boolean: BooleanProps
      /** Serve static files from a directory. */
      cms: CmsProps
      /** Define contact information for the API. */
      contact: ContactProps
      /** Set HTTP cookies in the response. */
      cookie: CookieProps
      /** ISO 8601 date format. */
      date: DateProps
      /** Automatically generate TypeScript type definitions for your entire API. */
      dts: DtsProps
      /** Defines a REST API endpoint with request/response specifications. */
      endpoint: EndpointProps

      /**
       * Conditionally execute content based on environment variables.
       *
       * @example
       * ```tsx
       * <api>
       *   <env is='dev'>
       *     <ui />
       *   </env>
       * </api>
       * ```
       * */
      env: EnvProps
      /** Return an error response. */
      error: ErrorProps
      /** Defines a single field within an `<object>`. */
      field: FieldProps
      /** Serve a single file. */
      file: FileProps
      /** Configure HTTP response headers that will be sent to clients. */
      header: HeaderProps
      /** Define a server URL/host for the API. Useful for documenting multiple deployment environments. */
      host: HostProps
      /** Whole number with optional validation. */
      integer: IntegerProps
      /** Define the license for your API. */
      license: LicenseProps
      /** Represents a null value explicitly. */
      null: NullProps
      /** Decimal number with optional validation. */
      number: NumberProps
      /**
       * Objects represent structured data with named fields. Use to define complex schemas with multiple properties.
       * @example
       * <object description='User object'>
       *   id: <uuid readOnly />
       *   name: <string min={1} max={100} />
       *   email: <string format='email' />
       *   role: <string default='user' values={['admin', 'user', 'guest']} />
       * </object>
       * */
      object: ObjectProps
      /** Specify query parameters, path parameters, headers, and cookies that your endpoint accepts. */
      param: ParamProps
      /** Configure request scope without interrupting execution. Use to set up headers, cookies, and other metadata. */
      preset: PresetProps
      /** Protect your API with a secret value that must be provided by clients. */
      protection: ProtectionProps
      /** Forward requests to another server. */
      proxy: ProxyProps
      /** Redirect requests to another URL. */
      redirect: RedirectProps
      /** Define what your endpoint will return to clients. Specify response status code and data structure. */
      response: ResponseProps
      /** Handles endpoint responses and works like a `return` statement in functions. Only one can execute per scope. */
      return: ReturnProps
      /** The root element that starts an HTTP(S) server. Configure server port, SSL certificates, and lifecycle events. */
      server: ServerProps
      /** Text data with optional validation. */
      string: StringProps
      /** Return a successful response with optional data. */
      success: SuccessProps
      /** Organize and categorize API endpoints using tags. Group related endpoints together in documentation. */
      tag: TagProps
      /** A fixed-length array with specific types for each position. */
      tuple: TupleProps
      /** Add interactive API documentation. Choose from Swagger UI, Scalar, RapiDoc, or ReDoc. */
      ui: UiProps
      /** Universally unique identifier in UUID format. */
      uuid: UuidProps
      /** Define a variable used in host URLs for substitution. */
      variable: VariableProps
      /** Allow requests only from specific IP addresses. */
      whitelist: WhitelistProps
    }
  }
}
