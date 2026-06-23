# Elements
###### [🏠︎](./README.md) / Elements [↑](./QUICK_START.md) [↓](./SCHEMAS.md)

<sub>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="./ELEMENTS.md#env">&lt;env&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#env-is">is</a></p>
          <p>╘  🏷️ <a href="./ELEMENTS.md#env-of">of</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#server">&lt;server&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#server-port">port</a></p>
          <p>├  🏷️ <a href="#server-ssl">ssl</a></p>
          <p>├  🏷️ <a href="#server-format-error">formatError</a></p>
          <p>├  🏷️ <a href="#server-onstart">onStart</a></p>
          <p>├  🏷️ <a href="#server-onrequest">onRequest</a></p>
          <p>├  🏷️ <a href="#server-onerror">onError</a></p>
          <p>├  🏷️ <a href="#server-onclose">onClose</a></p>
          <details>
            <summary>&nbsp;🧩 <a href="#blacklist">&lt;blacklist&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>╘  🏷️ <a href="#blacklist-ip">ip</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#whitelist">&lt;whitelist&gt;</a></summary>
            <blockquote>
              <p></p>           
              <p>╘  🏷️ <a href="#whitelist-ip">ip</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#protection">&lt;protection&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#protection-value">value</a></p>
              <p>├  🏷️ <a href="#protection-maxage">maxAge</a></p>
              <p>├  🏷️ <a href="#protection-excludeip">excludeIp</a></p>
              <p>├  🏷️ <a href="#protection-cookiekey">cookieKey</a></p>
              <p>╘  🏷️ <a href="#protection-searchkey">searchKey</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#preset">&lt;preset&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="#header">&lt;header&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#header-key">key</a></p>
                  <p>╘  🏷️ <a href="#header-value">value</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#cookie">&lt;cookie&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#cookie-key">key</a></p>
                  <p>├  🏷️ <a href="#cookie-value">value</a></p>
                  <p>├  🏷️ <a href="#cookie-domain">domain</a></p>
                  <p>├  🏷️ <a href="#cookie-encode">encode</a></p>
                  <p>├  🏷️ <a href="#cookie-expires">expires</a></p>
                  <p>├  🏷️ <a href="#cookie-httponly">httpOnly</a></p>
                  <p>├  🏷️ <a href="#cookie-maxage">maxAge</a></p>
                  <p>├  🏷️ <a href="#cookie-path">path</a></p>
                  <p>├  🏷️ <a href="#cookie-priority">priority</a></p>
                  <p>├  🏷️ <a href="#cookie-samesite">sameSite</a></p>
                  <p>╘  🏷️ <a href="#cookie-secure">secure</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#return">&lt;return&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="#success">&lt;success&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#success-status">status</a></p>
                  <p>╘  🏷️ <a href="#success-contenttype">contentType</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#error">&lt;error&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#error-status">status</a></p>
                  <p>╘  🏷️ <a href="#error-code">code</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#proxy">&lt;proxy&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>╘  🏷️ <a href="#proxy-to">to</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#redirect">&lt;redirect&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#redirect-to">to</a></p>
                  <p>╘  🏷️ <a href="#redirect-status">status</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#cms">&lt;cms&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#cms-dir">dir</a></p>
                  <p>╘  🏷️ <a href="#cms-prefix">prefix</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#file">&lt;file&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>╘  🏷️ <a href="#file-path">path</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#api">&lt;api&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#api-title">title</a></p>
              <p>├  🏷️ <a href="#api-description">description</a></p>
              <p>├  🏷️ <a href="#api-version">version</a></p>
              <p>├  🏷️ <a href="#api-prefix">prefix</a></p>
              <p>├  🏷️ <a href="#api-include">include</a></p>
              <p>├  🏷️ <a href="#api-exclude">exclude</a></p>
              <details>
                <summary>&nbsp;🧩 <a href="#host">&lt;host&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#host-url">url</a></p>
                  <p>├  🏷️ <a href="#host-description">description</a></p>
                  <details>
                    <summary>&nbsp;🧩 <a href="#variable">&lt;variable&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="#variable-key">key</a>*</p>
                      <p>├  🏷️ <a href="#variable-value">value</a></p>
                      <p>├  🏷️ <a href="#variable-values">values</a></p>
                      <p>╘  🏷️ <a href="#variable-description">description</a></p>
                    </blockquote>
                  </details>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#license">&lt;license&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#license-name">name</a>*</p>
                  <p>├  🏷️ <a href="#license-identifier">identifier</a></p>
                  <p>╘  🏷️ <a href="#license-url">url</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#contact">&lt;contact&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#contact-name">name</a></p>
                  <p>├  🏷️ <a href="#contact-email">email</a></p>
                  <p>╘  🏷️ <a href="#contact-url">url</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#ui">&lt;ui&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#ui-html">html</a></p>
                  <p>├  🏷️ <a href="#ui-params">params</a></p>
                  <p>╘  🏷️ <a href="#ui-path">path</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#dts">&lt;dts&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#dts-path">path</a></p>
                  <p>╘  🏷️ <a href="#dts-namespace">namespace</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#tag">&lt;tag&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#tag-name">name</a></p>
                  <p>╘  🏷️ <a href="#tag-group">group</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#endpoint">&lt;endpoint&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#endpoint-method">method</a></p>
                  <p>├  🏷️ <a href="#endpoint-path">path</a></p>
                  <p>├  🏷️ <a href="#endpoint-summary">summary</a></p>
                  <p>├  🏷️ <a href="#endpoint-description">description</a></p>
                  <p>├  🏷️ <a href="#endpoint-deprecated">deprecated</a></p>
                  <p>├  🏷️ <a href="#endpoint-private">private</a></p>
                  <p>├  🏷️ <a href="#endpoint-operationid">operationId</a></p>
                  <p>├  🧩 <a href="#body">&lt;body&gt;</a></p>
                  <details>
                    <summary>&nbsp;🧩 <a href="#param">&lt;param&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="#param-in">in</a></p>
                      <p>├  🏷️ <a href="#param-name">name</a></p>
                      <p>├  🏷️ <a href="#param-description">description</a></p>
                      <p>├  🏷️ <a href="#param-required">required</a></p>
                      <p>╘  🏷️ <a href="#param-deprecated">deprecated</a></p>
                    </blockquote>
                  </details>
                  <details>
                    <summary>&nbsp;🧩 <a href="#response">&lt;response&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="#response-status">status</a></p>
                      <p>╘  🏷️ <a href="#response-type">type</a></p>
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
</sub>

Elements are the declarative building blocks of your API server.
They define server configuration, request handling logic, endpoints, routing, middleware, and response behavior.
Use JSX syntax to compose these elements into a complete API structure with automatic OpenAPI documentation generation.

## Env
###### [🏠︎](./README.md) / [Elements](#elements) / Env [↓](#server)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="./ELEMENTS.md#env-is">is</a></p>
      <p>╘  🏷️ <a href="./ELEMENTS.md#env-of">of</a></p>
    </blockquote>
  </details>
</sub>

Conditionally execute content based on environment variables.

```typescript jsx
<api>
  <env is='dev'>
    <ui />
  </env>
</api>
```

#### <a id="env-is">is</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Env](#env) / is [↓](#env-of)

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Env](#env) / of [↑](#env-is)

Environment variable name to check.

- Type: `string`
- Default: `'NODE_ENV'`

```typescript jsx
<env of='APP_ENV' is='prod'>
  {/* content */}
</env>
```

## Server
###### [🏠︎](./README.md) / [Elements](#elements) / Server [↑](#env)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#server-port">port</a></p>
      <p>├  🏷️ <a href="#server-ssl">ssl</a></p>
      <p>├  🏷️ <a href="#server-format-error">formatError</a></p>
      <p>├  🏷️ <a href="#server-onstart">onStart</a></p>
      <p>├  🏷️ <a href="#server-onrequest">onRequest</a></p>
      <p>├  🏷️ <a href="#server-onerror">onError</a></p>
      <p>╘  🏷️ <a href="#server-onclose">onClose</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#blacklist">&lt;blacklist&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>╘  🏷️ <a href="#blacklist-ip">ip</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#whitelist">&lt;whitelist&gt;</a></summary>
        <blockquote>
          <p></p>           
          <p>╘  🏷️ <a href="#whitelist-ip">ip</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#protection">&lt;protection&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#protection-value">value</a></p>
          <p>├  🏷️ <a href="#protection-maxage">maxAge</a></p>
          <p>├  🏷️ <a href="#protection-excludeip">excludeIp</a></p>
          <p>├  🏷️ <a href="#protection-cookiekey">cookieKey</a></p>
          <p>╘  🏷️ <a href="#protection-searchkey">searchKey</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#preset">&lt;preset&gt;</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#header">&lt;header&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#header-key">key</a></p>
              <p>╘  🏷️ <a href="#header-value">value</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#cookie">&lt;cookie&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#cookie-key">key</a></p>
              <p>├  🏷️ <a href="#cookie-value">value</a></p>
              <p>├  🏷️ <a href="#cookie-domain">domain</a></p>
              <p>├  🏷️ <a href="#cookie-encode">encode</a></p>
              <p>├  🏷️ <a href="#cookie-expires">expires</a></p>
              <p>├  🏷️ <a href="#cookie-httponly">httpOnly</a></p>
              <p>├  🏷️ <a href="#cookie-maxage">maxAge</a></p>
              <p>├  🏷️ <a href="#cookie-path">path</a></p>
              <p>├  🏷️ <a href="#cookie-priority">priority</a></p>
              <p>├  🏷️ <a href="#cookie-samesite">sameSite</a></p>
              <p>╘  🏷️ <a href="#cookie-secure">secure</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#return">&lt;return&gt;</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#success">&lt;success&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#success-status">status</a></p>
              <p>╘  🏷️ <a href="#success-contenttype">contentType</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#error">&lt;error&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#error-status">status</a></p>
              <p>╘  🏷️ <a href="#error-code">code</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#proxy">&lt;proxy&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>╘  🏷️ <a href="#proxy-to">to</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#redirect">&lt;redirect&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#redirect-to">to</a></p>
              <p>╘  🏷️ <a href="#redirect-status">status</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#cms">&lt;cms&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#cms-dir">dir</a></p>
              <p>╘  🏷️ <a href="#cms-prefix">prefix</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#file">&lt;file&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>╘  🏷️ <a href="#file-path">path</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#api">&lt;api&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#api-title">title</a></p>
          <p>├  🏷️ <a href="#api-description">description</a></p>
          <p>├  🏷️ <a href="#api-version">version</a></p>
          <p>├  🏷️ <a href="#api-prefix">prefix</a></p>
          <p>├  🏷️ <a href="#api-include">include</a></p>
          <p>├  🏷️ <a href="#api-exclude">exclude</a></p>
          <details>
            <summary>&nbsp;🧩 <a href="#host">&lt;host&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#host-url">url</a></p>
              <p>├  🏷️ <a href="#host-description">description</a></p>
              <details>
                <summary>&nbsp;🧩 <a href="#variable">&lt;variable&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#variable-key">key</a>*</p>
                  <p>├  🏷️ <a href="#variable-value">value</a></p>
                  <p>├  🏷️ <a href="#variable-values">values</a></p>
                  <p>╘  🏷️ <a href="#variable-description">description</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#license">&lt;license&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#license-name">name</a>*</p>
              <p>├  🏷️ <a href="#license-identifier">identifier</a></p>
              <p>╘  🏷️ <a href="#license-url">url</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#contact">&lt;contact&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#contact-name">name</a></p>
              <p>├  🏷️ <a href="#contact-email">email</a></p>
              <p>╘  🏷️ <a href="#contact-url">url</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#ui">&lt;ui&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#ui-html">html</a></p>
              <p>├  🏷️ <a href="#ui-params">params</a></p>
              <p>╘  🏷️ <a href="#ui-path">path</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#dts">&lt;dts&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#dts-path">path</a></p>
              <p>╘  🏷️ <a href="#dts-namespace">namespace</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#tag">&lt;tag&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#tag-name">name</a></p>
              <p>╘  🏷️ <a href="#tag-group">group</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#endpoint">&lt;endpoint&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#endpoint-method">method</a></p>
              <p>├  🏷️ <a href="#endpoint-path">path</a></p>
              <p>├  🏷️ <a href="#endpoint-summary">summary</a></p>
              <p>├  🏷️ <a href="#endpoint-description">description</a></p>
              <p>├  🏷️ <a href="#endpoint-deprecated">deprecated</a></p>
              <p>├  🏷️ <a href="#endpoint-private">private</a></p>
              <p>├  🏷️ <a href="#endpoint-operationid">operationId</a></p>
              <p>├  🧩 <a href="#body">&lt;body&gt;</a></p>
              <details>
                <summary>&nbsp;🧩 <a href="#param">&lt;param&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#param-in">in</a></p>
                  <p>├  🏷️ <a href="#param-name">name</a></p>
                  <p>├  🏷️ <a href="#param-description">description</a></p>
                  <p>├  🏷️ <a href="#param-required">required</a></p>
                  <p>╘  🏷️ <a href="#param-deprecated">deprecated</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="#response">&lt;response&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#response-status">status</a></p>
                  <p>╘  🏷️ <a href="#response-type">type</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

The `<server>` is the root element that starts an HTTP(S) server.
Use it to configure the server port, SSL certificates, and register lifecycle event handlers.
All routes and APIs must be placed inside the `<server>` element.

```typescript jsx
export default (
  <server port={3000}>
    <api />
  </server>
)
```

#### <a id="server-port">port</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / port [↓](#server-ssl)

Sets the server port. By default, uses port `80` for HTTP and `443` for HTTPS.

- Type: `number`
- Default: `80` (HTTP) or `443` (HTTPS)
- Environment variable: `INNET_PORT`

```typescript jsx
<server port={3000} />
```

#### <a id="server-ssl">ssl</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / ssl [↑](#server-port) [↓](#server-format-error)

Configure HTTPS with SSL certificates.

- Type: `{ cert: string; key: string }`
- `cert` — Path to certificate file
- `key` — Path to private key file
- Environment variables: `INNET_SSL_CRT`, `INNET_SSL_KEY`

```typescript jsx
<server ssl={{ cert: './localhost.crt', key: './localhost.key' }} />
```

#### <a id="server-format-error">formatError</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / formatError [↑](#server-ssl) [↓](#server-onstart)

Custom function to format error responses.
Allows you to customize the JSON structure returned to clients when an error occurs.

- Type: `{ error: string; data: any }`
- `error` — Unique error code
- `data` — Error content

```typescript jsx
<server formatError={({ error, data }) => JSON.stringify({ err: error, data })} />
```

#### <a id="server-onstart">onStart</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / onStart [↑](#format-error) [↓](#server-onrequest)

Callback function executed when the server starts.

- Type: `() => void`

```typescript jsx
import { httpOnStart } from '@innet/server'

export default <server onStart={httpOnStart} />
```

#### <a id="server-onrequest">onRequest</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / onRequest [↑](#server-onstart) [↓](#server-onerror)

Callback function executed for every request.

- Type: `(req: IncomingMessage, res: ServerResponse) => void`

```typescript jsx
<server onRequest={(req, res) => console.log(req.url)} />
```

#### <a id="server-onerror">onError</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / onError [↑](#server-onrequest) [↓](#server-onclose)

Callback function executed when a request error occurs.

- Type: `(error: Error) => void`

```typescript jsx
<server onError={(error) => console.error(error)} />
```

#### <a id="server-onclose">onClose</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / onClose [↑](#server-onerror)

Callback function executed when the server closes.

- Type: `() => void`

```typescript jsx
<server onClose={() => console.log('Server closed')} />
```

## Blacklist
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / Blacklist [↓](#whitelist)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>╘  🏷️ <a href="#blacklist-ip">ip</a></p>
    </blockquote>
  </details>
</sub>

Block requests from specific IP addresses.

```typescript jsx
<api>
  <blacklist ip='192.168.1.1,10.0.0.1'>
    <error status='forbidden' />
  </blacklist>
</api>
```

#### <a id="blacklist-ip">ip</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Blacklist](#blacklist) / ip

Comma-separated list of IP addresses to block.

- Type: `string`
- Environment variable: `INNET_BLACKLIST_IP`

## Whitelist
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / Whitelist [↑](#blacklist) [↓](#protection)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>╘  🏷️ <a href="#whitelist-ip">ip</a></p>
    </blockquote>
  </details>
</sub>

Allow requests only from specific IP addresses.

```typescript jsx
<api>
  <whitelist ip='192.168.1.1,10.0.0.1'>
    <error status='forbidden' />
  </whitelist>
</api>
```

#### <a id="whitelist-ip">ip</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Whitelist](#whitelist) / ip

Comma-separated list of IP addresses to allow.

- Type: `string`
- Environment variable: `INNET_WHITELIST_IP`

## Protection
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / Protection [↑](#whitelist) [↓](#preset)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#protection-value">value</a></p>
      <p>├  🏷️ <a href="#protection-maxage">maxAge</a></p>
      <p>├  🏷️ <a href="#protection-excludeip">excludeIp</a></p>
      <p>├  🏷️ <a href="#protection-cookiekey">cookieKey</a></p>
      <p>╘  🏷️ <a href="#protection-searchkey">searchKey</a></p>
    </blockquote>
  </details>
</sub>

Protect your API with a secret value that must be provided by clients.

```typescript jsx
<api>
  <protection value='secret123'>
    <error status='forbidden' />
  </protection>
</api>
```

#### <a id="protection-value">value</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Protection](#protection) / value [↓](#protection-maxage)

Secret value that clients must provide.

- Type: `string`
- Environment variable: `PROTECTION`

#### <a id="protection-maxage">maxAge</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Protection](#protection) / maxAge [↑](#protection-value) [↓](#protection-excludeip)

How long (in seconds) the protection is valid.

- Type: `number`
- Default: 31536000 (1 year)
- Environment variable: `INNET_PROTECTION_MAX_AGE`

#### <a id="protection-excludeip">excludeIp</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Protection](#protection) / excludeIp [↑](#protection-maxage) [↓](#protection-cookiekey)

Comma-separated list of IPs to exempt from protection.

- Type: `string`
- Environment variable: `INNET_PROTECTED_IP`

#### <a id="protection-cookiekey">cookieKey</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Protection](#protection) / cookieKey [↑](#protection-excludeip) [↓](#protection-searchkey)

Cookie name for storing protection state.

- Type: `string`
- Default: `'protection'`
- Environment variable: `INNET_PROTECTION_COOKIE_KEY`

#### <a id="protection-searchkey">searchKey</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Protection](#protection) / searchKey [↑](#protection-cookiekey)

Query parameter name for checking protection.

- Type: `string`
- Default: `'protection'`
- Environment variable: `INNET_PROTECTION_SEARCH_KEY`

## Preset
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / Preset [↑](#protection) [↓](#return)

<sub>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#header">&lt;header&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#header-key">key</a></p>
          <p>╘  🏷️ <a href="#header-value">value</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#cookie">&lt;cookie&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#cookie-key">key</a></p>
          <p>├  🏷️ <a href="#cookie-value">value</a></p>
          <p>├  🏷️ <a href="#cookie-domain">domain</a></p>
          <p>├  🏷️ <a href="#cookie-encode">encode</a></p>
          <p>├  🏷️ <a href="#cookie-expires">expires</a></p>
          <p>├  🏷️ <a href="#cookie-httponly">httpOnly</a></p>
          <p>├  🏷️ <a href="#cookie-maxage">maxAge</a></p>
          <p>├  🏷️ <a href="#cookie-path">path</a></p>
          <p>├  🏷️ <a href="#cookie-priority">priority</a></p>
          <p>├  🏷️ <a href="#cookie-samesite">sameSite</a></p>
          <p>╘  🏷️ <a href="#cookie-secure">secure</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

The `<preset>` element configures request scope without interrupting execution.
Use it to set up headers, cookies, and other metadata that apply to multiple endpoints within an API or globally.

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

## Header
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / Header [↓](#cookie)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#header-key">key</a></p>
      <p>╘  🏷️ <a href="#header-value">value</a></p>
    </blockquote>
  </details>
</sub>

Configure HTTP response headers that will be sent to clients.
Use inside `<preset>` to apply headers to multiple endpoints, or inside `<return>` for specific responses.

```typescript jsx
<server>
  <preset>
    <header key='Cache-Control' value='no-cache' />
    {/* For any response */}
  </preset>
  <api>
    <preset>
      <header key='Cache-Control' value='no-cache' />
      {/* For api response */}
    </preset>
    <endpoint method='get' path='/todos'>
      <return>
        <header key='Cache-Control' value='private, no-store' />
        {/* For todos response */}
        <success>{[]}</success>
      </return>
    </endpoint>
  </api>
</server>
```

#### <a id="header-key">key</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Header](#header) / key [↓](#header-value)

Header name.

- Type: `string`
- Required: Yes

#### <a id="header-value">value</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Header](#header) / value [↑](#header-key)

Header value.

- Type: `string`
- Required: Yes

## Cookie
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / Cookie [↑](#header)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#cookie-key">key</a></p>
      <p>├  🏷️ <a href="#cookie-value">value</a></p>
      <p>├  🏷️ <a href="#cookie-domain">domain</a></p>
      <p>├  🏷️ <a href="#cookie-encode">encode</a></p>
      <p>├  🏷️ <a href="#cookie-expires">expires</a></p>
      <p>├  🏷️ <a href="#cookie-httponly">httpOnly</a></p>
      <p>├  🏷️ <a href="#cookie-maxage">maxAge</a></p>
      <p>├  🏷️ <a href="#cookie-path">path</a></p>
      <p>├  🏷️ <a href="#cookie-priority">priority</a></p>
      <p>├  🏷️ <a href="#cookie-samesite">sameSite</a></p>
      <p>╘  🏷️ <a href="#cookie-secure">secure</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / key [↓](#cookie-value)

Cookie name.

- Type: `string`
- Required: Yes

#### <a id="cookie-value">value</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / value [↑](#cookie-key) [↓](#cookie-domain)

Cookie value. Leave empty to delete the cookie.

- Type: `string`

#### <a id="cookie-domain">domain</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / domain [↑](#cookie-value) [↓](#cookie-encode)

Cookie domain.

- Type: `string`

#### <a id="cookie-encode">encode</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / encode [↑](#cookie-domain) [↓](#cookie-expires)

Encoding function for the cookie value.

- Type: `(value: string) => string`
- Default: `encodeURIComponent`

#### <a id="cookie-expires">expires</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / expires [↑](#cookie-encode) [↓](#cookie-httponly)

Expiration date for the cookie.

- Type: `Date`

#### <a id="cookie-httponly">httpOnly</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / httpOnly [↑](#cookie-expires) [↓](#cookie-maxage)

Hide cookie from JavaScript (HTTP requests only).

- Type: `boolean`
- Default: `false`

#### <a id="cookie-maxage">maxAge</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / maxAge [↑](#cookie-httponly) [↓](#cookie-path)

Maximum age in seconds.

- Type: `number`

#### <a id="cookie-path">path</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / path [↑](#cookie-maxage) [↓](#cookie-priority)

Cookie path.

- Type: `string`
- Default: `'/'`

#### <a id="cookie-priority">priority</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / priority [↑](#cookie-path) [↓](#cookie-samesite)

Cookie priority level.

- Type: `'low' | 'medium' | 'high'`

#### <a id="cookie-samesite">sameSite</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / sameSite [↑](#cookie-priority) [↓](#cookie-secure)

SameSite policy for CSRF protection.

- Type: `boolean | 'lax' | 'strict' | 'none'`

#### <a id="cookie-secure">secure</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Preset](#preset) / [Cookie](#cookie) / secure [↑](#cookie-samesite)

Only send cookie over HTTPS.

- Type: `boolean`
- Default: `false`

## Return
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / Return [↑](#preset) [↓](#api)

<sub>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#success">&lt;success&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#success-status">status</a></p>
          <p>╘  🏷️ <a href="#success-contenttype">contentType</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#error">&lt;error&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#error-status">status</a></p>
          <p>╘  🏷️ <a href="#error-code">code</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#proxy">&lt;proxy&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>╘  🏷️ <a href="#proxy-to">to</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#redirect">&lt;redirect&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#redirect-to">to</a></p>
          <p>╘  🏷️ <a href="#redirect-status">status</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#cms">&lt;cms&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#cms-dir">dir</a></p>
          <p>╘  🏷️ <a href="#cms-prefix">prefix</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#file">&lt;file&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>╘  🏷️ <a href="#file-path">path</a></p>
        </blockquote>
      </details>
    </blockquote>
</details>
</sub>

The `<return>` element handles endpoint responses and works like a `return` statement in functions.
Only one `<return>` can execute per scope.
Use it to respond with success/error, set headers, cookies, and conditionally control the request flow.

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

## Success
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / Success [↓](#error)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#success-status">status</a></p>
      <p>╘  🏷️ <a href="#success-contenttype">contentType</a></p>
    </blockquote>
  </details>
</sub>

Return a successful response with optional data.

```typescript jsx
<return>
  <success status='created'>
    {{ id: 1, name: 'John' }}
  </success>
</return>
```

#### <a id="success-status">status</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Success](#success) / status [↓](#success-contenttype)

HTTP status code for the response.

- Type: `number | string`
- Default: `200` (ok) or `204` (noContent) if no body

#### <a id="success-contenttype">contentType</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Success](#success) / contentType [↑](#success-status)

Content-Type header for the response.

- Type: `string`
- Default: auto-detected from body

## Error
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / Error [↑](#success) [↓](#proxy)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#error-status">status</a></p>
      <p>╘  🏷️ <a href="#error-code">code</a></p>
    </blockquote>
  </details>
</sub>

Return an error response.

```typescript jsx
<return>
  <error status='notFound' code='userNotFound'>
    {{ message: 'User not found' }}
  </error>
</return>
```

#### <a id="error-status">status</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Error](#error) / status [↓](#error-code)

HTTP status code for the error.

- Type: `number | string`
- Default: `520` (unknownError)

#### <a id="error-code">code</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Error](#error) / code [↑](#error-status)

Error code identifier.

- Type: `string`
- Default: `'undefined'`

## Proxy
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / Proxy [↑](#error) [↓](#redirect)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>╘  🏷️ <a href="#proxy-to">to</a></p>
    </blockquote>
  </details>
</sub>

Forward requests to another server.

```typescript jsx
<endpoint method='get' path='/external'>
  <return>
    <proxy to='https://api.example.com' />
  </return>
</endpoint>
```

#### <a id="proxy-to">to</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Proxy](#proxy) / to

Target URL to proxy to.

- Type: `string`
- Required: Yes

## Redirect
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / Redirect [↑](#proxy) [↓](#cms)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#redirect-to">to</a></p>
      <p>╘  🏷️ <a href="#redirect-status">status</a></p>
    </blockquote>
  </details>
</sub>

Redirect requests to another URL.

```typescript jsx
<return>
  <redirect to='https://example.com' status={301} />
</return>
```

#### <a id="redirect-to">to</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Redirect](#redirect) / to [↓](#redirect-status)

Target URL for redirection.

- Type: `string`
- Required: Yes

#### <a id="redirect-status">status</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [Redirect](#redirect) / status [↑](#redirect-to)

HTTP status code for redirect.

- Type: `number | string`
- Default: `301` (moved permanently)
- Examples: `301`, `302`, `'found'`, `'movedPermanently'

## CMS
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / CMS [↑](#redirect) [↓](#file)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#cms-dir">dir</a></p>
      <p>╘  🏷️ <a href="#cms-prefix">prefix</a></p>
    </blockquote>
  </details>
</sub>

Serve static files from a directory.

```typescript jsx
<return>
  <cms dir='public' />
</return>
```

#### <a id="cms-dir">dir</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [CMS](#cms) / dir [↓](#cms-prefix)

Root directory for file serving.

- Type: `string`
- Default: `INNET_CMS_DIR` or project root
- Environment variable: `INNET_CMS_DIR`

#### <a id="cms-prefix">prefix</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [CMS](#cms) / prefix [↑](#cms-dir)

URL path prefix to strip from requests.

- Type: `string`
- Default: `INNET_CMS_PREFIX` or `'/'`
- Environment variable: `INNET_CMS_PREFIX`

## File
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / File [↑](#cms)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>╘  🏷️ <a href="#file-path">path</a></p>
    </blockquote>
  </details>
</sub>

Serve a single file.

```typescript jsx
<return>
  <file path='package.json' />
</return>
```

#### <a id="file-path">path</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [Return](#return) / [File](#file) / path

Path to the file to serve.

- Type: `string`
- Required: Yes

## API
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / API [↑](#return)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#api-title">title</a></p>
      <p>├  🏷️ <a href="#api-description">description</a></p>
      <p>├  🏷️ <a href="#api-version">version</a></p>
      <p>├  🏷️ <a href="#api-prefix">prefix</a></p>
      <p>├  🏷️ <a href="#api-include">include</a></p>
      <p>╘  🏷️ <a href="#api-exclude">exclude</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#host">&lt;host&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#host-url">url</a></p>
          <p>├  🏷️ <a href="#host-description">description</a></p>
          <details>
            <summary>&nbsp;🧩 <a href="#variable">&lt;variable&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#variable-key">key</a>*</p>
              <p>├  🏷️ <a href="#variable-value">value</a></p>
              <p>├  🏷️ <a href="#variable-values">values</a></p>
              <p>╘  🏷️ <a href="#variable-description">description</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#license">&lt;license&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#license-name">name</a>*</p>
          <p>├  🏷️ <a href="#license-identifier">identifier</a></p>
          <p>╘  🏷️ <a href="#license-url">url</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#contact">&lt;contact&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#contact-name">name</a></p>
          <p>├  🏷️ <a href="#contact-email">email</a></p>
          <p>╘  🏷️ <a href="#contact-url">url</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#ui">&lt;ui&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#ui-html">html</a></p>
          <p>├  🏷️ <a href="#ui-params">params</a></p>
          <p>╘  🏷️ <a href="#ui-path">path</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#dts">&lt;dts&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#dts-path">path</a></p>
          <p>╘  🏷️ <a href="#dts-namespace">namespace</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#tag">&lt;tag&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#tag-name">name</a></p>
          <p>╘  🏷️ <a href="#tag-group">group</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#endpoint">&lt;endpoint&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#endpoint-method">method</a></p>
          <p>├  🏷️ <a href="#endpoint-path">path</a></p>
          <p>├  🏷️ <a href="#endpoint-summary">summary</a></p>
          <p>├  🏷️ <a href="#endpoint-description">description</a></p>
          <p>├  🏷️ <a href="#endpoint-deprecated">deprecated</a></p>
          <p>├  🏷️ <a href="#endpoint-private">private</a></p>
          <p>├  🏷️ <a href="#endpoint-operationid">operationId</a></p>
          <p>├  🧩 <a href="#body">&lt;body&gt;</a></p>
          <details>
            <summary>&nbsp;🧩 <a href="#param">&lt;param&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#param-in">in</a></p>
              <p>├  🏷️ <a href="#param-name">name</a></p>
              <p>├  🏷️ <a href="#param-description">description</a></p>
              <p>├  🏷️ <a href="#param-required">required</a></p>
              <p>╘  🏷️ <a href="#param-deprecated">deprecated</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#response">&lt;response&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#response-status">status</a></p>
              <p>╘  🏷️ <a href="#response-type">type</a></p>
            </blockquote>
          </details>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / title [↓](#api-description)

The title of the API.

- Type: `string`
- Required: No
- Default: empty string

```typescript jsx
<api title='My API' />
```

#### <a id="api-description">description</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / description [↑](#api-title) [↓](#api-version)

Description of the API. CommonMark (Markdown) syntax is supported.

- Type: `string`
- Required: No

```typescript jsx
<api description='**API** for user management' />
```

#### <a id="api-version">version</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / version [↑](#api-description) [↓](#api-prefix)

The version of the OpenAPI document.

- Type: `string`
- Default: `INNET_API_VERSION` or `'0.0.0'`

```typescript jsx
<api version='1.0.0' />
```

#### <a id="api-prefix">prefix</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / prefix [↑](#api-version) [↓](#api-include)

URL path prefix for all endpoints in this API.

- Type: `string`
- Default: `INNET_API_PREFIX` or empty
- Environment variable: `INNET_API_PREFIX`

```typescript jsx
<api prefix='/api' />
```

#### <a id="api-include">include</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / include [↑](#api-prefix) [↓](#api-exclude)

Regular expression to include only matching URLs.

- Type: `RegExp`

```typescript jsx
<api include={/^\/(api|openapi)/} />
```

#### <a id="api-exclude">exclude</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / exclude [↑](#api-include)

Regular expression to exclude matching URLs.

- Type: `RegExp`

```typescript jsx
<api exclude={/^\/health/} />
```

## Host
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / Host [↓](#license)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#host-url">url</a></p>
      <p>╘  🏷️ <a href="#host-description">description</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="#variable">&lt;variable&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#variable-key">key</a>*</p>
          <p>├  🏷️ <a href="#variable-value">value</a></p>
          <p>├  🏷️ <a href="#variable-values">values</a></p>
          <p>╘  🏷️ <a href="#variable-description">description</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / url [↓](#host-description)

The server URL (supports Server Variables with `{varName}`).

- Type: `string`
- Required: Yes

#### <a id="host-description">description</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / description [↑](#host-url)

Description of the host/server.

- Type: `string`

## Variable
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / Variable

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#variable-key">key</a>*</p>
      <p>├  🏷️ <a href="#variable-value">value</a></p>
      <p>├  🏷️ <a href="#variable-values">values</a></p>
      <p>╘  🏷️ <a href="#variable-description">description</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / [Variable](#variable) / key [↓](#variable-value)

Variable name (used in `{brackets}` in host URL).

- Type: `string`
- Required: Yes

#### <a id="variable-value">value</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / [Variable](#variable) / value [↑](#variable-key) [↓](#variable-values)

Default value for the variable.

- Type: `string`

#### <a id="variable-values">values</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / [Variable](#variable) / values [↑](#variable-value) [↓](#variable-description)

Enumeration of allowed values.

- Type: `string[]`

#### <a id="variable-description">description</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Host](#host) / [Variable](#variable) / description [↑](#variable-values)

Variable description.

- Type: `string`

## License
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / License [↑](#host) [↓](#contact)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#license-name">name</a>*</p>
      <p>├  🏷️ <a href="#license-identifier">identifier</a></p>
      <p>╘  🏷️ <a href="#license-url">url</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [License](#license) / name [↓](#license-identifier)

The license name.

- Type: `string`
- Required: Yes

#### <a id="license-identifier">identifier</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [License](#license) / identifier [↑](#license-name) [↓](#license-url)

SPDX license expression (mutually exclusive with `url`).

- Type: `string`

#### <a id="license-url">url</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [License](#license) / url [↑](#license-identifier)

URL to the license document (mutually exclusive with `identifier`).

- Type: `string`

## Contact
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / Contact [↑](#license) [↓](#ui)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#contact-name">name</a></p>
      <p>├  🏷️ <a href="#contact-email">email</a></p>
      <p>╘  🏷️ <a href="#contact-url">url</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Contact](#contact) / name [↓](#contact-email)

Contact person or organization name.

- Type: `string`

#### <a id="contact-email">email</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Contact](#contact) / email [↑](#contact-name) [↓](#contact-url)

Email address (must be valid email format).

- Type: `string`

#### <a id="contact-url">url</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Contact](#contact) / url [↑](#contact-email)

URL pointing to contact information.

- Type: `string`

## UI
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / UI [↑](#contact) [↓](#dts)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#ui-html">html</a></p>
      <p>├  🏷️ <a href="#ui-params">params</a></p>
      <p>╘  🏷️ <a href="#ui-path">path</a></p>
    </blockquote>
  </details>
</sub>

Add interactive API documentation with the `<ui>` element.
This automatically generates a beautiful, interactive web interface where users can explore and test your API endpoints.
Choose from multiple documentation viewers like [Swagger UI](https://swagger.io/tools/swagger-ui/), [Scalar](https://scalar.com/), [RapiDoc](https://rapidocweb.com/), or [ReDoc](https://redocly.com/).

```typescript jsx
<api>
  <ui /> {/* Swagger UI by default */}
</api>
```

View documentation: http://localhost/ui

#### <a id="ui-html">html</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [UI](#ui) / html [↓](#ui-params)

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [UI](#ui) / params [↑](#ui-html)

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
###### [🏠︎](./README.md) / [Documentation](#documentation) / [UI](#ui) / path

The URL path where the documentation UI will be served.

- Type: `string`
- Default: `INNET_UI_PATH` or `'/ui'`
- Environment variable: `INNET_UI_PATH`

```typescript jsx
<api>
  <ui path='/docs' />
</api>
```

## DTS
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / DTS [↑](#ui) [↓](#tag)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#dts-path">path</a></p>
      <p>╘  🏷️ <a href="#dts-namespace">namespace</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [dts](#dts) / path [↓](#dts-namespace)

Output path for the generated TypeScript definitions file.

- Type: `string`
- Default: `'src/api.d.ts'`

```typescript jsx
<dts path='src/types.d.ts' />
```

#### <a id="dts-namespace">namespace</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [dts](#dts) / namespace [↑](#dts-path)

Global namespace name for generated types.

- Type: `string`
- Default: `'Api'`

```typescript jsx
<dts namespace='API' />
```

## Tag
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / Tag [↑](#dts) [↓](#endpoint)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#tag-name">name</a>*</p>
      <p>╘  🏷️ <a href="#tag-group">group</a></p>
    </blockquote>
  </details>
</sub>

Organize and categorize your API endpoints using tags.
Tags allow you to group related endpoints together in the API documentation, making it easier for users to navigate and understand your API structure.

```typescript jsx
<api>
  <tag name='Users' group='Management'>
    <endpoint method='get' path='/users'>
      {/* ... */}
    </endpoint>
  </tag>
</api>
```

#### <a id="tag-name">name</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Tag](#tag) / name [↓](#tag-group)

The name of the tag used to group endpoints.

- Type: `string`
- Required: Yes

```typescript jsx
<tag name='Users'>{/* ... */}</tag>
```

#### <a id="tag-group">group</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Tag](#tag) / group [↑](#tag-name)

Optional group name for organizing multiple tags into logical sections in the documentation.

- Type: `string`

```typescript jsx
<tag name='Users' group='Management'>
  {/* ... */}
</tag>
```

## Endpoint
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / Endpoint [↑](#tag)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#endpoint-method">method</a></p>
      <p>├  🏷️ <a href="#endpoint-path">path</a></p>
      <p>├  🏷️ <a href="#endpoint-summary">summary</a></p>
      <p>├  🏷️ <a href="#endpoint-description">description</a></p>
      <p>├  🏷️ <a href="#endpoint-deprecated">deprecated</a></p>
      <p>├  🏷️ <a href="#endpoint-private">private</a></p>
      <p>├  🏷️ <a href="#endpoint-operationid">operationId</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🧩 Elements</summary>
    <blockquote>
      <p></p>
      <p>├  🧩 <a href="#body">&lt;body&gt;</a></p>
      <details>
        <summary>&nbsp;🧩 <a href="#param">&lt;param&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#param-in">in</a></p>
          <p>├  🏷️ <a href="#param-name">name</a></p>
          <p>├  🏷️ <a href="#param-description">description</a></p>
          <p>├  🏷️ <a href="#param-required">required</a></p>
          <p>╘  🏷️ <a href="#param-deprecated">deprecated</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="#response">&lt;response&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#response-status">status</a></p>
          <p>╘  🏷️ <a href="#response-type">type</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

Define individual API endpoints with their HTTP method, path, parameters, request body, and responses.
The `<endpoint>` element is the core building block of your API, combining contract definition with implementation logic.

```typescript jsx
<endpoint operationId='getTodos' method='get' path='/todos' summary='Get list of todos'>
  <param in='query' name='done'><boolean /></param>
  <param in='query' name='page'><number default={1} /></param>
  <param in='query' name='pageSize'><number default={12} /></param>
  <response description='Response Description'>
    <object>
      page: <number default={1} />
      pageSize: <number example={10} />
      count: <number default={11} />
      todos: 
        <array>
          <object>
            id: <uuid />
            created: <date />
            changed: <date nullable />
            title: <string example='Check @innet/dom librarry' />
            done: <boolean />
          </object>
        </array>
    </object>
  </response>
  <return>
    <success>{{ page: 1, pageSize: 10, count: 0, todos: [] }}</success>
  </return>
</endpoint>
```

#### <a id="endpoint-method">method</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / method [↓](#endpoint-path)

HTTP method for the endpoint.

- Type: `'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options'`
- Required: Yes

```typescript jsx
<endpoint method='get' path='/users' />
```

#### <a id="endpoint-path">path</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / path [↑](#endpoint-method) [↓](#endpoint-summary)

URL path for the endpoint. Can contain path parameters in curly braces.

- Type: `string`
- Required: Yes

```typescript jsx
<endpoint method='get' path='/users/{id}' />
```

#### <a id="endpoint-summary">summary</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / summary [↑](#endpoint-path) [↓](#endpoint-description)

Brief summary of the endpoint.

- Type: `string`

```typescript jsx
<endpoint method='get' path='/users' summary='Get all users' />
```

#### <a id="endpoint-description">description</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / description [↑](#endpoint-summary) [↓](#endpoint-deprecated)

Detailed description of the endpoint. CommonMark (Markdown) syntax is supported.

- Type: `string`

```typescript jsx
<endpoint 
  method='get' 
  path='/users' 
  description='Retrieves a list of **all users** in the system'
/>
```

#### <a id="endpoint-deprecated">deprecated</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / deprecated [↑](#endpoint-description) [↓](#endpoint-private)

Mark the endpoint as deprecated.

- Type: `boolean`
- Default: `false`

```typescript jsx
<endpoint method='get' path='/old-endpoint' deprecated />
```

#### <a id="endpoint-private">private</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / private [↑](#endpoint-deprecated) [↓](#endpoint-operationid)

Hide the endpoint from OpenAPI documentation.

- Type: `boolean`
- Default: `false`

```typescript jsx
<endpoint method='get' path='/internal' private />
```

#### <a id="endpoint-operationid">operationId</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / operationId [↑](#endpoint-private)

Unique identifier for the operation, used to identify the operation in OpenAPI.

- Type: `string`

```typescript jsx
<endpoint method='get' path='/users' operationId='getAllUsers' />
```

## Body
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / Body [↑](#param) [↓](#response)

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

## Param
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / Param [↑](#body) [↓](#response)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#param-in">in</a></p>
      <p>├  🏷️ <a href="#param-name">name</a></p>
      <p>├  🏷️ <a href="#param-description">description</a></p>
      <p>├  🏷️ <a href="#param-required">required</a></p>
      <p>╘  🏷️ <a href="#param-deprecated">deprecated</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Param](#param) / in [↓](#param-name)

The location of the parameter.

- Type: `'query' | 'header' | 'path' | 'cookie'`
- Required: Yes

```typescript jsx
<param in='query' name='search' />
```

#### <a id="param-name">name</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Param](#param) / name [↑](#param-in) [↓](#param-description)

The name of the parameter. Parameter names are case-sensitive.

- Type: `string`
- Required: Yes

```typescript jsx
<param in='query' name='search' />
```

#### <a id="param-description">description</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Param](#param) / description [↑](#param-name) [↓](#param-required)

A brief description of the parameter.

- Type: `string`
- Required: No

```typescript jsx
<param in='query' name='search' description='Search query string' />
```

#### <a id="param-required">required</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Param](#param) / required [↑](#param-description) [↓](#param-deprecated)

Whether the parameter is mandatory.

- Type: `boolean`
- Default: `false` (except for path parameters, which are always required)

```typescript jsx
<param in='query' name='token' required />
```

#### <a id="param-deprecated">deprecated</a>
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Param](#param) / deprecated [↑](#param-required)

Mark the parameter as deprecated.

- Type: `boolean`
- Default: `false`

```typescript jsx
<param in='query' name='oldParam' deprecated />
```

## Response
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / Response [↑](#param)

<sub>
  <details>
    <summary>&nbsp;🏷️ Props</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#response-status">status</a></p>
      <p>╘  🏷️ <a href="#response-type">type</a></p>
    </blockquote>
  </details>
</sub>

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Response](#response) / status [↓](#response-type)

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
###### [🏠︎](./README.md) / [Elements](#elements) / [Server](#server) / [API](#api) / [Endpoint](#endpoint) / [Response](#response) / type [↑](#response-status)

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

---

#### [← Quick Start](./QUICK_START.md) | [Schemas →](./SCHEMAS.md)
