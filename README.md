
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

Here you find **JSX components on back-end side** 🎉, Open API generation, Swagger UI in the box, validation, formatting, cms, proxy and more.

You can create Open API documentation without implementation of this.
It helps to define API contracts before start implementation on backend and frontend sides.

[![stars](https://img.shields.io/github/stars/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/watchers)

## Index

[Install](#install)  
[Handler](#handler)  
[Usage](#usage)

JSX Elements  
[Main](#main)  
[Utils](#utils)  
[API Info](#api-info)  
[Endpoints](#endpoints)  
[Primitive Data](#primitive-data)  
[List of Data](#list-of-data)  
[Run-Time](#run-time)

Customize  
[Components](#components)  
[Hooks](#hooks)

## Install

[← back](#index)

The simplest way to start working with `@innet/server`, it is `innetjs` usage.

```shell
npx innetjs init my-app -t api
```
*change my-app to work folder name*

Go into `my-app` and check `README.md`

## Handler

[← back](#index)

Use `server` handler to start an application.

*src/index.ts*
```typescript
import innet from 'innet'
import server from '@innet/server'

import app from './app'

innet(app, server)
```

## Usage

[← back](#index)

Here is a **Hello World** example:

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api />
  </server>
)
```

*Use `npm start` to run this server.*

Open http://localhost:80
You will see a base Open API JSON structure.

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "",
    "version": "0.0.0"
  },
  "paths": {}
}
```

## Main

[← back](#index)

[\<server>](#server)   
[\<api>](#api)

---

### \<server>

[← back](#main)

`<server>` element helps to start http(s) server.

*src/app.tsx*
```typescript jsx
export default (
  <server />
)
```

#### port

Use `port` property to set up the server port:

*src/app.tsx*
```typescript jsx
export default (
  <server port={3000} />
)
```

- By default, it uses port `80` for `http` and port `442` for `https`.
- You can use `PORT` environment variable to set it up on CI level.
- [innetjs](https://www.npmjs.com/package/innetjs) allows you to use `PORT` in `.env` file of local environment.

#### ssl

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

#### onStart

Use `onStart` prop to handle server start event.
You can put `httpOnStart` to the prop.
This will log URL into console after start the server.
The URL opens the server app.

*src/app.tsx*
```typescript jsx
import { httpOnStart } from '@innet/server'

export default (
  <server
    onStart={httpOnStart}
  />
)
```

#### onRequest

Use `onRequest` to handle any request of the server.

*src/app.tsx*
```typescript jsx
export default (
  <server
    onRequest={(req, res) => console.log({
      req,
      res,
    })}
  />
)
```

#### onError

Use `onError` to handle any request error on the server.

*src/app.tsx*
```typescript jsx
export default (
  <server
    onError={error => console.error(error)}
  />
)
```

### \<api>

[← back](#main)

`<api>` element MUST be placed in `<server>` element.  
This element defines a REST API on the server.

#### title

This is a title of the API.
Open API specifies the parameter is REQUIRED.
But it's NOT REQUIRED in `<api>` element, it equals [empty string](#usage) by default.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      title='@innet/server API'
    />
  </server>
)
```

#### description

You can add a `description` of the API.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      description='**MARKDOWN** is available'
    />
  </server>
)
```

[innetjs](https://www.npmjs.com/package/innetjs) can help to use a separate file of description:

*src/app.tsx*
```typescript jsx
import desc from './desc.md'

export default (
  <server>
    <api description={desc} />
  </server>
)
```

#### summary

Add a short summary of the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      summary='Hello World!'
    />
  </server>
)
```

#### version

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

#### prefix

URL path prefix scopes the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api
      prefix='/api'
    />
  </server>
)
```

## Utils

This section contains elements of utils.

[← back](#index)

[\<swagger>](#swagger)  
[\<dev>](#dev)  
[\<dts>](#dts)

---

### \<swagger>

[← back](#utils)

Use `<swagger>` element to add Swagger UI documentation.
`<swagger>` element MUST be placed in `<api>` element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <swagger />
    </api>
  </server>
)
```

Open http://localhost:80/swagger-ui
You will see Swagger UI documentation.

You can change the Swagger UI URL path by `path` property of `<swagger>` element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <swagger path='/swagger' />
    </api>
  </server>
)
```

### \<dev>

[← back](#utils)

Everything inside <dev> will work when `NODE_ENV` equals `development`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <dev>
        <swagger />
      </dev>
    </api>
  </server>
)
```

### \<dts>

[← back](#utils)

Use `<dts>` element to add types generation.
`<dts>` element MUST be placed in `<api>` element.

`<dts>` has a required prop of `path`. This is a path of api TypeScript types file, `<dts>` generates it.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <dev>
        <dts path='src/api.d.ts' />
      </dev>
    </api>
  </server>
)
```

> You MUST add some [endpoint](#endpoint) with some schema otherwise you get the `Error: There is no schema in the input contents`.

Here is an example of generated types usage.

*src/GetPartner.tsx*
```typescript jsx
import { useParams } from '@innet/server'

export function GetPartner () {
  const { id } = useParams<Paths.Partners$Id.Get.PathParameters>()
  return <success>{{ id }}</success>
}
```

You do not need to import types, they generate as namespaces.

## API Info

The API information elements are here.

[← back](#index)

[\<license>](#license)  
[\<contact>](#contact)  
[\<host>](#host)  
[\<variable>](#variable)

---

### \<license>

[← back](#api-info)

`<license>` element MUST be placed in `<api>` element.
Use `<license>` element to define the API license.

#### name

REQUIRED prop. The license name used for the API.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <license
        name='Apache 2.0'
      />
    </api>
  </server>
)
```

#### identifier

An [SPDX](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) license expression for the API.
The `identifier` field is mutually exclusive of the `url` prop.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <license
        name='Apache 2.0'
        identifier='Apache-2.0'
      />
    </api>
  </server>
)
```

#### url

A URL to the license used for the API.
This MUST be in the form of a URL.
The `url` field is mutually exclusive of the `identifier` field.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <license
        name='Apache 2.0'
        url='https://www.apache.org/licenses/LICENSE-2.0.html'
      />
    </api>
  </server>
)
```

### \<contact>

[← back](#api-info)

`<contact>` element MUST be placed in `<api>` element.
The contact information for the exposed API.

#### name

The identifying name of the contact person/organization.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <contact name='Mike' />
    </api>
  </server>
)
```

#### email

The email address of the contact person/organization.
This MUST be in the form of an email address.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <contact
        email='d8@cantinc.com'
      />
    </api>
  </server>
)
```

#### url

The URL pointing to the contact information.
This MUST be in the form of a URL.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <contact
        url='https://...'
      />
    </api>
  </server>
)
```

### \<host>

[← back](#api-info)

`<host>` element MUST be placed in `<api>` element.

This element adds a link to related documentation API.
You can provide many stands like dev, stage or prod.

#### url

REQUIRED prop of URL to the target host.

This URL supports Server Variables and MAY be relative,
to indicate that the host location is relative to the location where the OpenAPI document is being served.
Variable substitutions will be made when a variable is named in {brackets}.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://your.address/api'
      />
    </api>
  </server>
)
```

#### description

An optional string describing the host designated by the URL.
[CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://your.address/api'
        description='Production server'
      />
    </api>
  </server>
)
```

### \<variable>

[← back](#api-info)

This element MUST be placed in `<host>` element and defines a variable from the `<host>`.

#### key

REQUIRED props. `key` is a server url parameter.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
        <variable key='env' />
      </host>
    </api>
  </server>
)
```

#### value

The `value` prop uses for substitution by default.
If the `values` is defined, the `value` MUST exist in the `values`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
        <variable
          key='env'
          value='stage'
        />
      </host>
    </api>
  </server>
)
```

#### values

An enumeration of string values to be used if the substitution options are from a limited set.
The array MUST NOT be empty.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
        <variable
          key='env'
          values={[
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

#### description

An optional description for the server variable.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <host
        url='https://{env}.your.address/api'
        description='Test servers'>
        <variable
          key='env'
          values={[
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

## Endpoints

[← back](#index)

[\<endpoint>](#endpoint)  
[\<tag>](#tag)  
[\<param>](#param)  
[\<body>](#body)  
[\<response>](#response)

---

### \<endpoint>

[← back](#endpoints)

`<endpoint>` defines an endpoint of the API and MUST be placed in `<api>`.

`<api>` uses a specific algorithm to find expected endpoint.

It does no matter how many endpoints you have.
It depends on the deep of path pieces.
If you have the deep equals 1 (`/users`, `/user`, `/login`, `/logout`) the endpoint will be found immediately O(1).

#### method

A method of the endpoint.

MUST be one of `'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'trace'`

#### path

A relative path to an individual endpoint.

The property MUST begin with a forward slash (/).

Path templating is allowed.

When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts.
Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        method='get'
        path='/users'
      />
    </api>
  </server>
)
```

#### summary

An optional, string summary, intended to apply to all operations in this path.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        method='get'
        path='/users'
        summary='Returns users'
      />
    </api>
  </server>
)
```

#### description

An optional, string description, intended to apply to all operations in this path.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        method='get'
        path='/users'
        description='Users list query'
      />
    </api>
  </server>
)
```

#### deprecated

Declares this operation to be deprecated.
Consumers SHOULD refrain from usage of the declared operation.
Default value is `false`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        method='get'
        path='/users'
        deprecated
      />
    </api>
  </server>
)
```

#### private

Declares this operation to make an endpoint private.
That means the endpoint should not be described and will not be shown in the Open API documentation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        method='get'
        path='/users'
        private
      />
    </api>
  </server>
)
```

### \<tag>

[← back](#endpoints)

You can wrap endpoints by `<tag>` element to group the endpoints.
You can see the changes in Swagger UI.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <tag name='user'>
        <endpoint
          method='get'
          path='/users'
        />
        <endpoint
          method='post'
          path='/users'
        />
      </tag>
    </api>
  </server>
)
```

### \<param>

[← back](#endpoints)

Describes a single operation parameter.

A unique parameter is defined by a combination of a `name` and location.

##### Parameter Locations

There are four possible parameter locations specified by the `in` prop:

- **path** - Used together with [Path Templating](https://swagger.io/specification/#path-templating), where the parameter value is actually part of the operation's URL.
  This does not include the host or base path of the API. For example, in `/items/{itemId}`, the path parameter is `itemId`.
- **query** - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.
- **header** - Custom headers that are expected as part of the request. Note that RFC7230 states header names are case insensitive.
- **cookie** - Used to pass a specific cookie value to the API.

#### in

The location of the parameter.
Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.

#### name

The name of the parameter. Parameter names are *case sensitive*.

- If `in` is "path", the `name` field MUST correspond to a template expression occurring within the `path` field in the `endpoint`. See [Path Templating](https://swagger.io/specification/#path-templating) for further information.
- If `in` is "header" and the `name` field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
- For all other cases, the `name` corresponds to the parameter name used by the `in` property.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users/{userId}'>
        <param in='path' name='userId' />
      </endpoint>
    </api>
  </server>
)
```

#### description

A brief description of the parameter.
This could contain examples of use.
[CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users/{userId}'>
        <param
          in='path'
          name='userId'
          description='User identification number'
        />
      </endpoint>
    </api>
  </server>
)
```

#### required

Determines whether this parameter is mandatory.
If the parameter location is "path", this property is `true` and its value MUST be `true`.
Otherwise, the property MAY be included and its default value is `false`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='cookie'
          name='token'
          required
        />
      </endpoint>
    </api>
  </server>
)
```

#### deprecated

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
Default value is `false`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='status'
          deprecated
        />
      </endpoint>
    </api>
  </server>
)
```

### \<body>

[← back](#endpoints)

This element MUST be placed inside `<endpoint>`.
It defines request body for the endpoint.
`@innet/server` formats and validate the value automatically (real-time).

```typescript jsx
return (
  <server>
    <api>
      <endpoint method='post' path='/partners'>
        <body>
          <object>
            <field key='name'>
              <string example='CANTent.' />
            </field>
            <field key='gift'>
              <boolean />
            </field>
            <field optional key='addresses'>
              <array>
                <number description='address id' />
              </array>
            </field>
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

### \<response>

[← back](#endpoints)

This element MUST be placed inside `<endpoint>`.
It defines response body for the endpoint.

## Primitive Data

[← back](#index)

[\<null>](#null)  
[\<boolean>](#boolean)  
[\<string>](#string)  
[\<number>](#number)  
[\<integer>](#integer)  
[\<date>](#date)  
[\<uuid>](#uuid)  
[\<binary>](#binary)

### \<boolean>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `boolean` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='active'>
          <boolean />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `boolean`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='active'>
          <boolean default={false} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param
          in='query'
          name='active'>
          <boolean example={false} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `boolean`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param
          in='query'
          name='active'>
          <boolean
            description='Active products param'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

### \<string>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `string` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='search'>
          <string />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `string`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='status'>
          <string default='active' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*By default, `status` query param equals `active`*

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param
          in='query'
          name='search'>
          <string example='red socks' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `string`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param
          in='query'
          name='search'>
          <string
            description='A search string'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### values

The enumeration of available `values`.
If you provide the parameter value, which is not in the `values`, the server returns an error.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='status'>
          <string
            default='active'
            values={[
              'active',
              'inactive',
            ]}
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### min, max

Those two props validate the `string` value by minimum and maximum length.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='name'>
          <string min={1} max={128} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### pattern

A `string` of `RegExp` or `RegExp`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='friendlyName'>
          <string pattern='^[a-z_0-9]+$' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

If you make a request to the API endpoint,
with query parameter of `friendlyName` equals `no-friendly` (as example),
you get an error:

```json
{
  "error": "requestValidation",
  "data": {
    "error": "reg",
    "data": {
      "key": "friendlyName"
    },
    "in": "search"
  }
}
```

#### patternId

This property adds an id of the pattern expression in error response.
For example, You can use the id to load error message translations.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='friendlyName'>
          <string
            pattern='^[a-z_0-9]+$'
            patternID='fname'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

If you make a request to the API endpoint,
with query parameter of `friendlyName` equals `no-friendly` (as example),
you get an error:

```json
{
  "error": "requestValidation",
  "data": {
    "error": "reg",
    "data": {
      "key": "friendlyName",
      "regId": "fname"
    },
    "in": "search"
  }
}
```

### \<number>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `number` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

Correct numbers are from `-9007199254740991` to `9007199254740991`.
This is a value of `Number.MAX_SAFE_INTEGER`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <number />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*This example defines a `GET` endpoint on `/users` which has an optional query `number` parameter of `minAge`.*

#### default

A default value for the `number`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <number default={18} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*By default, `minAge` query param equals `18`*

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <number example={18} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `number`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <number
            example={18}
            description='Age value'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### values

The enumeration of available `values`.
If you provide the parameter value, which is not in the `values`, the server returns an error.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <number
            example={18}
            values={[
              12,
              16,
              18,
              21,
            ]}
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### min, max

Those two props validate the number value by minimum and maximum values.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <number min={1} max={5} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*In this example `/products?rating=5` is valid and `/products?rating=6` is not*

### \<integer>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `integer` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*This example defines a `GET` endpoint on `/users` which has an optional query `integer` parameter of `minAge`.*

#### format

You can set up the `integer` format.
Possible values are `int32` or `int64`.
By default, there are `int32` used.

The format of `int32` means a number from `-2147483647` to `2147483647`.
The format of `int64` converts the value to `BigInt` and placed between `-9223372036854775807` and `9223372036854775807`


*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer format='int64' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `integer`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer default={18} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*By default, `minAge` query param equals `18`*

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer example={18} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `integer`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer
            example={18}
            description='Age value'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### values

The enumeration of available `values`.
If you provide the parameter value, which is not in the `values`, the server returns an error.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='minAge'>
          <integer
            example={18}
            values={[
              12,
              16,
              18,
              21,
            ]}
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### min, max

Those two props validate the number value by minimum and maximum values.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <integer min={1} max={5} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

*In this example `/products?rating=5` is valid and `/products?rating=6` is not*

### \<date>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `date` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `date`.
Available values:
- `string` - the date in ISO format
- `number` - date timestamp
- `Date` - JavaScript `Date` format
- `'now'` - the string defines current date as default value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date default='1950-02-15' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### values

The enumeration of available `values`.
If you provide the parameter value, which is not in the `values`, the server returns an error.

Available values:
- `string` - the date in ISO format
- `number` - date timestamp
- `Date` - JavaScript `Date` format

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date
            values={[
              1,
              new Date(),
              '1950-02-15',
            ]}
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### example

An example value.

Available values:
- `string` - the date in ISO format
- `number` - date timestamp
- `Date` - JavaScript `Date` format
- `'now'` - the string defines server start date as example.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date example={0} />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `date`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date
            description='The user birthday'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### min, max

Those two pros limit the date period.

Available values:
- `string` - the date in ISO format
- `number` - date timestamp
- `Date` - JavaScript `Date` format
- `'now'` - the string defines current server date as default.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/users'>
        <param
          in='query'
          name='birthday'>
          <date
            min='01-01-1900'
            max='now'
            description='The user birthday'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

### \<uuid>

[← back](#schema)

Universally unique identifier.

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `string` value in `uuid` format for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <param
          in='cookie'
          name='userId'>
          <uuid />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `uuid`.

Available values:
- `string` in uuid format
- `new` generates a new uuid

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <param
          in='cookie'
          name='userId'>
          <uuid default='new' />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### values

The enumeration of available `values`.
If you provide the parameter value, which is not in the `values`, the server returns an error.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <param
          in='header'
          name='uuid'>
          <uuid
            values={[
              '123e4567-e89b-12d3-a456-426655440000',
              '123e4567-e89b-12d3-a456-426614174000',
            ]}
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <param
          in='query'
          name='active'>
          <uuid
            default='new'
            example='123e4567-e89b-12d3-a456-426655440000'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `boolean`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <param
          in='cookie'
          name='userId'>
          <uuid
            default='new'
            example='123e4567-e89b-12d3-a456-426655440000'
            description='User ID for a new user'
          />
        </param>
      </endpoint>
    </api>
  </server>
)
```

### \<binary>

[← back](#schema)

This is a binary type of data.
There is one way to get the type, it is `multipart/form-data` usage.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/partner'>
        <body>
          <object>
            <field key='icon'>
              <binary />
            </field>
            <field key='name'>
              <string />
            </field>
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `binary`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/partner'>
        <body>
          <object>
            <field key='icon'>
              <binary
                description='Square icon of the partner'
              />
            </field>
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### accept

This prop defines available file format.
It works the same as [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) attribute of HTML input element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/partner'>
        <body>
          <object>
            <field key='icon'>
              <binary
                accept='image/jpeg'
                description='Square icon of the partner'
              />
            </field>
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### min, max

Those two pros limit the file size.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/partner'>
        <body>
          <object>
            <field key='icon'>
              <binary
                accept='image/jpeg'
                description='Square icon of the partner'
                min={1024}
                max={10 * 1024 ** 2}
              />
            </field>
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

## List of Data

[← back](#index)

[\<tuple>](#tuple)  
[\<array>](#array)  
[\<object>](#object)  
[\<field>](#field)  

---

### \<tuple>

[← back](#schema)

`<tuple>` element specifies schema parameter as a tuple of children elements.

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param name='rating' in='query'>
          <tuple>
            <number min={1} max={5} />
            <number min={1} max={5} />
          </tuple>
        </param>
      </endpoint>
    </api>
  </server>
)
```

This example defines that, `/products?rating=3&rating=4` is valid and `rating` MUST be from `3` to `4`.
Also supports formats `/products?rating[]=3&rating[]=4` and `/products?rating[0]=3&rating[1]=4`.

`/products?rating=3` or `/products?rating=1&rating=6` returns an error.

You can add several elements in `<response>`, `<param>` or `<body>` to define that one of the element is valid.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <number min={1} max={5} />
          <tuple>
            <number min={1} max={5} />
            <number min={1} max={5} />
          </tuple>
        </param>
      </endpoint>
    </api>
  </server>
)
```

This example defines that, `/products?rating=3&rating=4` is valid and `rating` MUST be from `3` to `4`.
Also supports `/products?rating=3`, returns products have `rating` equals `3`.

`/products?rating=text` or `/products?rating=1&rating=6` returns an error.

#### default

Defines default `<tuple>` value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <number min={1} max={5} />
          <tuple default={[1, 5]}>
            <number min={1} max={5} />
            <number min={1} max={5} />
          </tuple>
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### example

Defines an example of the `<tuple>` value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <number min={1} max={5} />
          <tuple default={[1, 5]} example={[3, 5]}>
            <number min={1} max={5} />
            <number min={1} max={5} />
          </tuple>
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

Defines the `<tuple>` description.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <number min={1} max={5} />
          <tuple
            description='A range of rating score'
            default={[1, 5]}
            example={[3, 5]}>
            <number min={1} max={5} />
            <number min={1} max={5} />
          </tuple>
        </param>
      </endpoint>
    </api>
  </server>
)
```

### \<array>

[← back](#schema)

`<array>` element specifies schema parameter as an array of children elements.

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <array>
            <number min={1} max={5} />
          </array>
        </param>
      </endpoint>
    </api>
  </server>
)
```

This example defines that, `/products?rating=3&rating=4` is valid and `rating` MUST be `3` or `4`.
Also supports formats `/products?rating[]=3&rating[]=4` and `/products?rating[0]=3&rating[1]=4`.

`/products?rating=3` and `/products?rating=1&rating=2&rating=3` also support.

#### default

Defines default `<array>` value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <array default={[1, 2, 3, 4, 5]}>
            <number min={1} max={5} />
          </array>
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### example

Defines an example of the `<array>` value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <array example={[1, 3, 5]}>
            <number min={1} max={5} />
          </array>
        </param>
      </endpoint>
    </api>
  </server>
)
```

#### description

Defines the `<array>` description.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/products'>
        <param in='query' name='rating'>
          <array
            description='Values of rating score'
            example={[3, 5]}>
            <number min={1} max={5} />
          </array>
        </param>
      </endpoint>
    </api>
  </server>
)
```

### \<object>

[← back](#schema)

The element MUST be placed inside one of `<response>`, `<param>`, `<body>`.
It defines `object` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
          <object />
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### default

A default value for the `object`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
          <object
            default={{name: 'John'}}
          />
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### example

An example value.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
        <object
          example={{name: 'John'}}
        />
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### description

A description of the `object`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
        <object
          description='The object of a user'
        />
        </body>
      </endpoint>
    </api>
  </server>
)
```

### \<field>

[← back](#schema)

The element MUST be placed inside [<object>](#object).
It defines a `field` of an `object` value for a parent element.
`@innet/server` formats and validate the value automatically (real-time).

`key` is REQUIRED prop of `<field>`, it defines a field name of the `<object>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
          <object>
            <field key='name' />
            <field key='surname' />
            <field key='birthbay' />
          </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

#### optional

By default, any field is required. You can set it as `optional` by this prop.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='post' path='/users'>
        <body>
        <object>
          <field key='name' />
          <field key='surname' />
          <field optional key='birthbay' />
        </object>
        </body>
      </endpoint>
    </api>
  </server>
)
```

## Run-Time

Next elements relate to run-time action.
This action calls on user request.

[← back](#index)

Parent  
[\<fallback>](#fallback)  
[\<request>](#request)

Children  
[\<success>](#success)  
[\<error>](#error)  
[\<proxy>](#proxy)  
[\<redirect>](#redirect)  
[\<cms>](#cms)  
[\<file>](#file)  
[\<header>](#header)  
[\<cookie>](#cookie)

---

### \<fallback>

[← back](#run-time)

By default, `<api>` server returns 404 with empty body.
[<fallback>](#fallback) element defines default server response.
This element MUST be placed in `<api>`.
You MUST use one [<fallback>](#fallback) per `<api>`.
Can contain elements available inside [<request>](#request).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <error
          code='unknownEndpoint'
        />
      </fallback>
    </api>
  </server>
)
```

If you open the application on any URL except for `/`, you can see the next response.

```json
{
  "error": "unknownEndpoint"
}
```

The next elements are placed in [<request>](#request) or [<fallback>](#fallback)

### \<request>

[← back](#run-time)

This element MUST be placed in `<endpoint>` element.
It defines run-time call handler for the endpoint.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint method='get' path='/partners'>
        <request>
          <success>
            {{partners: []}}
          </success>
        </request>
      </endpoint>
    </api>
  </server>
)
```

You can place a component inside it.
The component will run when the endpoint will be triggered.

*src/app.tsx*
```typescript jsx
import { GetPartners } from './GetPartners'

export default (
  <server>
    <api>
      <endpoint method='get' path='/partners'>
        <request>
          <GetPartners />
        </request>
      </endpoint>
    </api>
  </server>
)
```

*src/GetPartners.tsx*
```typescript jsx
export const GetPartners = () => (
  <success>
    {{partners: []}}
  </success>
)
```

### \<success>

[← back](#run-time)

This is a base element to return a success data.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <success />
      </fallback>
    </api>
  </server>
)
```

You will get a response with `204` status (`noContent`) and without content.

You can provide some data to the user by children.

*src/app.tsx*
```typescript jsx
const data = {...}

export default (
  <server>
    <api>
      <fallback>
        <success>
          {data}
        </success>
      </fallback>
    </api>
  </server>
)
```

You will get `200` status (`ok`), with body equals data.

#### status

You can set response status by `status` prop of `<success>`.

*src/app.tsx*
```typescript jsx
const data = {...}

export default (
  <server>
    <api>
      <fallback>
        <success status='created'>
          {data}
        </success>
      </fallback>
    </api>
  </server>
)
```

You will get `201` status (`created`), with data as a content.

You can use a number of `status` prop.

*src/app.tsx*
```typescript jsx
const data = {...}

export default (
  <server>
    <api>
      <fallback>
        <success status={201}>
          {data}
        </success>
      </fallback>
    </api>
  </server>
)
```

### \<error>

[← back](#run-time)

Returns an error.
This element MUST be placed in [<request>](#request) or [<fallback>](#fallback).

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <error />
      </fallback>
    </api>
  </server>
)
```

Place a data into the element to return an error with the data.

*src/app.tsx*
```typescript jsx
const data = {...}

export default (
  <server>
    <api>
      <fallback>
        <error>
          {data}
        </error>
      </fallback>
    </api>
  </server>
)
```

#### status
You can change response status by `status` prop. By default, it is `520` (`unknownError`)

*src/app.tsx*
```typescript jsx
const data = {
  message: 'User not found!'
}

export default (
  <server>
    <api>
      <fallback>
        <error status='notFound'>
          {data}
        </error>
      </fallback>
    </api>
  </server>
)
```

You can use a number with the status prop.

*src/app.tsx*
```typescript jsx
const data = {
  message: 'User not found!'
}

export default (
  <server>
    <api>
      <fallback>
        <error status={404}>
          {data}
        </error>
      </fallback>
    </api>
  </server>
)
```

#### code
When you use `<error>` element a user get next response body.

*for the previous example*
```json
{
  "error": "undefined",
  "data": {
    "message": "User not found!"
  }
}
```

You can change the `error` code by `code` property.

*src/app.tsx*
```typescript jsx
const data = {
  message: 'User not found!'
}

export default (
  <server>
    <api>
      <fallback>
        <error
          code='noUser'
          status='notFound'>
          {data}
        </error>
      </fallback>
    </api>
  </server>
)
```

Then you get

*for the previous example*
```json
{
  "error": "noUser",
  "data": {
    "message": "User not found!"
  }
}
```

There are some default errors:

- `undefined` - when you use `<error>` element without `code`.
- `requestValidation` - when request data fails schema validation.
- `requestBodyContentType` - when cannot parse body.
- `unknown` - can because of JSON stringify fail or other errors.

### \<proxy>

[← back](#run-time)

MUST be placed in [<request>](#request) or [<fallback>](#fallback).

You can easy proxy endpoints to another server/service.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        path='/test'
        method='get'>
        <request>
          <proxy to='https://...' />
        </request>
      </endpoint>
      <fallback>
        <proxy to='https://...' />
      </fallback>
    </api>
  </server>
)
```

### \<redirect>

[← back](#run-time)

MUST be placed in [<request>](#request) or [<fallback>](#fallback).

You can redirect users to another resource. It adds `Cache-Control` header by default.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        path='/test'
        method='get'>
        <request>
          <redirect to='https://...' />
        </request>
      </endpoint>
      <fallback>
        <redirect to='https://...' />
      </fallback>
    </api>
  </server>
)
```

#### status

`<redirect>` element returns status `301` by default.
You can change it by `status` property.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <endpoint
        path='/test'
        method='get'>
        <request>
          <redirect
            status='found'
            to='https://...'
          />
        </request>
      </endpoint>
      <fallback>
        <redirect
          status={303}
          to='https://...'
        />
      </fallback>
    </api>
  </server>
)
```

### \<cms>

[← back](#run-time)

MUST be placed in [<request>](#request) or [<fallback>](#fallback).

`<cms>` helps to return files from a folder by path. It checks files run-time on the server.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <cms />
      </fallback>
    </api>
  </server>
)
```

#### dir

By default, it looks at project folder.
If you try the previous example on [http://localhost/package.json](http://localhost/package.json)
you get the project `package.json` file.

You can change root folder by `dir` property.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <cms dir='src' />
      </fallback>
    </api>
  </server>
)
```

Now you can try [http://localhost/index.tsx](http://localhost/index.tsx)
you get the index file in `src` folder.

#### prefix

`<cms>` matches full `path`, you should take it into account if you add `prefix` on `<api>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cms />
      </fallback>
    </api>
  </server>
)
```

Here you can try [http://localhost/src/index.tsx](http://localhost/src/index.tsx)
you get the index file in `src` folder.

You can reduce the path for matching by prefix property of `<cms>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/api'>
      <fallback>
        <cms prefix='/api' />
      </fallback>
    </api>
  </server>
)
```

Now you can try [http://localhost/api/package.json](http://localhost/api/package.json)

#### children

You can handle if a file was not found by children elements of `<cms>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cms>
          <error status={404} />
        </cms>
      </fallback>
    </api>
  </server>
)
```

### \<file>

[← back](#run-time)

It returns a file. MUST be placed in [<request>](#request) or [<fallback>](#fallback).

It adds `Content-Length` and `Content-Type` automatically.

It has a REQUIRED property of `path`. 

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api>
      <fallback>
        <file
          path='package.json'
        />
      </fallback>
    </api>
  </server>
)
```

For this example you get `package.json` file of the project on any path except for `/`.

#### children

You can handle if a file was not found by children elements of `<file>`.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <file path='file_is_not_exist.txt'>
          <error status={404} />
        </file>
      </fallback>
    </api>
  </server>
)
```

### \<header>

MUST be placed in [<request>](#request) or [<fallback>](#fallback).

[← back](#run-time)

You can add an HTTP header into response by `<header>` element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <header
          key='Cache-Control'
          value='no-cache, no-store, must-revalidate'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

### \<cookie>

MUST be placed in [<request>](#request) or [<fallback>](#fallback).

[← back](#run-time)

You can add/remove a cookie into response by `<cookie>` element.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          key='token'
          value='...'
        />
        <cookie
          key='removedCookie'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### domain

The prop specifies the value for the [Domain Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.3).
By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          domain='.example.com'
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### encode

Specifies a function that will be used to encode a cookie's value. Since value of a cookie has a limited character set (and must be a simple string), this function can be used to encode a value into a string suited for a cookie's value.
The default function is the global encodeURIComponent, which will encode a JavaScript string into UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.

#### expires

Specifies the Date object to be the value for the Expires [Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.1). By default, no expiration is set, and most clients will consider this a “non-persistent cookie” and will delete it on a condition like exiting a web browser application.
Note the [cookie storage model specification](https://datatracker.ietf.org/doc/html/rfc6265#section-5.3) states that if both expires and maxAge are set, then maxAge takes precedence, but it is possible not all clients by obey this, so if both are set, they should point to the same date and time.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          expires={new Date('2050-01-01')}
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### httpOnly

Specifies the boolean value for the [HttpOnly Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.6). When truthy, the HttpOnly attribute is set, otherwise it is not. By default, the HttpOnly attribute is not set.
Note be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in document.cookie.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### maxAge

Specifies the number (in seconds) to be the value for the Max-Age Set-Cookie attribute. The given number will be converted to an integer by rounding down. By default, no maximum age is set.
Note the [cookie storage model specification](https://datatracker.ietf.org/doc/html/rfc6265#section-5.3)  states that if both expires and maxAge are set, then maxAge takes precedence, but it is possible not all clients by obey this, so if both are set, they should point to the same date and time.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          maxAge={9999}
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### path

Specifies the value for the [Path Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.4).
By default, the path is considered the “default path”.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          maxAge={9999}
          path='/src'
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### priority

Specifies the string to be the value for the «Priority Set-Cookie attribute».

- `'low'` will set the Priority attribute to Low.
- `'medium'` will set the Priority attribute to Medium, the default priority when not set.
- `'high'` will set the Priority attribute to High.

note This is an attribute that has not yet been fully standardized, and may change in the future. This also means many clients may ignore this attribute until they understand it.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          priority='high'
          path='/src'
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### sameSite

Specifies the `boolean` or `string` to be the value for the SameSite Set-Cookie attribute.

- `true` will set the SameSite attribute to Strict for strict same site enforcement.
- `false` will not set the SameSite attribute.
- `'lax'` will set the SameSite attribute to Lax for lax same site enforcement.
- `'strict'` will set the SameSite attribute to Strict for strict same site enforcement.
- `'none'` will set the SameSite attribute to None for an explicit cross-site cookie.

note This is an attribute that has not yet been fully standardized, and may change in the future.
This also means many clients may ignore this attribute until they understand it.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          sameSite
          priority='high'
          path='/src'
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

#### secure

Specifies the boolean value for the [Secure Set-Cookie attribute](https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.5).
When truthy, the Secure attribute is set, otherwise it is not.
By default, the Secure attribute is not set.

Note be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api prefix='/src'>
      <fallback>
        <cookie
          httpOnly
          secure
          key='token'
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

## Components

[← back](#index)

Component is a function which returns content that, like, placed instead of the component.
Like you can inject a plugin between elements.
Components are from [@innet/jsx](https://www.npmjs.com/package/@innet/jsx).

*src/SetToken.tsx*
```typescript jsx
export const SetToken = ({ value }) => (
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
    <api prefix='/src'>
      <fallback>
        <SetToken
          value='...'
        />
        <success />
      </fallback>
    </api>
  </server>
)
```

You can use [hooks](#hooks) inside components.

## Hooks

Hook functions give you all features to control parent element functionality.

[← back](#index)

[useServer](#useserver)  
[useRequest](#userequest)  
[useResponse](#useresponse)  
[useHeaders](#useheaders)  
[useCookies](#usecookies)  
[usePath](#usepath)  
[useParams](#useparams)  
[useSearch](#usesearch)  
[useBody](#usebody)  

### useServer

[← back](#hooks)

This hook MUST be used in a component placed in `<server>`.
This hook returns current http(s) server instance.

*src/Component.tsx*

```typescript jsx
import { useServer } from '@innet/sever'

export function Component () {
  const server = useServer()

  console.log(server)

  return <success />
}
```

### useRequest

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current request instance.

*src/Component.tsx*

```typescript jsx
import { useRequest } from '@innet/sever'

export function Component () {
  const request = useRequest()

  console.log(request)

  return <success />
}
```

### useResponse

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current response instance.

*src/Component.tsx*

```typescript jsx
import { useResponse } from '@innet/sever'

export function Component () {
  const response = useResponse()

  console.log(response)

  return <success />
}
```

### useHeaders

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current request headers object.

*src/Component.tsx*

```typescript jsx
import { useHeaders } from '@innet/sever'

export function Component () {
  const headers = useHeaders()

  return <success>{{ headers }}</success>
}
```

### useCookies

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current request cookies object.

*src/Component.tsx*

```typescript jsx
import { useCookies } from '@innet/sever'

export function Component () {
  const cookies = useCookies()

  return <success>{{ cookies }}</success>
}
```

### usePath

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current request URL path as a `string`.

*src/Component.tsx*

```typescript jsx
import { usePath } from '@innet/sever'

export function Component () {
  const path = usePath()

  return <success>{{ path }}</success>
}
```

### useParams

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns an object of URL params you set by [<param>](#param).

*src/Component.tsx*
```typescript jsx
import { useParams } from '@innet/sever'

export function Component () {
  const params = useParams()

  return <success>{params}</success>
}
```

### useSearch

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns an object of URL query params.

*src/Component.tsx*
```typescript jsx
import { useSearch } from '@innet/sever'

export function Component () {
  const search = useSearch()

  return <success>{search}</success>
}
```

### useBody

[← back](#hooks)

This hook MUST be used in a component placed in [<request>](#request) or [<fallback>](#fallback).
This hook returns current request body.

*src/Component.tsx*
```typescript jsx
import { useBody } from '@innet/sever'

export function Component () {
  const body = useBody()

  return <success>{body}</success>
}
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-server/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-server)](https://github.com/d8corp/innet-server/issues)
