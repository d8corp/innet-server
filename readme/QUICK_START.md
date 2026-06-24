# Quick Start
###### [🏠︎](./README.md) / Quick Start [↓](./ELEMENTS.md)

<sub>
  <details>
    <summary>&nbsp;📁 Sections</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📦 <a href="#environment">Environment</a></summary>
        <blockquote>
          <p></p>
          <p>├  📁 <a href="#app">App</a></p>
          <p>╘  📁 <a href="#library">Library</a></p>
        </blockquote>
      </details>
      <p>├  📁 <a href="#hello-world">Hello World</a></p>
      <p>├  📁 <a href="#api-example">API Example</a></p>
      <p>├  📁 <a href="#endpoint-example">Endpoint Example</a></p>
      <p>├  📁 <a href="#component-example">Component Example</a></p>
      <p>╘  📁 <a href="#components">Components</a></p>
    </blockquote>
  </details>
</sub>

Before you begin, make sure you have [Node.js](https://nodejs.org/en) (v18 or later) installed.
You'll also need a basic understanding of [TypeScript](https://www.typescriptlang.org/) and [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html).

## Environment
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Environment [↓](#hello-world)

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
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / [Environment](#environment) / App [↓](#library)

Create a new backend API application using the [innetjs](https://www.npmjs.com/package/innetjs) CLI:

```shell
npx innetjs init my-app -t api
```

Replace `my-app` with your desired application name (this will be the folder name).
The `-t` flag specifies the template to use. The `api` template is available at [here](https://github.com/d8corp/innetjs-templates/tree/api)

To run the project in development mode:

```shell
npm start
```

To build the production version:

```shell
npm run build
```

### Library
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / [Environment](#environment) / Library [↑](#app)

Create reusable component libraries for `@innet/server` that can be shared and integrated across multiple projects:

```shell
npx innetjs init my-lib -t api-lib
```

Replace `my-lib` with your desired library name (this will be the folder name).
The `-t` flag specifies the template to use.
The `api-lib` template is available [here](https://github.com/d8corp/innetjs-templates/tree/api-lib).

To build the production version:

```shell
npm run build
```

## Hello World
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Hello World [↑](#environment) [↓](#api-example)

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
      <endpoint method='get' path='/hello' summary='Greet the user'>
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

Test the endpoint: http://localhost/hello — returns `{"message":"Hello!"}`

## Component Example
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Component Example [↑](#endpoint-example) [↓](#components)

Create reusable components for your business logic.
This example shows how to extract endpoint logic into a separate component.

*src/app.tsx*
```typescript jsx
import { useData } from '@innet/server'

function Hello () {
  const { name } = useData('search', 'GET:/hello')

  return (
    <success>
      {{ message: `Hello ${name}!` }}
    </success>
  )
}

export default (
  <server>
    <api title='My API' version='1.0.0'>
      <endpoint method='get' path='/hello' summary='Greet the user'>
        <param in='query' name='name'>
          <string default='World' />
        </param>
        <return>
          <Hello />
        </return>
      </endpoint>
    </api>
  </server>
)
```

Test the endpoint: `curl http://localhost/hello?name=John` — returns `{"message":"Hello John!"}`

---

## Components
###### [🏠︎](./README.md) / [Quick Start](#quick-start) / Components [↑](#component-example)

A Component is a function that returns content which gets rendered in place of the component itself.
Think of it as a way to inject custom logic between elements.
Components come from [@innet/jsx](https://www.npmjs.com/package/@innet/jsx).

*src/SetToken.tsx*
```typescript jsx
export interface SetTokenProps {
  value: string
}

export const SetToken = ({ value }: SetTokenProps) => (
  <cookie
    httpOnly
    secure
    key='token'
    value={value}
  />
)
```

and then you can use it inside `app.tsx`.

*src/app.tsx*
```typescript jsx
import { SetToken } from './SetToken'

export default (
  <server>
    <return>
      <SetToken
        value='...'
      />
      <success />
    </return>
  </server>
)
```
Async components allow you to perform asynchronous operations (database queries, external API calls, file operations) before returning elements.
Simply declare the component as an `async function` and you can use `await` inside it.

*src/SetToken.tsx*
```typescript jsx
export interface SetTokenProps {
  value: string
}

export async function SetToken ({ value }: SetTokenProps) {
  await saveToken(value)

  return (
    <cookie
      httpOnly
      secure
      key='token'
      value={value}
    />
  )
}
```

You can use [hooks](./HOOKS.md) inside components.

---

#### [Elements →](./ELEMENTS.md)


