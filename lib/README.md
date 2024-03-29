
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
This package helps to create server-side application.

Here you find **JSX components on back-end side** 🎉, cms, routing, proxy, html rendering and more.

Based on [innet](https://www.npmjs.com/package/innet).

[![stars](https://img.shields.io/github/stars/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/watchers)

## Install
The simplest way is using `innetjs`

```shell
npx innetjs init my-app -t be
```
*change my-app to work folder name*

Go into `my-app` and check `README.md`

## Handler

Use `server` handler to start an application.
```typescript
import innet from 'innet'
import server from '@innet/server'

import app from './app'

innet(app, server)
```

## Server
To start http(s) server, use `server` element.

Try it out in `app.tsx`
```typescript jsx
export default (
  <server>
    <action>
      Hello World!
    </action>
  </server>
)
```

Any content inside the server will be turned back to user.
In this case the user will get `Hello World` on any request.

Use `npm start` to run this server.

### Port
To change the port of the web server you can use `port` prop.

```typescript jsx
export default (
  <server port={80}>
    <action>
      Hello World!
    </action>
  </server>
)
```

or you can use `PORT` environment variable.

### SSL
To have https connection you should provide SSL certificate.

```typescript jsx
const ssl = {
  key: 'local.key',
  cert: 'local.crt'
}

export default (
  <server ssl={ssl}>
    <action>
      Hello World!
    </action>
  </server>
)
```

or you can use `SSL_CRT` and `SSL_KEY` environment variables.

### onStart
You can show some message or do something right after the server starts.
```typescript jsx
export default (
  <server onStart={console.log}>
    <action>
      Hello World!
    </action>
  </server>
)
```

### onError
You can log errors or do something else, when the server get an error.

```typescript jsx
export default (
  <server onError={console.error}>
    <action>
      Hello World!
    </action>
  </server>
)
```

### onRequest
You can log any request with `onRequest` prop.

```typescript jsx
export default (
  <server onRequest={console.log}>
    <action>
      Hello World!
    </action>
  </server>
)
```

### onDestroy
You can react on destroy the server with `onDestroy` prop.

```typescript jsx
export default (
  <server
    onDestroy={() => console.log('destroy')}>
    <action>
      Hello World!
    </action>
  </server>
)
```

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

## Router
The router helps to handle requests by route.
```typescript jsx
export default (
  <server>
    <action>
      <router>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

The router does nothing and returns self content.
It starts work only with the next props.

### method
This property says that the content of the route should be run if the request method equals to the prop.

```typescript jsx
export default (
  <server>
    <action>
      <router method='GET'>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

### path
You can set `path` to match with it.

```typescript jsx
export default (
  <server>
    <action>
      <router method='GET' path='/'>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

You will get the `index.html` only on the root path with `GET` method.

This prop has regex like syntax, so you can set the path as you wish.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/user/[0-9]+'>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

To provide named params from url, use named capturing groups of regex.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/user/(?<id>[\w-]+)'>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

### ish
You can react on any path which starts with provided one.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/test' ish>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

`/`, `/something`, `/test1` do not match.  
`/test`, `/test/something` matches.

### prefix

You can use a router inside another one and `prefix` helps reduce path prop.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/test' prefix='/test' ish>
        <router path='/'>
          <file path='index.html' />
        </router>
        <router path='/404'>
          <file path='404.html' />
        </router>
      </router>
    </action>
  </server>
)
```

Here you can get `index.html` on `/test` and `404.html` on `/test/404`.

### onMatch

You can log the requests of any router.

```typescript jsx
export default (
  <server>
    <action>
      <router path='/test' onMatch={console.log}>
        <file path='index.html' />
      </router>
    </action>
  </server>
)
```

## switch

By default,
routers in the same router runs one by one
independent to result of the previous route.

To avoid this you can use switch element.
```typescript jsx
export default (
  <server>
    <action>
      <switch>
        <router path='/'>
          <file path='index.html' />
        </router>
        <file path='404.html' />
      </switch>
    </action>
  </server>
)
```

You will get `index.html` only on the root path,
any other path will return `404.html`.

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
