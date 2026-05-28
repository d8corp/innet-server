<br>
<p align="center">
  <a href="https://github.com/d8corp/innet">
    <img width="200" height="200" src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" alt="Innet logo by Mikhail Lysikov">
  </a>
</p>

<h1 align="center">@innet/server</h1>

<p align="center">JavaScript Backend Framework</p>

<br>

<div align="center">
  <a href="https://www.npmjs.com/package/@innet/server" target="_blank">
    <img src="https://img.shields.io/npm/v/@innet/server.svg" alt="@innet/server npm">
  </a>
  <a href="https://www.npmtrends.com/@innet/server" target="_blank">
    <img src="https://img.shields.io/npm/dm/@innet/server.svg" alt="@innet/server downloads">
  </a>
  <a href="https://github.com/d8corp/innet-server/tree/main/release" target="_blank">
    <img src="https://packagephobia.com/badge?p=@innet/server" alt="@innet/server install size">
  </a>
  <a href="https://www.typescriptlang.org" target="_blank">
    <img src="https://img.shields.io/npm/types/@innet/server" alt="TypeScript">
  </a>
  <a href="https://github.com/d8corp/innet-server/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/@innet/server" alt="@innet/server license">
  </a>
  <a href="https://github.com/d8corp/innet-server/blob/main/CHANGELOG.md" target="_blank">
    <img src="https://img.shields.io/badge/Changelog-⋮-brightgreen" alt="@innet/server changelog">
  </a>
  <a href="https://github.com/d8corp/innet-server/issues" target="_blank">
    <img src="https://img.shields.io/github/issues-raw/d8corp/innet-server" alt="@innet/server issues">
  </a>
</div>

<br>

`@innet/server` is a backend framework that brings HTML-like declarative markup to server-side.

- **JSX** — Write backend with HTML-like syntax
- **Components** — React-like component-driven approach
- **OpenAPI** — Generate OpenAPI 3.1.0 documentation automatically
- **Type-Safe** — Full TypeScript support
- **Validation** — Validate request data automatically
- **UI** — Built-in interactive API documentation with `Swagger`, `Scalar`, `RapiDoc`, `ReDoc` or your own viewer
- **Contract-First** — Define API contracts before implementation
- **Runtime Agnostic** — Works with any runtime (Node.js, Deno, Bun)
- **Zero Configuration** — Works out of the box with sensible defaults

Built on top of [innet](https://www.npmjs.com/package/innet).

[![stars](https://img.shields.io/github/stars/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-server?style=social)](https://github.com/d8corp/innet-server/watchers)

## Index

<blockquote>
  ┌ 📦 <a href="#install">Install</a><br>
  <details>
    <summary>&nbsp;🚀 <a href="#quick-start">Quick Start</a></summary>
    <blockquote>
      ├ 📁 <a href="#hello-world">Hello World</a><br>
      ├ 📁 <a href="#api-example">API Example</a><br>
      ├ 📁 <a href="#endpoint-example">Endpoint Example</a><br>
      └ 📁 <a href="#component-example">Component Example</a>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;⚙️ <a href="#configuration">Configuration</a></summary>
    <blockquote>
      ├ 🏷️ <a href="#innet_port">INNET_PORT</a><br>
      ├ 🏷️ <a href="#innet_ssl_crt">INNET_SSL_CRT</a><br>
      ├ 🏷️ <a href="#innet_ssl_key">INNET_SSL_KEY</a><br>
      ├ 🏷️ <a href="#innet_api_prefix">INNET_API_PREFIX</a><br>
      ├ 🏷️ <a href="#innet_api_version">INNET_API_VERSION</a><br>
      ├ 🏷️ <a href="#innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a><br>
      ├ 🏷️ <a href="#innet_cms_dir">INNET_CMS_DIR</a><br>
      ├ 🏷️ <a href="#innet_cms_prefix">INNET_CMS_PREFIX</a><br>
      ├ 🏷️ <a href="#innet_blacklist_ip">INNET_BLACKLIST_IP</a><br>
      ├ 🏷️ <a href="#innet_whitelist_ip">INNET_WHITELIST_IP</a><br>
      ├ 🏷️ <a href="#innet_protection">INNET_PROTECTION</a><br>
      ├ 🏷️ <a href="#innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a><br>
      ├ 🏷️ <a href="#innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a><br>
      ├ 🏷️ <a href="#innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a><br>
      ├ 🏷️ <a href="#innet_protected_ip">INNET_PROTECTED_IP</a><br>
      ├ 🏷️ <a href="#innet_dts_path">INNET_DTS_PATH</a><br>
      ├ 🏷️ <a href="#innet_dts_namespace">INNET_DTS_NAMESPACE</a><br>
      ├ 🏷️ <a href="#innet_ui_path">INNET_UI_PATH</a><br>
      └ 🏷️ <a href="#innet_swagger_path">INNET_SWAGGER_PATH</a><br>
    </blockquote>
  </details>
  ├ 🛠️ <a href="#components">Components</a><br>
  <details>
    <summary>&nbsp;🗂 <a href="#elements">Elements</a></summary>
    <blockquote>
      <details>
        <summary>&nbsp;🧩 <a href="#env">&lt;env&gt;</a></summary>
        <blockquote>
          ├ 🏷️ <a href="#env-is">is</a><br>
          └ 🏷️ <a href="#env-of">of</a>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#server">&lt;server&gt;</a></summary>
        <blockquote>
          ├ 🏷️ <a href="#server-port">port</a><br>
          ├ 🏷️ <a href="#server-ssl">ssl</a><br>
          ├ 🏷️ <a href="#server-format-error">formatError</a><br>
          ├ 🏷️ <a href="#server-onstart">onStart</a><br>
          ├ 🏷️ <a href="#server-onrequest">onRequest</a><br>
          ├ 🏷️ <a href="#server-onerror">onError</a><br>
          ├ 🏷️ <a href="#server-onclose">onClose</a><br>
          <details>
            <summary>&nbsp;🧩 <a href="#blacklist">&lt;blacklist&gt;</a></summary>
            <blockquote>
              └ 🏷️ <a href="#blacklist-ip">ip</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#whitelist">&lt;whitelist&gt;</a></summary>
            <blockquote>
              └ 🏷️ <a href="#whitelist-ip">ip</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#protection">&lt;protection&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#protection-value">value</a><br>
              ├ 🏷️ <a href="#protection-maxage">maxAge</a><br>
              ├ 🏷️ <a href="#protection-excludeip">excludeIp</a><br>
              ├ 🏷️ <a href="#protection-cookiekey">cookieKey</a><br>
              └ 🏷️ <a href="#protection-searchkey">searchKey</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#preset">&lt;preset&gt;</a></summary>
            <blockquote>
              <details>
                <summary>&nbsp;🧩 <a href="#header">&lt;header&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#header-key">key</a><br>
                  └ 🏷️ <a href="#header-value">value</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#cookie">&lt;cookie&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#cookie-key">key</a><br>
                  ├ 🏷️ <a href="#cookie-value">value</a><br>
                  ├ 🏷️ <a href="#cookie-domain">domain</a><br>
                  ├ 🏷️ <a href="#cookie-encode">encode</a><br>
                  ├ 🏷️ <a href="#cookie-expires">expires</a><br>
                  ├ 🏷️ <a href="#cookie-httponly">httpOnly</a><br>
                  ├ 🏷️ <a href="#cookie-maxage">maxAge</a><br>
                  ├ 🏷️ <a href="#cookie-path">path</a><br>
                  ├ 🏷️ <a href="#cookie-priority">priority</a><br>
                  ├ 🏷️ <a href="#cookie-samesite">sameSite</a><br>
                  └ 🏷️ <a href="#cookie-secure">secure</a>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#return">&lt;return&gt;</a></summary>
            <blockquote>
              <details>
                <summary>&nbsp;🧩 <a href="#success">&lt;success&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#success-status">status</a><br>
                  └ 🏷️ <a href="#success-contenttype">contentType</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#error">&lt;error&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#error-status">status</a><br>
                  └ 🏷️ <a href="#error-code">code</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#proxy">&lt;proxy&gt;</a></summary>
                <blockquote>
                  └ 🏷️ <a href="#proxy-to">to</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#redirect">&lt;redirect&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#redirect-to">to</a><br>
                  └ 🏷️ <a href="#redirect-status">status</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#cms">&lt;cms&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#cms-dir">dir</a><br>
                  └ 🏷️ <a href="#cms-prefix">prefix</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#file">&lt;file&gt;</a></summary>
                <blockquote>
                  └ 🏷️ <a href="#file-path">path</a>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#api">&lt;api&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#api-title">title</a><br>
              ├ 🏷️ <a href="#api-description">description</a><br>
              ├ 🏷️ <a href="#api-version">version</a><br>
              ├ 🏷️ <a href="#api-prefix">prefix</a><br>
              ├ 🏷️ <a href="#api-include">include</a><br>
              ├ 🏷️ <a href="#api-exclude">exclude</a><br>
              <details>
                <summary>&nbsp;🧩 <a href="#host">&lt;host&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#host-url">url</a><br>
                  ├ 🏷️ <a href="#host-description">description</a><br>
                  <details>
                    <summary>&nbsp;🧩 <a href="#variable">&lt;variable&gt;</a></summary>
                    <blockquote>
                      ├ 🏷️ <a href="#variable-key">key</a><br>
                      ├ 🏷️ <a href="#variable-value">value</a><br>
                      ├ 🏷️ <a href="#variable-values">values</a><br>
                      └ 🏷️ <a href="#variable-description">description</a>
                    </blockquote>
                  </details>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#license">&lt;license&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#license-name">name</a><br>
                  ├ 🏷️ <a href="#license-identifier">identifier</a><br>
                  └ 🏷️ <a href="#license-url">url</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#contact">&lt;contact&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#contact-name">name</a><br>
                  ├ 🏷️ <a href="#contact-email">email</a><br>
                  └ 🏷️ <a href="#contact-url">url</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#ui">&lt;ui&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#ui-html">html</a><br>
                  ├ 🏷️ <a href="#ui-params">params</a><br>
                  └ 🏷️ <a href="#ui-path">path</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#dts">&lt;dts&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#dts-path">path</a><br>
                  └ 🏷️ <a href="#dts-namespace">namespace</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#tag">&lt;tag&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#tag-name">name</a><br>
                  └ 🏷️ <a href="#tag-group">group</a>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#endpoint">&lt;endpoint&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#endpoint-method">method</a><br>
                  ├ 🏷️ <a href="#endpoint-path">path</a><br>
                  ├ 🏷️ <a href="#endpoint-summary">summary</a><br>
                  ├ 🏷️ <a href="#endpoint-description">description</a><br>
                  ├ 🏷️ <a href="#endpoint-deprecated">deprecated</a><br>
                  ├ 🏷️ <a href="#endpoint-private">private</a><br>
                  ├ 🏷️ <a href="#endpoint-operationid">operationId</a><br>
                  ├ 🧩 <a href="#body">&lt;body&gt;</a>
                  <details>
                    <summary>&nbsp;🧩 <a href="#param">&lt;param&gt;</a></summary>
                    <blockquote>
                      ├ 🏷️ <a href="#param-in">in</a><br>
                      ├ 🏷️ <a href="#param-name">name</a><br>
                      ├ 🏷️ <a href="#param-description">description</a><br>
                      ├ 🏷️ <a href="#param-required">required</a><br>
                      └ 🏷️ <a href="#param-deprecated">deprecated</a>
                    </blockquote>
                  </details>
                  <details>
                    <summary>&nbsp;🧩 <a href="#response">&lt;response&gt;</a></summary>
                    <blockquote>
                      ├ 🏷️ <a href="#response-status">status</a><br>
                      └ 🏷️ <a href="#response-type">type</a>
                    </blockquote>
                  </details>
                </blockquote>
              </details>
            </blockquote>
          </details>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🗂️ <a href="#schemas">Schemas</a></summary>
    <blockquote>
      <details>
        <summary>&nbsp;📁 <a href="#schemas-props">Props</a></summary>
        <blockquote>
          ├ 🏷️ <a href="#schema-title">title</a><br>
          ├ 🏷️ <a href="#schema-description">description</a><br>
          ├ 🏷️ <a href="#schema-examples">examples</a><br>
          ├ 🏷️ <a href="#schema-example">example</a><br>
          ├ 🏷️ <a href="#schema-default">default</a><br>
          ├ 🏷️ <a href="#schema-nullable">nullable</a><br>
          ├ 🏷️ <a href="#schema-ref">ref</a><br>
          ├ 🏷️ <a href="#schema-const">const</a><br>
          ├ 🏷️ <a href="#schema-values">values</a><br>
          ├ 🏷️ <a href="#schema-readonly">readOnly</a><br>
          ├ 🏷️ <a href="#schema-writeonly">writeOnly</a><br>
          └ 🏷️ <a href="#schema-deprecated">deprecated</a><br>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#collections">Collections</a></summary>
        <blockquote>
          <details>
            <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
            <blockquote>
              <details>
                <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
                <blockquote>
                  ├ 🏷️ <a href="#field-key">key</a><br>
                  ├ 🏷️ <a href="#field-optional">optional</a><br>
                  ├ 🏷️ <a href="#field-deprecated">deprecated</a><br>
                  ├ 🏷️ <a href="#field-readonly">readOnly</a><br>
                  └ 🏷️ <a href="#field-writeonly">writeOnly</a>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#array-minitems">minItems</a><br>
              ├ 🏷️ <a href="#array-maxitems">maxItems</a><br>
              └ 🏷️ <a href="#array-uniqueitems">uniqueItems</a>
            </blockquote>
          </details>
          └ 🧩 <a href="#tuple">&lt;tuple&gt;</a><br>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#primitive-data">Primitives</a></summary>
        <blockquote>
          <details>
            <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#string-min">min</a><br>
              ├ 🏷️ <a href="#string-max">max</a><br>
              ├ 🏷️ <a href="#string-pattern">pattern</a><br>
              └ 🏷️ <a href="#string-patternid">patternId</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#num-min">min</a><br>
              ├ 🏷️ <a href="#num-max">max</a><br>
              ├ 🏷️ <a href="#num-exclusivemin">exclusiveMin</a><br>
              ├ 🏷️ <a href="#num-exclusivemax">exclusiveMax</a><br>
              └ 🏷️ <a href="#num-multipleof">multipleOf</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#int-format">format</a><br>
              ├ 🏷️ <a href="#int-min">min</a><br>
              ├ 🏷️ <a href="#int-max">max</a><br>
              ├ 🏷️ <a href="#int-exclusivemin">exclusiveMin</a><br>
              ├ 🏷️ <a href="#int-exclusivemax">exclusiveMax</a><br>
              └ 🏷️ <a href="#int-multipleof">multipleOf</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#date-min">min</a><br>
              └ 🏷️ <a href="#date-max">max</a>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
            <blockquote>
              ├ 🏷️ <a href="#binary-accept">accept</a><br>
              ├ 🏷️ <a href="#binary-min">min</a><br>
              └ 🏷️ <a href="#binary-max">max</a>
            </blockquote>
          </details>
          ├ 🧩 <a href="#uuid">&lt;uuid&gt;</a><br>
          ├ 🧩 <a href="#boolean">&lt;boolean&gt;</a><br>
          ├ 🧩 <a href="#null">&lt;null&gt;</a><br>
          └ 🧩 <a href="#any">&lt;any&gt;</a><br>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🪝 <a href="#hooks">Hooks</a></summary>
    <blockquote>
      <details>
        <summary>&nbsp;📁 <a href="#runtime-hooks">Runtime</a></summary>
        <blockquote>
          ├ 🪝 <a href="#userequest">useRequest</a><br>
          ├ 🪝 <a href="#useresponse">useResponse</a><br>
          ├ 🪝 <a href="#usepath">usePath</a><br>
          ├ 🪝 <a href="#useheaders">useHeaders</a><br>
          ├ 🪝 <a href="#usecookies">useCookies</a><br>
          ├ 🪝 <a href="#useparams">useParams</a><br>
          ├ 🪝 <a href="#usesearch">useSearch</a><br>
          ├ 🪝 <a href="#usebody">useBody</a><br>
          └ 🪝 <a href="#useclientip">useClientIp</a>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#shared-hooks">Shared</a></summary>
        <blockquote>
          ├ 🪝 <a href="#useserver">useServer</a><br>
          ├ 🪝 <a href="#useserverport">useServerPort</a><br>
          ├ 🪝 <a href="#useisserverhttps">useIsServerHttps</a><br>
          ├ 🪝 <a href="#usecomponentname">useComponentName</a><br>
          └ 🪝 <a href="#useserverplugin">useServerPlugin</a>
        </blockquote>
      </details>
    </blockquote>
  </details>
  └ 🔗 <a href="#links">Links</a>
</blockquote>

## Install
###### [🏠︎](#index) / Install [↓](#quick-start)

The easiest way to get started is with the [innetjs](https://www.npmjs.com/package/innetjs) CLI:

```shell
npx innetjs init my-app -t api
```

Or install manually:

```shell
npm install @innet/server innet
```

## Quick Start
###### [🏠︎](#index) / Quick Start [↑](#install) [↓](#configuration)

Before you begin, make sure you have Node.js (v18 or later) installed. You'll also need a basic understanding of TypeScript and JSX.

### Hello World
###### [🏠︎](#index) / [Quick Start](#quick-start) / Hello World [↓](#api-example)

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

### API Example
###### [🏠︎](#index) / [Quick Start](#quick-start) / API Example [↑](#hello-world) [↓](#endpoint-example)

Generate OpenAPI documentation without writing any endpoints.
This shows the automatic OpenAPI 3.1.0 structure that `@innet/server` creates.
Useful for understanding the API documentation format and testing the Swagger UI [<ui>](#ui) setup.

*src/app.tsx*
```typescript jsx
export default (
  <server>
    <api />
  </server>
)
```

Open http://localhost — you'll see OpenAPI 3.1.0 JSON structure with API metadata.

### Endpoint Example
###### [🏠︎](#index) / [Quick Start](#quick-start) / Endpoint Example [↑](#api-example) [↓](#component-example)

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

### Component Example
###### [🏠︎](#index) / [Quick Start](#quick-start) / Component Example [↑](#endpoint-example)

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

## Configuration
###### [🏠︎](#index) / Configuration [↑](#quick-start) [↓](#components)

Configure the server and API behavior using environment variables.

### Server Settings
###### [🏠︎](#index) / [Configuration](#configuration) / Server Settings [↓](#components)

#### INNET_PORT
###### [🏠︎](#index) / [Configuration](#configuration) / [Server Settings](#server-settings) [↓](#innet_ssl_crt)
Server port number.

- **Default:** `80` (HTTP) or `443` (HTTPS)
- **Used by:** `<server port={3000}>`

```shell
INNET_PORT=3000
```

#### INNET_SSL_CRT
Path to SSL certificate file.

- **Default:** `localhost.crt`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_CRT=./certs/server.crt
```

#### <a id="innet_ssl_key">INNET_SSL_KEY</a>
Path to SSL private key file.

- **Default:** `localhost.key`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_KEY=./certs/server.key
```

### API Settings

#### <a id="innet_api_prefix">INNET_API_PREFIX</a>
URL prefix for all API endpoints.

- **Default:** `''` (empty string)
- **Used by:** `<api prefix>`

```shell
INNET_API_PREFIX=/api/v1
```

#### <a id="innet_api_version">INNET_API_VERSION</a>
API version string.

- **Default:** `'0.0.0'`
- **Used by:** `<api version>`

```shell
INNET_API_VERSION=1.0.0
```

#### <a id="innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a>
Key name for enum descriptions in OpenAPI spec.

- **Default:** `'x-enumNames'`
- **Used by:** Schema enums

```shell
INNET_API_ENUM_DESCRIPTION_KEY=x-enum-descriptions
```

### CMS Settings

#### <a id="innet_cms_dir">INNET_CMS_DIR</a>
Directory for static CMS files.

- **Default:** `'.'`
- **Used by:** `<cms dir>`

```shell
INNET_CMS_DIR=./public
```

#### <a id="innet_cms_prefix">INNET_CMS_PREFIX</a>
URL prefix for CMS routes.

- **Default:** `'/'`
- **Used by:** `<cms prefix>`

```shell
INNET_CMS_PREFIX=/static
```

### Security Settings

#### <a id="innet_blacklist_ip">INNET_BLACKLIST_IP</a>
IP address to blacklist.

- **Default:** `undefined`
- **Used by:** `<blacklist ip>`

```shell
INNET_BLACKLIST_IP=192.168.1.100
```

#### <a id="innet_whitelist_ip">INNET_WHITELIST_IP</a>
IP address to whitelist.

- **Default:** `undefined`
- **Used by:** `<whitelist ip>`

```shell
INNET_WHITELIST_IP=10.0.0.1
```

#### <a id="innet_protection">INNET_PROTECTION</a>
Protection token value.

- **Default:** `undefined`
- **Used by:** `<protection value>`

```shell
INNET_PROTECTION=secret-token
```

#### <a id="innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a>
Protection token max age in seconds.

- **Default:** `31536000` (1 year)
- **Used by:** `<protection maxAge>`

```shell
INNET_PROTECTION_MAX_AGE=86400
```

#### <a id="innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a>
Cookie name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection cookieKey>`

```shell
INNET_PROTECTION_COOKIE_KEY=auth_token
```

#### <a id="innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a>
Query parameter name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection searchKey>`

```shell
INNET_PROTECTION_SEARCH_KEY=token
```

#### <a id="innet_protected_ip">INNET_PROTECTED_IP</a>
IP address to exclude from protection.

- **Default:** `undefined`
- **Used by:** `<protection excludeIp>`

```shell
INNET_PROTECTED_IP=127.0.0.1
```

### Documentation Settings

#### <a id="innet_dts_path">INNET_DTS_PATH</a>
Path for generated TypeScript definition file.

- **Default:** `'src/apiTypes.d.ts'`
- **Used by:** `<dts path>`

```shell
INNET_DTS_PATH=./types/api.d.ts
```

#### <a id="innet_dts_namespace">INNET_DTS_NAMESPACE</a>
Namespace for generated TypeScript types.

- **Default:** `undefined`
- **Used by:** `<dts namespace>`

```shell
INNET_DTS_NAMESPACE=API
```

#### <a id="innet_ui_path">INNET_UI_PATH</a>
URL path for API documentation UI.

- **Default:** `'/ui'`
- **Used by:** `<ui path>`

```shell
INNET_UI_PATH=/docs
```

#### <a id="innet_swagger_path">INNET_SWAGGER_PATH</a>
URL path for Swagger UI.

- **Default:** `'/swagger-ui'`
- **Used by:** `<swagger path>`

```shell
INNET_SWAGGER_PATH=/swagger
```

## Components
###### [🏠︎](#index) / Components [↑](#configuration) [↓](#elements)

Components are reusable, composable building blocks for your API.
Create custom components to encapsulate business logic and share them across your application.

Here's an example of a custom component:

*src/components/ApiResponse.tsx*
```typescript jsx
interface ApiResponseProps {
  data: any;
  status?: number;
}

export const ApiResponse = ({ data, status = 200 }: ApiResponseProps) => (
  <return>
    <success status={status}>{data}</success>
  </return>
);
```

Use the component in your API:

```typescript jsx
<endpoint method='get' path='/users'>
  <ApiResponse data={users} />
</endpoint>
```

### Endpoints
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / Endpoints [↑](#api)

The `<endpoint>` element defines a single API operation with HTTP method and path. It's where you specify route parameters, request body, response schema, and the handler that processes requests. Each endpoint is automatically added to OpenAPI documentation.

```typescript jsx
<api>
  <endpoint
    method='get'
    path='/users/{userId}'
    summary='Get a user'
    description='Retrieve user by ID'
  >
    {/* parameters, body, response, handler */}
  </endpoint>
</api>
```

**HTTP Methods:** `get`, `post`, `put`, `patch`, `delete`, `options`, `head`, `trace`

#### <a id="endpoint-method">method</a>

The HTTP method for the endpoint.

- Type: `'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'trace'`
- Required: Yes

```typescript jsx
<endpoint method='get' path='/users' />
```

#### <a id="endpoint-path">path</a>

The URL path for the endpoint. Supports path templating with `{paramName}`.

- Type: `string`
- Required: Yes
- Must start with `/`

```typescript jsx
<endpoint method='get' path='/users/{userId}' />
```

#### <a id="endpoint-summary">summary</a>

Short summary of the operation.

- Type: `string`
- Required: No

```typescript jsx
<endpoint method='get' path='/users' summary='List all users' />
```

#### <a id="endpoint-description">description</a>

Longer description of the operation. CommonMark syntax supported.

- Type: `string`
- Required: No

```typescript jsx
<endpoint method='get' path='/users' description='Returns a list of all users' />
```

#### <a id="endpoint-deprecated">deprecated</a>

Mark the endpoint as deprecated.

- Type: `boolean`
- Default: `false`

```typescript jsx
<endpoint method='get' path='/users' deprecated />
```

#### <a id="endpoint-private">private</a>

Hide the endpoint from OpenAPI documentation.

- Type: `boolean`
- Default: `false`

```typescript jsx
<endpoint method='get' path='/users' private />
```

#### <a id="endpoint-operationid">operationId</a>

Unique identifier for the operation.

- Type: `string`
- Required: No

```typescript jsx
<endpoint method='get' path='/users' operationId='getUsers' />
```

### Tag
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / Tag [↑](#endpoints)

The `<tag>` element groups related endpoints together in the OpenAPI documentation.

#### <a id="tag-name">name</a>

The tag name.

- Type: `string`
- Required: Yes

```typescript jsx
<tag name='users'>
  <endpoint method='get' path='/users' />
  <endpoint method='post' path='/users' />
</tag>
```

#### <a id="tag-group">group</a>

Organize tags into groups in the documentation.

- Type: `string`
- Required: No

```typescript jsx
<tag group='Authentication' name='auth'>
  <endpoint method='post' path='/login' />
</tag>
```
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / Components [↑](#endpoints)

Components are reusable functions that return JSX elements. They allow you to extract common handler logic and share it across multiple endpoints. This keeps your code DRY and makes API maintenance easier.

*src/components/GetUser.tsx*
```typescript jsx
export const GetUser = () => (
  <success>{{ id: 1, name: 'John' }}</success>
)
```

*src/app.tsx*
```typescript jsx
import { GetUser } from './components/GetUser'

export default (
  <server>
    <api>
      <endpoint method='get' path='/users/{id}'>
        <return>
          <GetUser />
        </return>
      </endpoint>
    </api>
  </server>
)
```

## Elements
###### [🏠︎](#index) / Elements [↑](#components) [↓](#schemas)

## Schemas
###### [🏠︎](#index) / Schemas [↑](#elements) [↓](#hooks)

### Primitive Data
###### [🏠︎](#index) / [Schemas](#schemas) / [Primitive Data](#primitive-data) [↑](#schemas-props) [↓](#object)

Primitive data types are the building blocks of your API schemas. They represent single values like strings, numbers, booleans, and dates. All primitives support common properties like title, description, examples, defaults, and validation rules. Use them to define the data types for parameters, request bodies, and responses.

All primitives support: `title`, `description`, `deprecated`, `readOnly`, `writeOnly`, `example`, `default`, `nullable`

**Types:**
- `<any />` — Any value
- `<null />` — Null type
- `<boolean />` — True/false
- `<string />` — Text (supports `min`, `max`, `pattern`, `format`, `values`)
- `<number />` — Decimal number (supports `min`, `max`, `exclusiveMinimum`, `exclusiveMaximum`, `multipleOf`)
- `<integer />` — Whole number (supports `format: 'int32' | 'int64'`)
- `<date />` — ISO date (supports `min`, `max`)
- `<uuid />` — UUID format
- `<binary />` — File/binary data (supports `accept`, `min`, `max` file size)

#### <a id="any">Any</a>

Accepts any value type. Useful when you want to allow flexible input without strict type validation.

```typescript jsx
<param in='query' name='data'>
  <any />
</param>
```

**Properties:**
- <a id="any-title">`title`</a> — Type title
- <a id="any-description">`description`</a> — Type description
- <a id="any-example">`example`</a> — Example value
- <a id="any-default">`default`</a> — Default value
- <a id="any-readonly">`readOnly`</a> — Read-only flag
- <a id="any-writeonly">`writeOnly`</a> — Write-only flag
- <a id="any-deprecated">`deprecated`</a> — Deprecated flag

#### <a id="null">Null</a>

Represents a null value explicitly.

```typescript jsx
<param in='query' name='nothing'>
  <null />
</param>
```

**Properties:**
- <a id="null-description">`description`</a> — Type description

#### <a id="boolean">Boolean</a>

True or false value.

```typescript jsx
<param in='query' name='active'>
  <boolean default={true} />
</param>
```

**Properties:**
- <a id="bool-title">`title`</a> — Type title
- <a id="bool-description">`description`</a> — Type description
- <a id="bool-example">`example`</a> — Example value
- <a id="bool-default">`default`</a> — Default value
- <a id="bool-const">`const`</a> — Constant value
- <a id="bool-values">`values`</a> — Enumeration of allowed values

#### <a id="string">String</a>

Text data with optional validation.

```typescript jsx
<param in='query' name='email'>
  <string format='email' min={1} max={255} />
</param>
```

**Properties:**
- <a id="string-title">`title`</a> — Type title
- <a id="string-description">`description`</a> — Type description
- <a id="string-min-max">`min/max`</a> — Minimum and maximum length
- <a id="string-pattern">`pattern`</a> — Regex pattern validation
- <a id="string-patternid">`patternId`</a> — Pattern identifier for error messages
- <a id="string-format">`format`</a> — Format hint: `email`, `date-time`, `date`, `uri`, `hostname`, `ipv4`, `ipv6`, `uuid`, `byte`, `binary`, `password`
- <a id="string-values">`values`</a> — Enumeration of allowed values
- <a id="string-example">`example`</a> — Example value
- <a id="string-default">`default`</a> — Default value
- <a id="string-const">`const`</a> — Constant value

#### <a id="number">Number</a>

Decimal number with optional validation.

```typescript jsx
<param in='query' name='price'>
  <number min={0} max={10000} multipleOf={0.01} />
</param>
```

**Properties:**
- <a id="num-title">`title`</a> — Type title
- <a id="num-description">`description`</a> — Type description
- <a id="num-min-max">`min/max`</a> — Minimum and maximum values
- <a id="num-exclusive">`exclusiveMin/Max`</a> — Exclusive minimum and maximum
- <a id="num-multipleof">`multipleOf`</a> — Must be multiple of this value
- <a id="num-format">`format`</a> — Format: `double`, `float`
- <a id="num-values">`values`</a> — Enumeration of allowed values
- <a id="num-example">`example`</a> — Example value
- <a id="num-default">`default`</a> — Default value
- <a id="num-const">`const`</a> — Constant value

#### <a id="integer">Integer</a>

Whole number with optional validation.

```typescript jsx
<param in='query' name='age'>
  <integer min={0} max={150} />
</param>
```

**Properties:**
- <a id="int-format">`format`</a> — `'int32'` (default) or `'int64'` for BigInt
- <a id="int-title">`title`</a> — Type title
- <a id="int-description">`description`</a> — Type description
- <a id="int-min-max">`min/max`</a> — Minimum and maximum values
- <a id="int-exclusive">`exclusiveMin/Max`</a> — Exclusive minimum and maximum
- <a id="int-multipleof">`multipleOf`</a> — Must be multiple of this value
- <a id="int-values">`values`</a> — Enumeration of allowed values
- <a id="int-example">`example`</a> — Example value
- <a id="int-default">`default`</a> — Default value
- <a id="int-const">`const`</a> — Constant value

#### <a id="date">Date</a>

ISO 8601 date format.

```typescript jsx
<param in='query' name='birthDate'>
  <date min='1900-01-01' max='now' />
</param>
```

**Properties:**
- <a id="date-title">`title`</a> — Type title
- <a id="date-description">`description`</a> — Type description
- <a id="date-min-max">`min/max`</a> — Date range limits
- <a id="date-values">`values`</a> — Enumeration of allowed dates
- <a id="date-example">`example`</a> — Example value
- <a id="date-default">`default`</a> — Default value

#### <a id="uuid">UUID</a>

Universally unique identifier in UUID format.

```typescript jsx
<param in='cookie' name='sessionId'>
  <uuid default='new' />
</param>
```

**Properties:**
- <a id="uuid-title">`title`</a> — Type title
- <a id="uuid-description">`description`</a> — Type description
- <a id="uuid-default">`default`</a> — Default value or `'new'` to generate
- <a id="uuid-values">`values`</a> — Enumeration of allowed UUIDs
- <a id="uuid-example">`example`</a> — Example value

#### <a id="binary">Binary</a>

File upload or binary data. Typically used with multipart/form-data.

```typescript jsx
<field key='avatar'>
  <binary accept='image/*' min={1024} max={5242880} />
</field>
```

**Properties:**
- <a id="binary-title">`title`</a> — Type title
- <a id="binary-description">`description`</a> — Type description
- <a id="binary-accept">`accept`</a> — File type filter (MIME types)
- <a id="binary-min-max">`min/max`</a> — File size limits in bytes

### Object
###### [🏠︎](#index) / [Schema Types](#schema-types) / Object [↑](#primitive-data) [↓](#array)

Objects represent structured data with named fields. Use `<object>` to define complex schemas with multiple properties, each with its own type and validation rules. Objects can be nested to create deeply structured data models.

```typescript jsx
<object description='User object'>
  <field key='id' readOnly>
    <uuid />
  </field>
  <field key='name' required>
    <string min={1} max={100} />
  </field>
  <field key='email' required>
    <string format='email' />
  </field>
  <field key='role' optional default='user'>
    <string values={['admin', 'user', 'guest']} />
  </field>
</object>
```

**Object Properties:**
- <a id="object-default">`default`</a> — Default value for the entire object
- <a id="object-example">`example`</a> — Example value
- <a id="object-description">`description`</a> — Object description

#### <a id="field">Field</a>

Defines a single field within an `<object>`.

**Properties:**
- <a id="field-key">`key`</a> — Field name (required)
- <a id="field-optional">`optional`</a> — Mark field as optional (not required)
- <a id="field-deprecated">`deprecated`</a> — Mark field as deprecated
- <a id="field-readonly">`readOnly`</a> — Field is read-only (responses only)
- <a id="field-writeonly">`writeOnly`</a> — Field is write-only (requests only)

```typescript jsx
<object>
  <field key='id' readOnly>
    <uuid />
  </field>
  <field key='password' writeOnly required>
    <string min={8} />
  </field>
  <field key='nickname' optional>
    <string />
  </field>
</object>
```

### Array
###### [🏠︎](#index) / [Schemas](#schemas) / [Collections](#collections) / [Array](#array) [↑](#object) [↓](#tuple)

Arrays represent collections of items of the same type. Use `<array>` to define lists of primitives or complex objects. Control the number of items with `minItems` and `maxItems`, and ensure uniqueness with `uniqueItems`.

```typescript jsx
<array minItems={1} maxItems={10} uniqueItems>
  <string />
</array>
```

**Array Properties:**
- <a id="array-default">`default`</a> — Default value
- <a id="array-example">`example`</a> — Example value
- <a id="array-min-max">`minItems/maxItems`</a> — Array size limits
- <a id="array-unique">`uniqueItems`</a> — All items must be unique
- <a id="array-description">`description`</a> — Array description

### Tuple
###### [🏠︎](#index) / [Schemas](#schemas) / [Collections](#collections) / Tuple [↑](#array)

A fixed-length array with specific types for each position.

```typescript jsx
<tuple>
  <string />
  <number />
  <boolean />
</tuple>
```

**Tuple Properties:**
- <a id="tuple-default">`default`</a> — Default value
- <a id="tuple-example">`example`</a> — Example value
- <a id="tuple-description">`description`</a> — Tuple description

## Hooks
###### [🏠︎](#index) / Hooks [↑](#schemas) [↓](#links)

Hooks provide access to request/response context and server information inside components.

### Runtime
###### [🏠︎](#index) / [Hooks](#hooks) / Runtime

#### useRequest
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useRequest

Returns the HTTP request object.

- **Returns:** `IncomingMessage`

```typescript
const request = useRequest()
```

#### useResponse
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useResponse

Returns the HTTP response object.

- **Returns:** `ServerResponse`

```typescript
const response = useResponse()
```

#### usePath
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / usePath

Returns the request path.

- **Returns:** `string`

```typescript
const path = usePath()
```

#### useHeaders
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useHeaders

Returns request headers.

- **Returns:** `Record<string, string>`

```typescript
const headers = useHeaders()
```

#### useCookies
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useCookies

Returns request cookies.

- **Returns:** `Record<string, string>`

```typescript
const cookies = useCookies()
```

#### useParams
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useParams

Returns URL path parameters.

- **Returns:** `Record<string, any>`

```typescript
const params = useParams()
```

#### useSearch
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useSearch

Returns query parameters.

- **Returns:** `Record<string, any>`

```typescript
const search = useSearch()
```

#### useBody
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useBody

Returns the request body.

- **Returns:** `any`

```typescript
const body = useBody()
```

#### useClientIp
###### [🏠︎](#index) / [Hooks](#hooks) / [Runtime](#runtime-hooks) / useClientIp

Returns the client IP address.

- **Returns:** `string`

```typescript
const ip = useClientIp()
```

### Shared
###### [🏠︎](#index) / [Hooks](#hooks) / Shared

#### useServer
###### [🏠︎](#index) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServer

Returns the server instance.

- **Returns:** `Server`

```typescript
const server = useServer()
```

#### useServerPort
###### [🏠︎](#index) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPort

Returns the server port.

- **Returns:** `number`

```typescript
const port = useServerPort()
```

#### useIsServerHttps
###### [🏠︎](#index) / [Hooks](#hooks) / [Shared](#shared-hooks) / useIsServerHttps

Returns whether the server uses HTTPS.

- **Returns:** `boolean`

```typescript
const isHttps = useIsServerHttps()
```

#### useComponentName
###### [🏠︎](#index) / [Hooks](#hooks) / [Shared](#shared-hooks) / useComponentName

Returns the current component name.

- **Returns:** `string`

```typescript
const name = useComponentName()
```

#### useServerPlugin
###### [🏠︎](#index) / [Hooks](#hooks) / [Shared](#shared-hooks) / useServerPlugin

Registers a server plugin.

- **Returns:** `void`

```typescript
useServerPlugin(async () => {
  // plugin logic
})
```

## Links

- [@innet/jsx](https://www.npmjs.com/package/@innet/jsx) — JSX component library
- [@innet/dom](https://www.npmjs.com/package/@innet/dom) — Isomorphic DOM framework
- [innet](https://www.npmjs.com/package/innet) — Core innet framework
- [innetjs](https://www.npmjs.com/package/innetjs) — CLI tool
- [OpenAPI 3.1 Spec](https://swagger.io/specification/)
- [CommonMark Markdown](https://spec.commonmark.org)

## Issues

If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-server/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-server)](https://github.com/d8corp/innet-server/issues)





## Server
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / Server [↓](#api)

The `<server>` element is the root component that starts an HTTP(S) server. Use it to configure the server port, SSL certificates, and register lifecycle event handlers. All routes and APIs must be placed inside the `<server>` element.

```typescript jsx
export default (
  <server port={3000}>
    <api />
  </server>
)
```

#### <a id="server-port">port</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / port

Sets the server port. By default, uses port `80` for HTTP and `443` for HTTPS.

- Type: `number`
- Default: `80` (HTTP) or `443` (HTTPS)
- Environment variable: `INNET_PORT`

```typescript jsx
<server port={3000} />
```

#### <a id="server-ssl">ssl</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / ssl

Configure HTTPS with SSL certificates.

- Type: `{ cert: string; key: string }`
- `cert` — Path to certificate file
- `key` — Path to private key file
- Environment variables: `INNET_SSL_CRT`, `INNET_SSL_KEY`

```typescript jsx
<server ssl={{ cert: './localhost.crt', key: './localhost.key' }} />
```

#### <a id="server-onstart">onStart</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / onStart

Callback function executed when the server starts.

- Type: `() => void`

```typescript jsx
import { httpOnStart } from '@innet/server'

export default <server onStart={httpOnStart} />
```

#### <a id="server-onrequest">onRequest</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / onRequest

Callback function executed for every request.

- Type: `(req: IncomingMessage, res: ServerResponse) => void`

```typescript jsx
<server onRequest={(req, res) => console.log(req.url)} />
```

#### <a id="server-onerror">onError</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / onError

Callback function executed when a request error occurs.

- Type: `(error: Error) => void`

```typescript jsx
<server onError={(error) => console.error(error)} />
```

#### <a id="server-onclose">onClose</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [Server](#server) / onClose

Callback function executed when the server closes.

- Type: `() => void`

```typescript jsx
<server onClose={() => console.log('Server closed')} />
```

### API
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / API [↑](#server) [↓](#endpoints)

The `<api>` element defines a REST API with OpenAPI documentation. Place it inside `<server>` to register your endpoints and configure OpenAPI settings. The API documentation is automatically generated from your component structure.

```typescript jsx
<server>
  <api
    title='My API'
    description='API description in **Markdown**'
    version='1.0.0'
    prefix='/api'
  >
    {/* endpoints here */}
  </api>
</server>
```

#### <a id="api-title">title</a>
###### [🏠︎](#index) / [Core Concepts](#core-concepts) / [API](#api) / title

The title of the API.

- Type: `string`
- Required: No
- Default: empty string

```typescript jsx
<api title='My API' />
```

#### <a id="api-description">description</a>

Description of the API. CommonMark (Markdown) syntax is supported.

- Type: `string`
- Required: No

```typescript jsx
<api description='**API** for user management' />
```

#### <a id="api-version">version</a>

The version of the OpenAPI document.

- Type: `string`
- Default: `INNET_API_VERSION` or `'0.0.0'`

```typescript jsx
<api version='1.0.0' />
```

#### <a id="api-prefix">prefix</a>

URL path prefix for all endpoints in this API.

- Type: `string`
- Default: `INNET_API_PREFIX` or empty
- Environment variable: `INNET_API_PREFIX`

```typescript jsx
<api prefix='/api' />
```

#### <a id="api-include">include</a>

Regular expression to include only matching URLs.

- Type: `RegExp`

```typescript jsx
<api include={/^\/(api|openapi)/} />
```

#### <a id="api-exclude">exclude</a>

Regular expression to exclude matching URLs.

- Type: `RegExp`

```typescript jsx
<api exclude={/^\/health/} />
```

## Request Handling
###### [🏠︎](#index) / Request Handling [↑](#core-concepts) [↓](#documentation)

### Return
###### [🏠︎](#index) / [Request Handling](#request-handling) / Return [↓](#preset)

The `<return>` element handles endpoint responses and works like a `return` statement in functions. Only one `<return>` can execute per scope. Use it to respond with success/error, set headers, cookies, and conditionally control the request flow.

**Success Response:**
```typescript jsx
<endpoint method='get' path='/users'>
  <return>
    <success>{{ users: [] }}</success>
  </return>
</endpoint>
```

**Error Response:**
```typescript jsx
<return>
  <error status='notFound' code='userNotFound'>
    {{ message: 'User not found' }}
  </error>
</return>
```

**Conditional Returns:**
```typescript jsx
<endpoint method='get' path='/users'>
  <env is='dev'>
    <return>
      <error status={404} />
    </return>
  </env>
  <return>
    <success>{{ users: [] }}</success>
  </return>
</endpoint>
```

### Preset
###### [🏠︎](#index) / [Request Handling](#request-handling) / Preset [↑](#return) [↓](#hooks)

The `<preset>` element configures request scope without interrupting execution. Use it to set up headers, cookies, and other metadata that apply to multiple endpoints within an API or globally.

```typescript jsx
<api prefix='/api'>
  <preset>
    <header
      key='Cache-Control'
      value='no-cache, no-store, must-revalidate'
    />
  </preset>
  {/* endpoints */}
</api>
```

### Hooks
###### [🏠︎](#index) / [Request Handling](#request-handling) / Hooks [↑](#preset)

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

## Documentation
###### [🏠︎](#index) / Documentation [↑](#request-handling) [↓](#api-elements)

### UI
###### [🏠︎](#index) / [Documentation](#documentation) / UI [↓](#dts)

Add interactive API documentation with the `<ui>` element.
This automatically generates a beautiful, interactive web interface where users can explore and test your API endpoints.
Choose from multiple documentation viewers like [Swagger UI](https://swagger.io/tools/swagger-ui/), [Scalar](https://scalar.com/), [RapiDoc](https://rapidocweb.com/), or [ReDoc](https://redocly.com/).

```typescript jsx
<api>
  <ui /> {/* Swagger UI by default */}
</api>
```

View documentation: http://localhost/ui

#### html
###### [🏠︎](#index) / [Documentation](#documentation) / [UI](#ui) / html
Custom HTML template for the documentation viewer. Use built-in presets or provide custom HTML.

- Type: `string`
- Default: Swagger UI HTML template

```tsx
import { uiPresets } from '@innet/server'

export default (
  <api>
    <ui html={uiPresets.scalar} />
  </api>
)
```

#### <a id="ui-params">params</a>
###### [🏠︎](#index) / [Documentation](#documentation) / [UI](#ui) / params

Additional parameters to pass to the documentation viewer. Parameters vary by viewer type.

- Type: `Record<string, any>`
- Default: empty object

```typescript jsx
<api>
  <ui
    html={uiPresets.scalar}
    params={{
      theme: 'moon',
      layout: 'classic'
    }}
  />
</api>
```

#### <a id="ui-path">path</a>
###### [🏠︎](#index) / [Documentation](#documentation) / [UI](#ui) / path

The URL path where the documentation UI will be served.

- Type: `string`
- Default: `INNET_UI_PATH` or `'/ui'`
- Environment variable: `INNET_UI_PATH`

```typescript jsx
<api>
  <ui path='/docs' />
</api>
```

### DTS
###### [🏠︎](#index) / [Documentation](#documentation) / DTS [↑](#ui)

Automatically generate TypeScript type definitions for your entire API. The `<dts>` element creates type definitions based on your endpoint schemas, giving you full IDE autocomplete and type safety when consuming your API.

```typescript jsx
<api>
  <dts
    path='src/api.d.ts'
    namespace='Api'
  />
</api>
```

Generated types are automatically available globally in the namespace (e.g., `Api.Endpoints`):

```typescript jsx
import { useParams } from '@innet/server'

export function DeleteTodo() {
  const { todoId } = useParams<Api.Endpoints['DELETE:/todos/{todoId}']['Params']>()
  
  return <success />
}
```

#### <a id="dts-path">path</a>

Output path for the generated TypeScript definitions file.

- Type: `string`
- Default: `'src/api.d.ts'`

```typescript jsx
<dts path='src/types.d.ts' />
```

#### <a id="dts-namespace">namespace</a>

Global namespace name for generated types.

- Type: `string`
- Default: `'Api'`

```typescript jsx
<dts namespace='API' />
```

## API Elements
###### [🏠︎](#index) / API Elements [↑](#documentation) [↓](#schema-types)

### Endpoint
###### [🏠︎](#index) / [API Elements](#api-elements) / Endpoint [↓](#param)

```typescript jsx
<endpoint
  method='post'
  path='/users'
  summary='Create user'
  description='Creates a new user in the system'
  operationId='createUser'
  deprecated={false}
  private={false}
>
  <param in='query' name='format' />
  <body>
    <object>
      <field key='name'><string required /></field>
      <field key='email'><string format='email' /></field>
    </object>
  </body>
  <response status={201}>
    <object>
      <field key='id'><uuid readOnly /></field>
      <field key='name'><string /></field>
    </object>
  </response>
  <return>
    <success status='created'>{{ id: 'uuid', name: 'John' }}</success>
  </return>
</endpoint>
```

### Param
###### [🏠︎](#index) / [API Elements](#api-elements) / Param [↑](#endpoint) [↓](#body)

Parameters allow you to specify query parameters, path parameters, headers, and cookies that your endpoint accepts. You define the parameter name, location, and validation schema. Parameters are automatically validated and documented in OpenAPI.

Define endpoint parameters (query, header, cookie, path):

```typescript jsx
<endpoint method='get' path='/users/{id}'>
  <param in='path' name='id' required>
    <uuid />
  </param>
  <param in='query' name='format' default='json'>
    <string values={['json', 'xml']} />
  </param>
  <param in='header' name='authorization'>
    <string />
  </param>
</endpoint>
```

#### <a id="param-in">in</a>

The location of the parameter.

- Type: `'query' | 'header' | 'path' | 'cookie'`
- Required: Yes

```typescript jsx
<param in='query' name='search' />
```

#### <a id="param-name">name</a>

The name of the parameter. Parameter names are case-sensitive.

- Type: `string`
- Required: Yes

```typescript jsx
<param in='query' name='search' />
```

#### <a id="param-description">description</a>

A brief description of the parameter.

- Type: `string`
- Required: No

```typescript jsx
<param in='query' name='search' description='Search query string' />
```

#### <a id="param-required">required</a>

Whether the parameter is mandatory.

- Type: `boolean`
- Default: `false` (except for path parameters, which are always required)

```typescript jsx
<param in='query' name='token' required />
```

#### <a id="param-deprecated">deprecated</a>

Mark the parameter as deprecated.

- Type: `boolean`
- Default: `false`

```typescript jsx
<param in='query' name='oldParam' deprecated />
```

### Body
###### [🏠︎](#index) / [API Elements](#api-elements) / Body [↑](#param) [↓](#response)

Define the structure and validation rules for the request body that your endpoint accepts. The body schema is automatically validated on every request and documented in OpenAPI. You can specify required/optional fields, data types, and validation constraints.

Define request body structure:

```typescript jsx
<body>
  <object>
    <field key='name' required>
      <string min={1} max={100} />
    </field>
    <field key='age' optional>
      <integer min={0} max={150} />
    </field>
    <field key='email'>
      <string format='email' />
    </field>
  </object>
</body>
```

Place `<body>` inside an `<endpoint>` to define what request data is expected. The body content should be a schema type (`<object>`, `<array>`, or a primitive type).

```typescript jsx
<endpoint method='post' path='/users'>
  <body>
    <object>
      <field key='name' required>
        <string />
      </field>
    </object>
  </body>
</endpoint>
```

### Response
###### [🏠︎](#index) / [API Elements](#api-elements) / Response [↑](#body)

Define what your endpoint will return to clients. Specify the response status code, data structure, and fields. You can define multiple response types for different HTTP status codes. All responses are automatically validated and documented in OpenAPI.

Define response structure and status:

```typescript jsx
<response status={200}>
  <object>
    <field key='data'>
      <object />
    </field>
  </object>
</response>

<response status={404}>
  <object>
    <field key='error'><string /></field>
  </object>
</response>
```

#### <a id="response-status">status</a>

The HTTP status code for this response.

- Type: `number | string`
- Examples: `200`, `404`, `'created'`, `'notFound'`, `'2XX'`, `'4XX'`
- Default: `'default'`

```typescript jsx
<response status={200}>
  <object />
</response>
```

#### <a id="response-type">type</a>

The media type of the response.

- Type: `string`
- Default: `'application/json'`
- Examples: `'application/json'`, `'text/html'`, `'text/plain'`

```typescript jsx
<response status={200} type='text/html'>
  Hello World
</response>
```

Place `<response>` inside an `<endpoint>` to define multiple possible responses:

```typescript jsx
<endpoint method='get' path='/users/{id}'>
  <response status={200}>
    <object>
      <field key='id'><uuid /></field>
      <field key='name'><string /></field>
    </object>
  </response>
  <response status={404}>
    <object>
      <field key='error'><string /></field>
    </object>
  </response>
</endpoint>
```

## Customization
###### [🏠︎](#index) / Customization [↑](#schema-types)

### Configuration
###### [🏠︎](#index) / [Customization](#customization) / Configuration [↓](#utils)

Configure your server with environment variables and props. Use these settings to customize port, API version, SSL certificates, and other server behavior for different environments (development, staging, production).

**Environment Variables:**
- `INNET_PORT` — Server port (default: `80` or `443`)
- `INNET_API_VERSION` — API version (default: `0.0.0`)
- `INNET_API_PREFIX` — API URL prefix (default: empty)
- `INNET_UI_PATH` — Swagger UI path (default: `/ui`)
- `INNET_SSL_KEY` / `INNET_SSL_CRT` — HTTPS certificates
- `NODE_ENV` — Environment (dev, prod, etc.)

**Server Setup:**
```typescript jsx
<server
  port={3000}
  ssl={{
    cert: './localhost.crt',
    key: './localhost.key'
  }}
  onStart={() => console.log('Server started')}
  onError={(error) => console.error(error)}
>
  {/* ... */}
</server>
```

## Middleware & Utils

Utility middleware elements for protecting your API, controlling access, and adding cross-cutting concerns. Use these to implement authentication, IP filtering, static file serving, redirects, proxying, and more. They work at different scopes (global server level or within specific APIs).

### Env
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Env [↓](#license)

Conditionally execute content based on environment variables.

```typescript jsx
<api>
  <env is='dev'>
    <ui />
  </env>
</api>
```

#### <a id="env-is">is</a>

Environment variable value to match.

- Type: `string | string[]`
- Default: matches `NODE_ENV`

```typescript jsx
<env is='production'>
  {/* content */}
</env>

<env is={['staging', 'production']}>
  {/* content */}
</env>
```

#### <a id="env-of">of</a>

Environment variable name to check.

- Type: `string`
- Default: `'NODE_ENV'`

```typescript jsx
<env of='APP_ENV' is='prod'>
  {/* content */}
</env>
```

### License
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / License [↑](#env) [↓](#contact)

Define the license for your API.

```typescript jsx
<api>
  <license
    name='Apache 2.0'
    identifier='Apache-2.0'
  />
</api>
```

#### <a id="license-name">name</a>

The license name.

- Type: `string`
- Required: Yes

#### <a id="license-identifier">identifier</a>

SPDX license expression (mutually exclusive with `url`).

- Type: `string`

#### <a id="license-url">url</a>

URL to the license document (mutually exclusive with `identifier`).

- Type: `string`

### Contact
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Contact [↑](#license) [↓](#host)

Define contact information for the API.

```typescript jsx
<api>
  <contact
    name='Support Team'
    email='support@example.com'
    url='https://support.example.com'
  />
</api>
```

#### <a id="contact-name">name</a>

Contact person or organization name.

- Type: `string`

#### <a id="contact-email">email</a>

Email address (must be valid email format).

- Type: `string`

#### <a id="contact-url">url</a>

URL pointing to contact information.

- Type: `string`

### Host
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Host [↑](#contact) [↓](#variable)

Define a server URL/host for the API. Useful for documenting multiple deployment environments.

```typescript jsx
<api>
  <host
    url='https://api.example.com'
    description='Production server'
  />
  <host
    url='https://staging-api.example.com'
    description='Staging server'
  />
</api>
```

#### <a id="host-url">url</a>

The server URL (supports Server Variables with `{varName}`).

- Type: `string`
- Required: Yes

#### <a id="host-description">description</a>

Description of the host/server.

- Type: `string`

### Variable
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Variable [↑](#host) [↓](#blacklist)

Define a variable used in host URLs for substitution.

```typescript jsx
<host url='https://{env}.example.com' description='Test servers'>
  <variable
    key='env'
    values={['dev', 'staging', 'prod']}
    value='staging'
    description='Environment name'
  />
</host>
```

#### <a id="variable-key">key</a>

Variable name (used in `{brackets}` in host URL).

- Type: `string`
- Required: Yes

#### <a id="variable-value">value</a>

Default value for the variable.

- Type: `string`

#### <a id="variable-values">values</a>

Enumeration of allowed values.

- Type: `string[]`

#### <a id="variable-description">description</a>

Variable description.

- Type: `string`

### Blacklist
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Blacklist [↑](#variable) [↓](#whitelist)

Block requests from specific IP addresses.

```typescript jsx
<api>
  <blacklist ip='192.168.1.1,10.0.0.1'>
    <error status='forbidden' />
  </blacklist>
</api>
```

#### <a id="blacklist-ip">ip</a>

Comma-separated list of IP addresses to block.

- Type: `string`
- Environment variable: `INNET_BLACKLIST_IP`

### Whitelist
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Whitelist [↑](#blacklist) [↓](#protection)

Allow requests only from specific IP addresses.

```typescript jsx
<api>
  <whitelist ip='192.168.1.1,10.0.0.1'>
    <error status='forbidden' />
  </whitelist>
</api>
```

#### <a id="whitelist-ip">ip</a>

Comma-separated list of IP addresses to allow.

- Type: `string`
- Environment variable: `INNET_WHITELIST_IP`

### Protection
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Protection [↑](#whitelist) [↓](#header)

Protect your API with a secret value that must be provided by clients.

```typescript jsx
<api>
  <protection value='secret123'>
    <error status='forbidden' />
  </protection>
</api>
```

#### <a id="protection-value">value</a>

Secret value that clients must provide.

- Type: `string`
- Environment variable: `PROTECTION`

#### <a id="protection-maxage">maxAge</a>

How long (in seconds) the protection is valid.

- Type: `number`
- Default: 31536000 (1 year)
- Environment variable: `INNET_PROTECTION_MAX_AGE`

#### <a id="protection-excludeip">excludeIp</a>

Comma-separated list of IPs to exempt from protection.

- Type: `string`
- Environment variable: `INNET_PROTECTED_IP`

#### <a id="protection-cookiekey">cookieKey</a>

Cookie name for storing protection state.

- Type: `string`
- Default: `'protection'`
- Environment variable: `INNET_PROTECTION_COOKIE_KEY`

#### <a id="protection-searchkey">searchKey</a>

Query parameter name for checking protection.

- Type: `string`
- Default: `'protection'`
- Environment variable: `INNET_PROTECTION_SEARCH_KEY`

### Header
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Header [↑](#protection) [↓](#cookie)

Set HTTP response headers.

```typescript jsx
<return>
  <header key='Cache-Control' value='no-cache' />
  <success />
</return>
```

#### <a id="header-key">key</a>

Header name.

- Type: `string`
- Required: Yes

#### <a id="header-value">value</a>

Header value.

- Type: `string`
- Required: Yes

### Cookie
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Cookie [↑](#header) [↓](#proxy)

Set HTTP cookies in the response.

```typescript jsx
<return>
  <cookie
    key='sessionId'
    value='abc123'
    httpOnly
    secure
    sameSite
    maxAge={86400}
  />
  <success />
</return>
```

#### <a id="cookie-key">key</a>

Cookie name.

- Type: `string`
- Required: Yes

#### <a id="cookie-value">value</a>

Cookie value. Leave empty to delete the cookie.

- Type: `string`

#### <a id="cookie-domain">domain</a>

Cookie domain.

- Type: `string`

#### <a id="cookie-encode">encode</a>

Encoding function for the cookie value.

- Type: `(value: string) => string`
- Default: `encodeURIComponent`

#### <a id="cookie-expires">expires</a>

Expiration date for the cookie.

- Type: `Date`

#### <a id="cookie-httponly">httpOnly</a>

Hide cookie from JavaScript (HTTP requests only).

- Type: `boolean`
- Default: `false`

#### <a id="cookie-maxage">maxAge</a>

Maximum age in seconds.

- Type: `number`

#### <a id="cookie-path">path</a>

Cookie path.

- Type: `string`
- Default: `'/'`

#### <a id="cookie-priority">priority</a>

Cookie priority level.

- Type: `'low' | 'medium' | 'high'`

#### <a id="cookie-samesite">sameSite</a>

SameSite policy for CSRF protection.

- Type: `boolean | 'lax' | 'strict' | 'none'`

#### <a id="cookie-secure">secure</a>

Only send cookie over HTTPS.

- Type: `boolean`
- Default: `false`

### Proxy
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Proxy [↑](#cookie) [↓](#redirect)

Forward requests to another server.

```typescript jsx
<endpoint method='get' path='/external'>
  <return>
    <proxy to='https://api.example.com' />
  </return>
</endpoint>
```

#### <a id="proxy-to">to</a>

Target URL to proxy to.

- Type: `string`
- Required: Yes

### Redirect
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Redirect [↑](#proxy) [↓](#cms)

Redirect requests to another URL.

```typescript jsx
<return>
  <redirect to='https://example.com' status={301} />
</return>
```

#### <a id="redirect-to">to</a>

Target URL for redirection.

- Type: `string`
- Required: Yes

#### <a id="redirect-status">status</a>

HTTP status code for redirect.

- Type: `number | string`
- Default: `301` (moved permanently)
- Examples: `301`, `302`, `'found'`, `'movedPermanently'`

### CMS
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / CMS [↑](#redirect) [↓](#file)

Serve static files from a directory.

```typescript jsx
<return>
  <cms dir='public' />
</return>
```

#### <a id="cms-dir">dir</a>

Root directory for file serving.

- Type: `string`
- Default: `INNET_CMS_DIR` or project root
- Environment variable: `INNET_CMS_DIR`

#### <a id="cms-prefix">prefix</a>

URL path prefix to strip from requests.

- Type: `string`
- Default: `INNET_CMS_PREFIX` or `'/'`
- Environment variable: `INNET_CMS_PREFIX`

### File
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / File [↑](#cms) [↓](#success)

Serve a single file.

```typescript jsx
<return>
  <file path='package.json' />
</return>
```

#### <a id="file-path">path</a>

Path to the file to serve.

- Type: `string`
- Required: Yes

### Success
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Success [↑](#file) [↓](#error)

Return a successful response with optional data.

```typescript jsx
<return>
  <success status='created'>{{ id: 1, name: 'John' }}</success>
</return>
```

#### <a id="success-status">status</a>

HTTP status code for the response.

- Type: `number | string`
- Default: `200` (ok) or `204` (noContent) if no body

#### <a id="success-contenttype">contentType</a>

Content-Type header for the response.

- Type: `string`
- Default: auto-detected from body

### Error
###### [🏠︎](#index) / [Middleware & Utils](#middleware--utils) / Error [↑](#success)

Return an error response.

```typescript jsx
<return>
  <error status='notFound' code='userNotFound'>
    {{ message: 'User not found' }}
  </error>
</return>
```

#### <a id="error-status">status</a>

HTTP status code for the error.

- Type: `number | string`
- Default: `520` (unknownError)

#### <a id="error-code">code</a>

Error code identifier.

- Type: `string`
- Default: `'undefined'`
