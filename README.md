
<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/server

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/server.svg)](https://github.com/d8corp/innet-server/blob/main/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/@innet/server.svg)](https://www.npmjs.com/package/@innet/server)
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
    Hello World!
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
    Hello World!
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
    Hello World!
  </server>
)
```

or you can use `SSL_CRT` and `SSL_KEY` environment variables.

### onStart
You can show some message or do something right after the server starts.
```typescript jsx
export default (
  <server onStart={console.log}>
    Hello World!
  </server>
)
```

### onError
You can log errors or do something else, when the server get an error.

```typescript jsx
export default (
  <server onError={console.error}>
    Hello World!
  </server>
)
```

### onRequest
You can log any request with `onRequest` prop.

```typescript jsx
export default (
  <server onRequest={console.log}>
    Hello World!
  </server>
)
```

## HTML
You can use `html` element to return html content.

```typescript jsx
export default (
  <server>
    <html>
      <head>
        <title>Innet App</title>
      </head>
      <body>
        Hello World!
      </body>
    </html>
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
    {content}
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
    <header name='content-type' value='text/html'>
      {content}
    </header>
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
    <header name='content-type' value='text/html' />
    {content}
  </server>
)
```

## File
You can return a file as a response.

```typescript jsx
export default (
  <server>
    <header name='content-type' value='text/html'>
      <file path='index.html' />
    </header>
  </server>
)
```

In this case `content-type` will be equal to `text/html` even if the file does not exist.

You can put content into the file to apply it only if the file does exist.

```typescript jsx
export default (
  <server>
    <file path='index.html'>
      <header name='content-type' value='text/html' />
    </file>
  </server>
)
```

Put `index.html` in the root of the project (`my-app` folder).

## Router
The router helps to handle requests by route.
```typescript jsx
export default (
  <server>
    <router>
      <file path='index.html' />
    </router>
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
    <router method='GET'>
      <file path='index.html' />
    </router>
  </server>
)
```

### path
You can set `path` to match with it.

```typescript jsx
export default (
  <server>
    <router method='GET' path='/'>
      <file path='index.html' />
    </router>
  </server>
)
```

You will get the `index.html` only on the root path with `GET` method.

This prop has regex like syntax, so you can set the path as you wish.

```typescript jsx
export default (
  <server>
    <router path='/user/[0-9]+'>
      <file path='index.html' />
    </router>
  </server>
)
```

To provide named params from url, use named capturing groups of regex.

```typescript jsx
export default (
  <server>
    <router path='/user/(?<id>[\w-]+)'>
      <file path='index.html' />
    </router>
  </server>
)
```

### ish
You can react on any path which starts with provided one.

```typescript jsx
export default (
  <server>
    <router path='/test' ish>
      <file path='index.html' />
    </router>
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
    <router path='/test' prefix='/test' ish>
      <router path='/'>
        <file path='index.html' />
      </router>
      <router path='/404'>
        <file path='404.html' />
      </router>
    </router>
  </server>
)
```

Here you can get `index.html` on `/test` and `404.html` on `/test/404`.

### onMatch

You can log the requests of any router.

```typescript jsx
export default (
  <server>
    <router path='/test' onMatch={console.log}>
      <file path='index.html' />
    </router>
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
    <switch>
      <router path='/'>
        <file path='index.html' />
      </router>
      <file path='404.html' />
    </switch>
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
    <switch>
      <cms dir='cms' />
      <file path='404.html' />
    </switch>
  </server>
)
```

It will check if the file exist in cms folder then returns the file else returns `404.html`.

You can add prefix with router to handle specific path.

```typescript jsx
export default (
  <server>
    <switch>
      <router path='/cms' ish>
        <cms dir='cms' prefix='/cms' />
      </router>
      <file path='404.html' />
    </switch>
  </server>
)
```

## proxy
You can proxy request.

```typescript jsx
export default (
  <server>
    <switch>
      <cms dir='cms' />
      <proxy to='https://site.com' />
    </switch>
  </server>
)
```

In this case, if you have a file in cms folder then the file will return
else makes request to the `site.com`.

## Templates

Any template is just a function which returns content that should be run.

`server.tsx`
```typescript jsx
export const Server = ({ cmsPrefix }) => (
  <server>
    <switch>
      <router path={cmsPrefix} ish>
        <cms dir='cms' prefix={cmsPrefix} />
      </router>
      <file path='404.html' />
    </switch>
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
const Html = ({ title }, children) => (
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

export default (
  <server>
    <Html title='main'>
      Hello World!
    </Html>
  </server>  
)
```

The first argument is props, the second is children and the last one is a handler.

You can use templates inside other templates and components.

## Components
Component has the same functionality as template but this is a class.

```typescript jsx
class Html {
  init ({ title }, children) {
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
}

export default (
  <server>
    <Html title='main'>
      Hello World!
    </Html>
  </server>  
)
```

constructor of the class gets the same arguments as init method and the same as a template.

## success
If you work on REST API, you can use `success` or `error` as an answer

```typescript jsx
export default (
  <server>
    <success />
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
    <success>
      {data}
    </success>
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
    <success status='created'>
      {data}
    </success>
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
    <success status={201}>
      {data}
    </success>
  </server>  
)
```

## error
You can return an error to the user.

```typescript jsx
export default (
  <server>
    <error />
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
    <error>
      {data}
    </error>
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
    <error status='notFound'>
      {data}
    </error>
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
    <error status={404}>
      {data}
    </error>
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
    <Login token='test' />
  </server>  
)
```

To remove cookie just provide key without value.

```typescript jsx
export default (
  <server>
    <cookie key='token'>
      <success />
    </cookie>
  </server>  
)
```

## ACTION
Action is an object which contains `request` and `response`.
Also, it contains a couple of fields and methods.

Action available in templates and components.

```typescript jsx
import { ACTION } from '@innet/server'

const Test = (props, child, handler) => {
  const action = handler[ACTION]
  const { req, res } = action
  
  console.log(req, res)
}
```

### cookies
You can get cookies as an object from an action.

```typescript jsx
import { ACTION } from '@innet/server'

const Cookies = (props, child, handler) => {
  const { cookies } = handler[ACTION]

  return <success>{cookies}</success>
}
```

### setCookie
You can set cookie with action.

```typescript jsx
import { ACTION } from '@innet/server'

const Login = (props, child, handler) => {
  const action = handler[ACTION]

  action.setCookie('user', 'token')
}
```

### path
You can get current path with action.

```typescript jsx
import { ACTION } from '@innet/server'

const Path = (props, child, handler) => {
  const { path } = handler[ACTION]

  return path
}
```

### search
You can get current search as an object.

```typescript jsx
import { ACTION } from '@innet/server'

const Search = (props, child, handler) => {
  const { search } = handler[ACTION]

  return <success>{search}</success>
}
```

### body
You can parse body, and get values.

```typescript jsx
import { ACTION } from '@innet/server'

const Body = async (props, child, handler) => {
  const action = handler[ACTION]
  
  await action.parseBody()

  return <success>{action.body}</success>
}
```

### files
You can get files from a user.

```typescript jsx
import { ACTION } from '@innet/server'

const Body = async (props, child, handler) => {
  const action = handler[ACTION]
  
  await action.parseBody()

  return <success>{action.files}</success>
}
```

## ROUTER

You can get router data in a template or component

```typescript jsx
import { ROUTER } from '@innet/server'

const Router = async (props, child, handler) => {
  const { prefix, params } = handler[ROUTER]

  return <success>{{ prefix, params }}</success>
}
```

Use named capturing groups of regex in a route path prop to add the `params`.

```typescript jsx
export default (
  <server>
    <router path='/user/(?<id>[\w-]+)'>
      <Router />
    </router>
  </server>
)
```

In this case, you will get `id` equals `test` in the params on `/user/test` path.

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-server/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-server)](https://github.com/d8corp/innet-server/issues)
