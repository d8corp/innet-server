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
      /**
       * Accepts any value type. Useful when you want to allow flexible input without strict type validation.
       *
       * @example
       * ```tsx
       * <param in='query' name='data'>
       *   <any />
       * </param>
       * ```
       * */
      any: AnyProps

      /**
       * Defines a REST API with OpenAPI documentation. Place inside `<server>` to register endpoints and configure OpenAPI settings.
       *
       * @example
       * ```tsx
       * <server>
       *   <api
       *     title='My API'
       *     description='API description in **Markdown**'
       *     version='1.0.0'
       *     prefix='/api'
       *   />
       * </server>
       * ```
       * */
      api: ApiProps

      /**
       * Arrays represent collections of items of the same type.
       * Control the number of items with `min` and `max`, and ensure uniqueness with `unique`.
       *
       * @example
       * ```tsx
       * <array min={1} max={10} unique>
       *   <string />
       * </array>
       * ```
       * */
      array: ArrayProps

      /**
       * File upload or binary data. Typically used with multipart/form-data.
       *
       * @example
       * ```tsx
       * <field key='avatar'>
       *   <binary accept='image/*' min={1024} max={5242880} />
       * </field>
       * ```
       * */
      binary: BinaryProps

      /**
       * Block requests from specific IP addresses.
       *
       * @example
       * ```tsx
       * <server>
       *   <blacklist ip='192.168.1.1,10.0.0.1'>
       *     <error status='forbidden' />
       *   </blacklist>
       * </server>
       * ```
       * */
      blacklist: BlacklistProps

      /**
       * Define the structure and validation rules for the request body that your endpoint accepts.
       *
       * @example
       * ```tsx
       * <body>
       *   <object>
       *     name: <string min={1} max={100} />
       *     email: <string format='email' />
       *     age?: <integer min={0} max={150} />
       *   </object>
       * </body>
       * ```
       * */
      body: BodyProps

      /**
       * True or false value.
       *
       * @example
       * ```tsx
       * <param in='query' name='active'>
       *   <boolean default={true} />
       * </param>
       * ```
       * */
      boolean: BooleanProps

      /**
       * Serve static files from a directory.
       *
       * @example
       * ```tsx
       * <return>
       *   <cms dir='public' />
       * </return>
       * ```
       * */
      cms: CmsProps

      /**
       * Define contact information for the API.
       *
       * @example
       * ```tsx
       * <api>
       *   <contact
       *     name='Support Team'
       *     email='support@example.com'
       *     url='https://support.example.com'
       *   />
       * </api>
       * ```
       * */
      contact: ContactProps

      /**
       * Set HTTP cookies in the response.
       *
       * @example
       * ```tsx
       * <return>
       *   <cookie
       *     key='sessionId'
       *     value='abc123'
       *     httpOnly
       *     secure
       *     sameSite
       *     maxAge={86400}
       *   />
       *   <success />
       * </return>
       * ```
       * */
      cookie: CookieProps

      /**
       * ISO 8601 date format.
       *
       * @example
       * ```tsx
       * <param in='query' name='birthDate'>
       *   <date min='1900-01-01' max='now' />
       * </param>
       * ```
       * */
      date: DateProps

      /**
       * Automatically generate TypeScript type definitions for your entire API.
       *
       * @example
       * ```tsx
       * <api>
       *   <dts
       *     path='src/api.d.ts'
       *     namespace='Api'
       *   />
       * </api>
       * ```
       * */
      dts: DtsProps

      /**
       * Defines a REST API endpoint with request/response specifications.
       *
       * @example
       * ```tsx
       * <endpoint operationId='getTodos' method='get' path='/todos' summary='Get list of todos'>
       *   <param in='query' name='done'><boolean /></param>
       *   <param in='query' name='page'><number default={1} /></param>
       *   <param in='query' name='pageSize'><number default={12} /></param>
       *   <response description='Response Description'>
       *     <object>
       *       page: <number default={1} />
       *       pageSize: <number example={10} />
       *       count: <number default={11} />
       *       todos:
       *         <array>
       *           <object>
       *             id: <uuid />
       *             created: <date />
       *             changed: <date nullable />
       *             title: <string example='Check @innet/dom librarry' />
       *             done: <boolean />
       *           </object>
       *         </array>
       *     </object>
       *   </response>
       *   <return>
       *     <success>{{ page: 1, pageSize: 10, count: 0, todos: [] }}</success>
       *   </return>
       * </endpoint>
       * ```
       * */
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

      /**
       * Return an error response.
       *
       * @example
       * ```tsx
       * <return>
       *   <error status='notFound' code='userNotFound'>
       *     {{ message: 'User not found' }}
       *   </error>
       * </return>
       * ```
       * */
      error: ErrorProps

      /**
       * Defines a single field within an `<object>`.
       *
       * @example
       * ```tsx
       * <object>
       *   <field key='id' readOnly>
       *     <uuid />
       *   </field>
       *   <field key='password' writeOnly>
       *     <string min={8} />
       *   </field>
       *   <field key='nickname' optional>
       *     <string />
       *   </field>
       * </object>
       * ```
       * */
      field: FieldProps

      /**
       * Serve a single file.
       *
       * @example
       * ```tsx
       * <return>
       *   <file path='package.json' />
       * </return>
       * ```
       * */
      file: FileProps

      /**
       * Configure HTTP response headers that will be sent to clients.
       *
       * @example
       * ```tsx
       * <server>
       *   <preset>
       *     <header key='Cache-Control' value='no-cache' />
       *   </preset>
       *   <api>
       *     <preset>
       *       <header key='Cache-Control' value='no-cache' />
       *     </preset>
       *     <endpoint method='get' path='/todos'>
       *       <return>
       *         <header key='Cache-Control' value='private, no-store' />
       *         <success>{[]}</success>
       *       </return>
       *     </endpoint>
       *   </api>
       * </server>
       * ```
       * */
      header: HeaderProps

      /**
       * Define a server URL/host for the API. Useful for documenting multiple deployment environments.
       *
       * @example
       * ```tsx
       * <api>
       *   <host
       *     url='https://api.example.com'
       *     description='Production server'
       *   />
       *   <host
       *     url='https://staging-api.example.com'
       *     description='Staging server'
       *   />
       * </api>
       * ```
       * */
      host: HostProps

      /**
       * Whole number with optional validation.
       *
       * @example
       * ```tsx
       * <param in='query' name='age'>
       *   <integer min={0} max={150} />
       * </param>
       * ```
       * */
      integer: IntegerProps

      /**
       * Define the license for your API.
       *
       * @example
       * ```tsx
       * <api>
       *   <license
       *     name='Apache 2.0'
       *     identifier='Apache-2.0'
       *     url='https://apache.org'
       *   />
       * </api>
       * ```
       * */
      license: LicenseProps

      /**
       * Represents a null value explicitly.
       *
       * @example
       * ```tsx
       * <param in='query' name='age'>
       *   <null title='Users without age' />
       *   <number title='Users with exact the age' />
       *   <tuple>
       *     <number title='Users from the age' />
       *     <number title='Users to the age' />
       *   </tuple>
       * </param>
       * ```
       * */
      null: NullProps

      /**
       * Decimal number with optional validation.
       *
       * @example
       * ```tsx
       * <param in='query' name='price'>
       *   <number min={0} max={10000} multipleOf={0.01} />
       * </param>
       * ```
       * */
      number: NumberProps

      /**
       * Objects represent structured data with named fields.
       * Use to define complex schemas with multiple properties.
       *
       * @example
       * ```tsx
       * <object description='User object'>
       *   id: <uuid readOnly />
       *   name: <string min={1} max={100} />
       *   email: <string format='email' />
       *   role: <string default='user' values={['admin', 'user', 'guest']} />
       * </object>
       * ```
       * */
      object: ObjectProps

      /**
       * Specify query parameters, path parameters, headers, and cookies that your endpoint accepts.
       *
       * @example
       * ```tsx
       * <endpoint method='get' path='/users/{id}'>
       *   <param in='path' name='id'><uuid /></param>
       *   <param in='query' name='format'>
       *     <string default='json' values={['json', 'xml']} />
       *   </param>
       *   <param in='header' name='authorization'>
       *     <string />
       *   </param>
       * </endpoint>
       * ```
       * */
      param: ParamProps

      /**
       * Configure request scope without interrupting execution.
       * Use to set up headers, cookies, and other metadata.
       *
       * @example
       * ```tsx
       * <server>
       *   <preset>
       *     <header
       *       key='Cache-Control'
       *       value='no-cache, no-store, must-revalidate'
       *     />
       *   </preset>
       * </server>
       * ```
       * */
      preset: PresetProps

      /**
       * Protect your API with a secret value that must be provided by clients.
       *
       * @example
       * ```tsx
       * <server>
       *   <protection>
       *     <error status='forbidden' />
       *   </protection>
       * </server>
       * ```
       * */
      protection: ProtectionProps

      /**
       * Forward requests to another server.
       *
       * @example
       * ```tsx
       * <endpoint method='get' path='/external'>
       *   <return>
       *     <proxy to='https://api.example.com' />
       *   </return>
       * </endpoint>
       * ```
       * */
      proxy: ProxyProps

      /**
       * Redirect requests to another URL.
       *
       * @example
       * ```tsx
       * <return>
       *   <redirect to='https://example.com' />
       * </return>
       * ```
       * */
      redirect: RedirectProps

      /**
       * Define what your endpoint will return to clients.
       * Specify response status code and data structure.
       *
       * @example
       * ```tsx
       * <endpoint method='get' path='/users/{id}'>
       *   <response status={200}>
       *     <object>
       *       id: <uuid />
       *       name: <string />
       *     </object>
       *   </response>
       *   <response status={404}>
       *     <object>
       *       error: <string />
       *     </object>
       *   </response>
       * </endpoint>
       * ```
       * */
      response: ResponseProps

      /**
       * The `<return>` element handles endpoint responses and works like a `return` statement in functions.
       * Only one `<return>` can execute per scope.
       * Use it to respond with success/error, set headers, cookies, and conditionally control the request flow.
       *
       * @example
       * ```tsx
       * <endpoint method='get' path='/users'>
       *   <return>
       *     <success>{{ users: [] }}</success>
       *   </return>
       * </endpoint>
       * ```
       * */
      return: ReturnProps

      /**
       * The `<server>` is the root element that starts an HTTP(S) server.
       * Use it to configure the server port, SSL certificates, and register lifecycle event handlers.
       * All routes and APIs must be placed inside the `<server>` element.
       *
       * @example
       * ```tsx
       * <server port={3000}>
       *   <api />
       * </server>
       * ```
       * */
      server: ServerProps

      /**
       * Text data with optional validation.
       *
       * @example
       * ```tsx
       * <param in='query' name='email'>
       *   <string format='email' />
       * </param>
       * ```
       * */
      string: StringProps

      /**
       * Return a successful response with optional data.
       *
       * @example
       * ```tsx
       * <return>
       *   <success status='created'>
       *     {{ id: 1, name: 'John' }}
       *   </success>
       * </return>
       * ```
       * */
      success: SuccessProps

      /**
       * Organize and categorize API endpoints using tags. Group related endpoints together in documentation.
       *
       * @example
       * ```tsx
       * <api>
       *   <tag name='Users' group='Management'>
       *     <endpoint method='get' path='/users' />
       *     <endpoint method='get' path='/users/{userId}' />
       *     <endpoint method='post' path='/users' />
       *   </tag>
       * </api>
       * ```
       * */
      tag: TagProps

      /**
       * A fixed-length array with specific types for each position.
       *
       * @example
       * ```tsx
       * <tuple>
       *   <string />
       *   <number />
       *   <boolean />
       * </tuple>
       * ```
       * */
      tuple: TupleProps

      /**
       * Add interactive API documentation.
       * Choose from Swagger UI, Scalar, RapiDoc, or ReDoc.
       *
       * @example
       * ```tsx
       * <api>
       *   <ui />
       * </api>
       * ```
       * */
      ui: UiProps

      /**
       * Universally unique identifier in UUID format.
       *
       * @example
       * ```tsx
       * <param in='cookie' name='sessionId'>
       *   <uuid default='new' />
       * </param>
       * ```
       * */
      uuid: UuidProps

      /**
       * Define a variable used in host URLs for substitution.
       *
       * @example
       * ```tsx
       * <host url='https://{env}.example.com' description='Test servers'>
       *   <variable
       *     key='env'
       *     values={['dev', 'staging', 'prod']}
       *     value='staging'
       *     description='Environment name'
       *   />
       * </host>
       * ```
       * */
      variable: VariableProps

      /**
       * Allow requests only from specific IP addresses.
       *
       * @example
       * ```tsx
       * <server>
       *   <whitelist ip='192.168.1.1,10.0.0.1'>
       *     <error status='forbidden' />
       *   </whitelist>
       * </server>
       * ```
       * */
      whitelist: WhitelistProps
    }
  }
}
