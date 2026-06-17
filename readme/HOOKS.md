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
        <summary>&nbsp;📁 <a href="#initialization">Initialization</a></summary>
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
      <p>╘  🪝 <a href="#useclientip">useClientIp</a></p>
    </blockquote>
  </details>
</sub>

These hooks can only be used inside a server plugin (useServerPlugin) during request handling. They are designed to process user requests and provide access to request/response data.

### useRequest
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useRequest

Returns the HTTP request object.

- **Returns:** `IncomingMessage`

```typescript
const request = useRequest()
```

### useResponse
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useResponse

Returns the HTTP response object.

- **Returns:** `ServerResponse`

```typescript
const response = useResponse()
```

### usePath
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / usePath

Returns the request path.

- **Returns:** `string`

```typescript
const path = usePath()
```

### useHeaders
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useHeaders

Returns request headers.

- **Returns:** `Record<string, string>`

```typescript
const headers = useHeaders()
```

### useCookies
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useCookies

Returns request cookies.

- **Returns:** `Record<string, string>`

```typescript
const cookies = useCookies()
```

### useParams
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useParams

Returns URL path parameters.

- **Returns:** `Record<string, any>`

```typescript
const params = useParams()
```

### useSearch
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useSearch

Returns query parameters.

- **Returns:** `Record<string, any>`

```typescript
const search = useSearch()
```

### useBody
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useBody

Returns the request body.

- **Returns:** `any`

```typescript
const body = useBody()
```

### useClientIp
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime) / useClientIp

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
useServerPlugin(async () => {
  // plugin logic
})
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
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useServer

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
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useServerPort

Returns the server port.

- **Returns:** `number`

```typescript
function MyComponent () {
  const port = useServerPort()
}
```

### useIsServerHttps
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useIsServerHttps

Returns whether the server uses HTTPS.

- **Returns:** `boolean`

```typescript
function MyComponent () {
  const isHttps = useIsServerHttps()
}
```

### useComponentName
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Initialization](#initialization-hooks) / useComponentName

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

