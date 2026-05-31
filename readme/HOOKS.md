# Hooks
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / Hooks [↑](#schemas) [↓](#links)

Hooks provide access to request/response context and server information inside components.

### Runtime
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / Runtime

#### useRequest
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useRequest

Returns the HTTP request object.

- **Returns:** `IncomingMessage`

```typescript
const request = useRequest()
```

#### useResponse
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useResponse

Returns the HTTP response object.

- **Returns:** `ServerResponse`

```typescript
const response = useResponse()
```

#### usePath
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / usePath

Returns the request path.

- **Returns:** `string`

```typescript
const path = usePath()
```

#### useHeaders
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useHeaders

Returns request headers.

- **Returns:** `Record<string, string>`

```typescript
const headers = useHeaders()
```

#### useCookies
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useCookies

Returns request cookies.

- **Returns:** `Record<string, string>`

```typescript
const cookies = useCookies()
```

#### useParams
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useParams

Returns URL path parameters.

- **Returns:** `Record<string, any>`

```typescript
const params = useParams()
```

#### useSearch
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useSearch

Returns query parameters.

- **Returns:** `Record<string, any>`

```typescript
const search = useSearch()
```

#### useBody
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useBody

Returns the request body.

- **Returns:** `any`

```typescript
const body = useBody()
```

#### useClientIp
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useClientIp

Returns the client IP address.

- **Returns:** `string`

```typescript
const ip = useClientIp()
```

### Shared
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / Shared

#### useServer
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServer

Returns the server instance.

- **Returns:** `Server`

```typescript
const server = useServer()
```

#### useServerPort
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPort

Returns the server port.

- **Returns:** `number`

```typescript
const port = useServerPort()
```

#### useIsServerHttps
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useIsServerHttps

Returns whether the server uses HTTPS.

- **Returns:** `boolean`

```typescript
const isHttps = useIsServerHttps()
```

#### useComponentName
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useComponentName

Returns the current component name.

- **Returns:** `string`

```typescript
const name = useComponentName()
```

#### useServerPlugin
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPlugin

Registers a server plugin.

- **Returns:** `void`

```typescript
useServerPlugin(async () => {
  // plugin logic
})
```
