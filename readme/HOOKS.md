# Hooks
###### [🏠︎](./README.md) / Hooks [↑](./SCHEMAS.md) [↓](./CONFIGURATION.md)

<sub>
  <details>
    <summary>&nbsp;📁 Sections</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁 <a href="#runtime">Runtime</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="#userequest">useRequest</a></p>
          <p>├  🪝 <a href="#useresponse">useResponse</a></p>
          <p>├  🪝 <a href="#usepath">usePath</a></p>
          <p>├  🪝 <a href="#useheaders">useHeaders</a></p>
          <p>├  🪝 <a href="#usecookies">useCookies</a></p>
          <p>├  🪝 <a href="#useparams">useParams</a></p>
          <p>├  🪝 <a href="#usesearch">useSearch</a></p>
          <p>├  🪝 <a href="#usebody">useBody</a></p>
          <p>├  🪝 <a href="#usedata">useData</a></p>
          <p>╘  🪝 <a href="#useclientip">useClientIp</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#initialization">Initialization</a></summary>
        <blockquote>
          <p></p>
          <p>╘  🪝 <a href="#useserverplugin">useServerPlugin</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#shared">Shared</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="#useserver">useServer</a></p>
          <p>├  🪝 <a href="#useserverport">useServerPort</a></p>
          <p>├  🪝 <a href="#useisserverhttps">useIsServerHttps</a></p>
          <p>╘  🪝 <a href="#usecomponentname">useComponentName</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

Hooks provide access to request/response context and server information inside components.
They allow you to access HTTP headers, query parameters, body data, and more.
Use them to implement request handling logic.

**Example:**
```typescript jsx
import { useParams, useRequest } from '@innet/server'

export function GetUser() {
  const { userId } = useParams()
  const req = useRequest()
  
  return <success>{{ userId, method: req.method }}</success>
}
```

## Runtime
###### [🏠︎](./README.md) / [Hooks](#hooks) / Runtime [↓](#initialization)

<sub>
  <details>
    <summary>&nbsp;🪝 Hooks</summary>
    <blockquote>
      <p></p>
      <p>├  🪝 <a href="#userequest">useRequest</a></p>
      <p>├  🪝 <a href="#useresponse">useResponse</a></p>
      <p>├  🪝 <a href="#usepath">usePath</a></p>
      <p>├  🪝 <a href="#useheaders">useHeaders</a></p>
      <p>├  🪝 <a href="#usecookies">useCookies</a></p>
      <p>├  🪝 <a href="#useparams">useParams</a></p>
      <p>├  🪝 <a href="#usesearch">useSearch</a></p>
      <p>├  🪝 <a href="#usebody">useBody</a></p>
      <p>├  🪝 <a href="#usedata">useData</a></p>
      <p>╘  🪝 <a href="#useclientip">useClientIp</a></p>
    </blockquote>
  </details>
</sub>

These hooks can only be used inside a server plugin ([useServerPlugin](#useserverplugin)) during request handling.
They are designed to process user requests and provide access to request/response data.

### useRequest
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useRequest [↓](#useresponse)

Returns the HTTP request object.

- **Returns:** `IncomingMessage`

```typescript
const request = useRequest()
```

### useResponse
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useResponse [↑](#userequest) [↓](#usepath)

Returns the HTTP response object.

- **Returns:** `ServerResponse`

```typescript
const response = useResponse()
```

### usePath
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / usePath [↑](#useresponse) [↓](#useheaders)

Returns the request path.

- **Returns:** `string`

```typescript
const path = usePath()
```

### useHeaders
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useHeaders [↑](#usepath) [↓](#usecookies)

Returns request headers.

- **Returns:** `Record<string, string>`

```typescript
const headers = useHeaders()
```

### useCookies
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useCookies [↑](#useheaders) [↓](#useparams)

Returns request cookies.

- **Returns:** `Record<string, string>`

```typescript
const cookies = useCookies()
```

### useParams
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useParams [↑](#usecookies) [↓](#usesearch)

Returns URL path parameters.

- **Returns:** `Record<string, any>`

```typescript
const params = useParams()
```

### useSearch
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useSearch [↑](#useparams) [↓](#usebody)

Returns query parameters.

- **Returns:** `Record<string, any>`

```typescript
const search = useSearch()
```

### useBody
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useBody [↑](#usesearch) [↓](#usedata)

Returns the request body.

- **Returns:** `any`

```typescript
const body = useBody()
```

### useData
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useData [↑](#usebody) [↓](#useclientip)

Returns typed request data from a specific source (params, search, or body) with full TypeScript support and IDE autocomplete.

When used with the `<dts>` element, this hook provides automatic type inference based on your API schema, giving you type safety and autocomplete for request data without manual type definitions.

**Important:** The hook validates that the component is used in the correct endpoint. If you specify an endpoint parameter and use the component in a different endpoint, an error will be thrown at runtime.

- **Parameters:**
  - `source` - Data source: `'params'` | `'search'` | `'body'`
  - `endpoint` - (optional) Endpoint string for automatic typing (e.g., `'POST:/todos'`)
- **Returns:** `T` - Typed data from the specified source

**Example:**
```tsx
import { useData } from '@innet/server'

export function AddTodo () {
  const todo = useData('body', 'POST:/todos')

  todos.push(todo)

  return <success />
}
```

**Error handling:**
If the component is used in the wrong endpoint, you'll get a validation error with the exact location:
```
    Error: Exception in <AddTodo>
    at <AddTodo> (/.../src/modules/TodoModule/TodoModule.tsx:18:11)
  16 |         </response>
  17 |         <return>
> 18 |           <AddTodo />
     |           ^
  19 |         </return>
  20 |       </endpoint>
  21 |       <endpoint method="post" path="/todos" summary="Add a todo">
    at <TodoModule> (/.../src/app/App/App.tsx:16:9)
    at <App> (/.../src/index.tsx:6:7)
    at ... (8 more node_modules calls)
      [cause]: Error: <AddTodo> MUST be in <endpoint> of POST:/todos
      at Object.useThrow (/.../node_modules/@innet/server/hooks/useThrow/useThrow.js:10:11)
      at Object.queueNanotask (/.../node_modules/queue-nano-task/queueNanotask.js:18:41)
      at Object.innet (/.../node_modules/innet/innet.js:28:19) {
      at ... (1 more node_modules calls)
      at AddTodo (/.../src/requests/todo/AddTodo/AddTodo.tsx:6:16)
      at ... (7 more node_modules calls)
```

This ensures type safety and prevents runtime errors from mismatched data structures.

### useClientIp
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useClientIp [↑](#usedata)

Returns the client IP address.

- **Returns:** `string`

```typescript
const ip = useClientIp()
```

## Initialization
###### [🏠︎](./README.md) / [Hooks](#hooks) / Initialization [↑](#runtime) [↓](#shared)

<sub>
  <details>
    <summary>&nbsp;🪝 Hooks</summary>
    <blockquote>
      <p></p>
      <p>╘  🪝 <a href="#useserverplugin">useServerPlugin</a></p>
    </blockquote>
  </details>
</sub>

These hooks are used only during initialization and cannot be used when processing user requests to the server.

### useServerPlugin
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useServerPlugin

Registers a server plugin.

- **Returns:** `void`

```typescript
function MyComponent () {
  // Initialisation

  useServerPlugin(async () => {
    // User request
  })
}
```

## Shared
###### [🏠︎](./README.md) / [Hooks](#hooks) / Shared  [↑](#initialization)

<sub>
  <details>
    <summary>&nbsp;🪝 Hooks</summary>
    <blockquote>
      <p></p>
      <p>├  🪝 <a href="#useserver">useServer</a></p>
      <p>├  🪝 <a href="#useserverport">useServerPort</a></p>
      <p>├  🪝 <a href="#useisserverhttps">useIsServerHttps</a></p>
      <p>╘  🪝 <a href="#usecomponentname">useComponentName</a></p>
    </blockquote>
  </details>
</sub>

These hooks can be used both during initialization and when processing user requests to the server.

### useServer
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useServer [↓](#useserverport)

Returns `ServerContext` with the server instance.

- **Returns:** `Server`

```typescript
function MyComponent () {
  const context = useServer()
  // context instanceof ServerContext

  const { server } = context
  // server instanceof HttpServer or HttpsServer
}
```

### useServerPort
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useServerPort [↑](#useserver) [↓](#useisserverhttps)

Returns the server port.

- **Returns:** `number`

```typescript
function MyComponent () {
  const port = useServerPort()
}
```

### useIsServerHttps
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useIsServerHttps [↑](#useserverport) [↓](#usecomponentname)

Returns whether the server uses HTTPS.

- **Returns:** `boolean`

```typescript
function MyComponent () {
  const isHttps = useIsServerHttps()
}
```

### useComponentName
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useComponentName [↑](#useisserverhttps)

Returns the current component name. Useful for debugging.

- **Returns:** `string`

```typescript
function useMyHook () {
  const name = useComponentName()
  console.log(name)
}

function MyComponent () {
  useMyHook()
  // logs: MyComponent
}
```

---

#### [← Schemas](./SCHEMAS.md) | [Configuration →](./CONFIGURATION.md)

