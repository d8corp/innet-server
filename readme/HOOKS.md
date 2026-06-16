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
        <summary>&nbsp;📁 <a href="#shared">Shared</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="#useserver">useServer</a></p>
          <p>├  🪝 <a href="#useserverport">useServerPort</a></p>
          <p>├  🪝 <a href="#useisserverhttps">useIsServerHttps</a></p>
          <p>├  🪝 <a href="#usecomponentname">useComponentName</a></p>
          <p>╘  🪝 <a href="#useserverplugin">useServerPlugin</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

Hooks provide access to request/response context and server information inside components. They allow you to access HTTP headers, query parameters, body data, and more. Use them to implement request handling logic without manually passing props.

**Request Data:**
- `useRequest()` — HTTP request object
- `useResponse()` — HTTP response object
- `useHeaders()` — Request headers
- `useCookies()` — Request cookies
- `useParams()` — URL parameters
- `useSearch()` — Query parameters
- `useBody()` — Request body
- `useClientIp()` — Client IP address
- `usePath()` — Request path

**Server Context:**
- `useServer()` — HTTP server instance
- `usePort()` — Server port
- `useIsServerHttps()` — Is HTTPS?
- `useComponentName()` — Current component name

**Example:**
```typescript jsx
import { useParams, useRequest } from '@innet/server'

export function GetUser() {
  const { userId } = useParams()
  const req = useRequest()
  
  return <success>{{ userId, method: req.method }}</success>
}
```

### Runtime
###### [🏠︎](./README.md) / [Hooks](#hooks) / Runtime

#### useRequest
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useRequest

Returns the HTTP request object.

- **Returns:** `IncomingMessage`

```typescript
const request = useRequest()
```

#### useResponse
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useResponse

Returns the HTTP response object.

- **Returns:** `ServerResponse`

```typescript
const response = useResponse()
```

#### usePath
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / usePath

Returns the request path.

- **Returns:** `string`

```typescript
const path = usePath()
```

#### useHeaders
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useHeaders

Returns request headers.

- **Returns:** `Record<string, string>`

```typescript
const headers = useHeaders()
```

#### useCookies
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useCookies

Returns request cookies.

- **Returns:** `Record<string, string>`

```typescript
const cookies = useCookies()
```

#### useParams
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useParams

Returns URL path parameters.

- **Returns:** `Record<string, any>`

```typescript
const params = useParams()
```

#### useSearch
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useSearch

Returns query parameters.

- **Returns:** `Record<string, any>`

```typescript
const search = useSearch()
```

#### useBody
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useBody

Returns the request body.

- **Returns:** `any`

```typescript
const body = useBody()
```

#### useClientIp
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useClientIp

Returns the client IP address.

- **Returns:** `string`

```typescript
const ip = useClientIp()
```

### Shared
###### [🏠︎](./README.md) / [Hooks](#hooks) / Shared

#### useServer
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServer

Returns the server instance.

- **Returns:** `Server`

```typescript
const server = useServer()
```

#### useServerPort
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPort

Returns the server port.

- **Returns:** `number`

```typescript
const port = useServerPort()
```

#### useIsServerHttps
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useIsServerHttps

Returns whether the server uses HTTPS.

- **Returns:** `boolean`

```typescript
const isHttps = useIsServerHttps()
```

#### useComponentName
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useComponentName

Returns the current component name.

- **Returns:** `string`

```typescript
const name = useComponentName()
```

#### useServerPlugin
###### [🏠︎](./README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPlugin

Registers a server plugin.

- **Returns:** `void`

```typescript
useServerPlugin(async () => {
  // plugin logic
})
```

---

#### [← Schemas](./SCHEMAS.md) | [Configuration →](./CONFIGURATION.md)

