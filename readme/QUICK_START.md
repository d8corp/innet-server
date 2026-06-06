# Quick Start
###### [🏠︎](./README.md) / Quick Start [↓](./ELEMENTS.md)

<sub>
  <details>
    <summary>&nbsp;📁 Sections</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📦 <a href="#setup-environment">Setup Environment</a></summary>
        <blockquote>
          <p></p>
          <p>├  📁 <a href="#app">App</a></p>
          <p>╘  📁 <a href="#library">Library</a></p>
        </blockquote>
      </details>
      <p>├  📁 <a href="#hello-world">Hello World</a></p>
      <p>├  📁 <a href="#api-example">API Example</a></p>
      <p>├  📁 <a href="#endpoint-example">Endpoint Example</a></p>
      <p>╘  📁 <a href="#component-example">Component Example</a></p>
    </blockquote>
  </details>
</sub>

Before you begin, make sure you have [Node.js](https://nodejs.org/en) (v18 or later) installed.
You'll also need a basic understanding of [TypeScript](https://www.typescriptlang.org/) and [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html).

## Setup Environment
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Setup Environment [↓](#hello-world)

<sub>
  <details>
    <summary>&nbsp;📁 Sections</summary>
    <blockquote>
      <p></p>
      <p>├  📁 <a href="#app">App</a></p>
      <p>╘  📁 <a href="#library">Library</a></p>
    </blockquote>
  </details>
</sub>

You can set up your environment in two ways: create a ready-to-run application or a library for integration into other projects.
Both options use the [innetjs](https://www.npmjs.com/package/innetjs) CLI tool with preconfigured templates.

Choose the approach that fits your needs.

### App
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / [Setup Environment](#setup-environment) / App [↓](#library)

The easiest way to create a backend API application is with the [innetjs](https://www.npmjs.com/package/innetjs) CLI:

```shell
npx innetjs init my-app -t api
```

This template is available at [here](https://github.com/d8corp/innetjs-templates/tree/api)

To run the project in development mode:

```shell
npm start
```

To build the production version:

```shell
npm run build
```

### Library
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / [Setup Environment](#setup-environment) / Library [↑](#app)

This example shows how to create a library based on `@innet/server`:

```shell
npx innetjs init my-lib -t api-lib
```

This template is available at [here](https://github.com/d8corp/innetjs-templates/tree/api-lib)

To build the production version:

```shell
npm run build
```


## Hello World
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Hello World [↓](#api-example)

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
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / API Example [↑](#hello-world) [↓](#endpoint-example)

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
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Endpoint Example [↑](#api-example) [↓](#component-example)

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
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Component Example [↑](#endpoint-example)

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


