# Quick Start
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / Quick Start [↓](https://github.com/d8corp/innet-server/blob/2.0/readme/COMPONENTS.md)

Before you begin, make sure you have Node.js (v18 or later) installed. You'll also need a basic understanding of TypeScript and JSX.

## Hello World
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Quick Start](#quick-start) / Hello World [↓](#api-example)

Start your first `@innet/server` application. This minimal example shows how to create a server that responds to any request with a simple text message. Perfect for verifying your setup works correctly.

*src/index.ts*
```typescript
import { innet } from 'innet'
import { handler } from '@innet/server'
import app from './app'

innet(app, handler)
```

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <return>
      <success>Hello World!</success>
    </return>
  </server>
)
```

Start with `npm start`, then open http://localhost — you'll see `Hello World!` displayed.

## API Example
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Quick Start](#quick-start) / API Example [↑](#hello-world) [↓](#endpoint-example)

Generate OpenAPI documentation without writing any endpoints.
This shows the automatic OpenAPI 3.1.0 structure that `@innet/server` creates.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api />
  </server>
)
```

Open http://localhost — you'll see OpenAPI 3.1.0 JSON structure with API metadata.

## Endpoint Example
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Quick Start](#quick-start) / Endpoint Example [↑](#api-example) [↓](#component-example)

Build an API endpoint with automatic OpenAPI documentation.
This example demonstrates how to define an endpoint with HTTP method, path, and response handler.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API' version='1.0.0'>
      <endpoint
        method='get'
        path='/hello'
        summary='Greet the user'>
        <return>
          <success>
            {{ message: 'Hello!' }}
          </success>
        </return>
      </endpoint>
    </api>
  </server>
)
```

Test the endpoint: `curl http://localhost/hello` — returns `{"message":"Hello!"}`

## Component Example
###### [🏠︎](https://github.com/d8corp/innet-server/blob/2.0/readme/README.md) / [Quick Start](#quick-start) / Component Example [↑](#endpoint-example)

Create reusable components for your business logic.
This example shows how to extract endpoint logic into a separate component.

*src/app.tsx*
```typescript jsx
import { useSearch } from '@innet/server'

function Hello () {
  const search = useSearch<any>()
  const name: string = search?.name ?? 'World'

  return (
    <success>
      {{ message: `Hello ${name}!` }}
    </success>
  )
}

export default (
  <server>
    <api title='My API' version='1.0.0'>
      <endpoint
        method='get'
        path='/hello'
        summary='Greet the user'>
        <return>
          <Hello />
        </return>
      </endpoint>
    </api>
  </server>
)
```

Test the endpoint: `curl http://localhost/hello?name=John` — returns `{"message":"Hello John!"}`


