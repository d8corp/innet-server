
<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/server

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/server.svg)](https://www.npmjs.com/package/@innet/server)
[![downloads](https://img.shields.io/npm/dm/@innet/server.svg)](https://www.npmtrends.com/@innet/server)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@innet/server)
[![license](https://img.shields.io/npm/l/@innet/server)](https://github.com/d8corp/innet-server/blob/main/LICENSE)

## Abstract
This package helps to create server-side application based on [innet](https://www.npmjs.com/package/innet).

Here you find **JSX components on back-end side** 🎉, Open API generation, Swagger UI in the box, cms, proxy, html rendering and more.

[![stars](https://img.shields.io/github/stars/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/watchers)

## Install
The simplest way is using `innetjs`

```shell
npx innetjs init my-app -t api
```
*change my-app to work folder name*

Go into `my-app` and check `README.md`

## Handler

Use `server` handler to start an application.

*src/index.ts*
```typescript
import innet from 'innet'
import server from '@innet/server'

import app from './app'

innet(app, server)
```

## Usage

Here is a **Hello World** example:

*src/app.tsx*
```typescript jsx
import { defaultOnStart } from '@innet/server'

export default (
  <server onStart={defaultOnStart}>
    <api title='Hello World!' />
  </server>
)
```

*Use `npm start` to run this server.*

Open URL from the console message.
You will see a base Open API JSON structure.

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Hello World!",
    "version": "0.0.0"
  },
  "components": {},
  "paths": {},
  "servers": []
}
```

## Swagger

Use `<swagger>` element to add Swagger UI documentation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='Hello World!'>
      <swagger />
    </api>
  </server>
)
```

Open that URL you used before (http://localhost:80), but on the next path: `/swagger-ui` (http://localhost:80/swagger-ui).
You will see Swagger UI documentation.

You can change the path by `path` property of `<swagger>` element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='Hello World!'>
      <swagger path='/swagger' />
    </api>
  </server>
)
```

## Server
To start http(s) server, use `<server>` element:

*src/app.tsx*
```typescript jsx
export default (
  <server />
)
```

### port

The element has `port` property to set up the server port:

*src/app.tsx*
```typescript jsx
export default (
  <server port={3000} />
)
```

- By default, it uses port `80` for `http` and port `442` for `https`.
- You can use `PORT` environment variable to set it up on CI level.
- [innetjs](https://www.npmjs.com/package/innetjs) allows you to use `PORT` in `.env` file.

### ssl

To start `https` server, use `ssl` property:

*src/app.tsx*
```typescript jsx
export default (
  <server
    ssl={{
      cert: 'url_to_file.crt',
      key: 'url_to_file.key',
    }}
  />
)
```

- You can use `SSL_KEY` and `SSL_CRT` environment variables to set it up on CI level.
- [innetjs](https://www.npmjs.com/package/innetjs) allows you to use `SSL_KEY` and `SSL_CRT` in `.env` file.
- You can add `localhost.key` and `localhost.crt` files in your project folder.

### onStart

`<server>` element has `onStart` prop. Use it to handle server start event.
You can put `defaultOnStart` to the prop.
This will log URL into console after start the server.
The URL opens the server app.

*src/app.tsx*
```typescript jsx
import { defaultOnStart } from '@innet/server'

export default (
  <server
    onStart={defaultOnStart}
  />
)
```

### onRequest

Use `onRequest` to handle any request of the server.

*src/app.tsx*
```typescript jsx
import { defaultOnStart } from '@innet/server'

export default (
  <server
    onRequest={(req, res) => console.log({
      req,
      res,
    })}
  />
)
```

### onError

Use `onError` to handle any request error on the server.

*src/app.tsx*
```typescript jsx
import { defaultOnStart } from '@innet/server'

export default (
  <server
      onError={error => console.error(error)}
  />
)
```

## Api

`<api>` element MUST be placed in `<server>` element.
It has a required prop of `title`. This is just a title of the API.

### description

You can add a `description` of the API.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      title='@innet/server API'
      description='**MARKDOWN** is available'
    />
  </server>
)
```

### summary

Add a short summary of the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      title='@innet/server API'
      summary='Hello World!'
    />
  </server>
)
```

### version

The version of the OpenAPI document (which is distinct from the
[OpenAPI Specification version](https://swagger.io/specification/#oas-version)
or the API implementation version).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      title='@innet/server API'
      version='1.0.1'
    />
  </server>
)
```

*default: 0.0.0*

### prefix

URL path prefix scopes the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      title='@innet/server API'
      prefix='/api'
    />
  </server>
)
```

## License

Use `<license>` element to define the API license.

### name

REQUIRED prop. The license name used for the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <license
        name='Apache 2.0'
      />
    </api>
  </server>
)
```

### identifier

An [SPDX](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) license expression for the API.
The `identifier` field is mutually exclusive of the `url` prop.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <license
        name='Apache 2.0'
        identifier='Apache-2.0'
      />
    </api>
  </server>
)
```

### url

A URL to the license used for the API.
This MUST be in the form of a URL.
The `url` field is mutually exclusive of the `identifier` field.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <license
        name='Apache 2.0'
        url='https://www.apache.org/licenses/LICENSE-2.0.html'
      />
    </api>
  </server>
)
```

## Contact

Contact information for the exposed API.

### name

The identifying name of the contact person/organization.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <contact name='Mike' />
    </api>
  </server>
)
```

### email

The email address of the contact person/organization.
This MUST be in the form of an email address.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <contact
        email='d8@cantinc.com'
      />
    </api>
  </server>
)
```

### url

The URL pointing to the contact information.
This MUST be in the form of a URL.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <contact
        url='https://...'
      />
    </api>
  </server>
)
```

## Host

This element adds a link to related documentation API.
You can provide many stands like dev, stage or prod.

### url

REQUIRED prop of URL to the target host.

This URL supports Server Variables and MAY be relative,
to indicate that the host location is relative to the location where the OpenAPI document is being served.
Variable substitutions will be made when a variable is named in {brackets}.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <host
        url='https://your.address/api'
      />
    </api>
  </server>
)
```

### description

An optional string describing the host designated by the URL.
[CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <host
        url='https://your.address/api'
        description='Production server'
      />
    </api>
  </server>
)
```

## Variable

This element MUST be placed in `<host>` element and defines a variable from the `<host>`.

### key, default

Those are REQUIRED props.
`key` is a server url parameter.

The `default` value to use for substitution,
which SHALL be sent if an alternate value is not supplied.
If the enum is defined, the value MUST exist in the enum's values.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
          <variable
            key='env'
            default='stage'
          />
      </host>
    </api>
  </server>
)
```

### enum

An enumeration of string values to be used if the substitution options are from a limited set.
The array MUST NOT be empty.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
          <variable
            key='env'
            default='stage'
            enum={[
              'stage',
              'dev',
              'qa',
            ]}
          />
      </host>
    </api>
  </server>
)
```

### description

An optional description for the server variable.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
          <variable
            key='env'
            default='stage'
            enum={[
              'stage',
              'dev',
              'qa',
            ]}
            description='Server environment'
          />
      </host>
    </api>
  </server>
)
```

## Fallback

By default, `<api>` server returns 404 with empty body.
`<fallback>` element defines default server response.
This element MUST be placed in `<api>`.
You MUST use one `<fallback>` per `<api>`.
Can contains `<request>` elements.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api title='My API'>
      <fallback>
        <error>
          {{
            error: 'unknownEndpoint',
            message: 'api not found'
          }}
        </error>
      </fallback>
    </api>
  </server>
)
```

If you open the application on any URL except for `/`, you can see the next response.

```json
{
  "error": "unknownEndpoint",
  "message": "api not found"
}
```

## Endpoint

## Param

## Body

## Response

## Request

## Tag

## Error

## Success

## Proxy

## Redirect















## HTML
You can use `html` element to return html content.

```typescript jsx
export default (
  <server>
    <action>
      <html>
        <head>
          <title>Innet App</title>
        </head>
        <body>
          Hello World!
        </body>
      </html>
    </action>
  </server>
)
```

You can use variables to split it anyhow.

```typescript jsx
const content = (
  <html>
    <head>
      <title>Innet App</title>
    </head>
    <body>
      Hello World!
    </body>
  </html>
)

export default (
  <server>
    <action>
      {content}
    </action>
  </server>
)
```

## Header
You can add an HTTP header into response with `header` element.

```typescript jsx
const content = (
  <html.../>
) // check prev example

export default (
  <server>
    <action>
      <header name='content-type' value='text/html'>
        {content}
      </header>
    </action>
  </server>
)
```

Also, you can put header around the content, it works the same.

```typescript jsx
const content = (
  <html.../>
) // check prev example

export default (
  <server>
    <action>
      <header name='content-type' value='text/html' />
      {content}
    </action>
  </server>
)
```

## File
You can return a file as a response.

```typescript jsx
export default (
  <server>
    <action>
      <header name='cache-control' value='max-age=300'>
        <file path='index.html' />
      </header>
    </action>
  </server>
)
```

In this case `cache-control` will be equal to `max-age=300` even if the file does not exist.

You can put content into the file to apply it only if the file does exist.

```typescript jsx
export default (
  <server>
    <action>
      <file path='index.html'>
        <header name='cache-control' value='max-age=300' />
      </file>
    </action>
  </server>
)
```

Put `index.html` in the root of the project (`my-app` folder).

## cms

CMS helps to return files from a folder by path.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms' />
        <file path='404.html' />
      </switch>
    </action>
  </server>
)
```

It will check if the file exist in cms folder then returns the file else returns `404.html`.

You can use prefix with router to handle specific path.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <router path='/cms' ish>
          <cms dir='cms' prefix='/cms' />
        </router>
        <file path='404.html' />
      </switch>
    </action>
  </server>
)
```

You can input something into `cms`, if requested file is exist then the content should be used.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms'>
          <header name='cache-control' value='max-age=300' />
        </cms>
        <file path='404.html' />
      </switch>
    </action>
  </server>
)
```

## proxy
You can proxy request.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms' />
        <proxy to='https://site.com' />
      </switch>
    </action>
  </server>
)
```

In this case, if you have a file in cms folder then the file will return
else makes request to the `site.com`.

## redirect
You can redirect users to another resource.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms' />
        <redirect to='https://site.com' />
      </switch>
    </action>
  </server>
)
```

### status
By default, status is `301`, you can change it with `status` prop.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms' />
        <redirect to='https://site.com' status={302} />
      </switch>
    </action>
  </server>
)
```

Also, you can use string key of status.

```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <cms dir='cms' />
        <redirect to='https://site.com' status='found'/>
      </switch>
    </action>
  </server>
)
```

## Components

Any component is just a function which returns content that should be run.

`server.tsx`
```typescript jsx
export const Server = ({ cmsPrefix }) => (
  <server>
    <action>
      <switch>
        <router path={cmsPrefix} ish>
          <cms dir='cms' prefix={cmsPrefix} />
        </router>
        <file path='404.html' />
      </switch>
    </action>
  </server>
)
```

and then you can use it inside `app.tsx`.

```typescript jsx
import { Server } from './server'

export default <Server cmsPrefix='/cms' />
```

You can use it with any other functionality, for example with `html`.

```typescript jsx
import { useChildren } from '@innet/jsx'

function Html ({ title }) {
  const children = useChildren()

  return (
    <header name='content-type' value='text/html'>
      <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
      </html>
    </header>
  )
}

export default (
  <server>
    <action>
      <Html title='main'>
        Hello World!
      </Html>
    </action>
  </server>  
)
```

The first argument is props, the second is children and the last one is a handler.

You can use components inside another component.

## success
If you work on REST API, you can use `success` or `error` as an answer

```typescript jsx
export default (
  <server>
    <action>
      <success />
    </action>
  </server>  
)
```

You will get `204` status (`noContent`), without content.

You can provide some data to the user by children.
```typescript jsx
const data = {
  posts: []
}

export default (
  <server>
    <action>
      <success>
        {data}
      </success>
    </action>
  </server>
)
```
You will get `200` status (`ok`), with body equals data.

### status
You can set status by status prop.

```typescript jsx
const data = {
  id: '123'
}

export default (
  <server>
    <action>
      <success status='created'>
        {data}
      </success>
    </action>
  </server>  
)
```

You will get `201` status (`created`), with data as a content.

You can use a number with `status` prop.

```typescript jsx
const data = {
  id: '123'
}

export default (
  <server>
    <action>
      <success status={201}>
        {data}
      </success>
    </action>
  </server>  
)
```

## error
You can return an error to the user.

```typescript jsx
export default (
  <server>
    <action>
      <error />
    </action>
  </server>  
)
```

You will get `520` status (`unknownError`).

You can provide some data to the user by children.

```typescript jsx
const data = {
  message: 'Some error!'
}

export default (
  <server>
    <action>
      <error>
        {data}
      </error>
    </action>
  </server>  
)
```

### status
You can change response status by `status` prop.

```typescript jsx
const data = {
  message: 'User not found!'
}

export default (
  <server>
    <action>
      <error status='notFound'>
        {data}
      </error>
    </action>
  </server>
)
```
Also, you can use a number with the status prop.

```typescript jsx
const data = {
  message: 'User not found!'
}

export default (
  <server>
    <action>
      <error status={404}>
        {data}
      </error>
    </action>
  </server>
)
```

## cookie
You can set cookie by `cookie` element.

```typescript jsx
const Login = ({ token }) => (
  <cookie key='token' value={token}>
    <success />
  </cookie>
)

export default (
  <server>
    <action>
      <Login token='test' />
    </action>
  </server>  
)
```

To remove cookie just provide key without value.

```typescript jsx
export default (
  <server>
    <action>
      <cookie key='token'>
        <success />
      </cookie>
    </action>
  </server>  
)
```

## useAction
Action is an object which contains `request` and `response`.
Also, it contains a couple of fields and methods.

Action available in components.

```typescript jsx
import { useAction } from '@innet/server'

function Test () {
  const { req, res } = useAction()

  console.log(req, res)
}
```

### cookies
You can get cookies as an object from an action.

```typescript jsx
import { useAction } from '@innet/server'

function Cookies () {
  const { cookies } = useAction()

  return <success>{cookies}</success>
}
```

### setCookie
You can set cookie with action.

```typescript jsx
import { useAction } from '@innet/server'

function Login () {
  const action = useAction()

  action.setCookie('user', 'token')
}
```

### path
You can get current path with action.

```typescript jsx
import { useAction } from '@innet/server'

function Path () {
  const { path } = useAction()

  return path
}
```

### search
You can get current search as an object.

```typescript jsx
import { useAction } from '@innet/server'

function Search () {
  const { search } = useAction()

  return <success>{search}</success>
}
```

### body
You can parse body, and get values.

```typescript jsx
import { useAction } from '@innet/server'

async function Body () {
  const action = useAction()
  
  await action.parseBody()

  return <success>{action.body}</success>
}
```

### files
You can get files from a user.

```typescript jsx
import { useAction } from '@innet/server'

async function Body () {
  const action = useAction()
  
  await action.parseBody()

  return <success>{action.files}</success>
}
```

## useRouter

You can get router data in a component

```typescript jsx
import { useRouter } from '@innet/server'

function Router () {
  const { prefix, params } = useRouter()

  return <success>{{ prefix, params }}</success>
}
```

Use named capturing groups of regex in a route path prop to add the `params`.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/user/(?<id>[\w-]+)'>
        <Router />
      </router>
    </action>
  </server>
)
```

In this case, you will get `id` equals `test` in the params on `/user/test` path.

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-server/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-server)](https://github.com/d8corp/innet-server/issues)
