# @innet/server Docs

Detailed documentation for `@innet/server` — a JavaScript Backend Framework with a declarative JSX approach to building APIs.

This documentation is organized into sections for easy navigation. Use the expandable menu below to explore all available elements, schemas, hooks, and configuration options.

For a quick overview and introduction, see the [main README](../README.md) in the repository root.

<sub>
  <details>
    <summary>&nbsp;🚀 <a href="./QUICK_START.md">Quick Start</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📦 <a href="./QUICK_START.md#setup-environment">Setup Environment</a></summary>
        <blockquote>
          <p></p>
          <p>├  📁 <a href="./QUICK_START.md#app">App</a></p>
          <p>╘  📁 <a href="./QUICK_START.md#library">Library</a></p>
        </blockquote>
      </details>
      <p>├  📁 <a href="./QUICK_START.md#hello-world">Hello World</a></p>
      <p>├  📁 <a href="./QUICK_START.md#api-example">API Example</a></p>
      <p>├  📁 <a href="./QUICK_START.md#endpoint-example">Endpoint Example</a></p>
      <p>├  📁 <a href="./QUICK_START.md#component-example">Component Example</a></p>
      <p>╘  📁 <a href="./QUICK_START.md#components">Components</a></p>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🗂 <a href="./ELEMENTS.md">Elements</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;🧩 <a href="./ELEMENTS.md#env">&lt;env&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#env-is">is</a>*</p>
          <p>╘  🏷️ <a href="./ELEMENTS.md#env-of">of</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;🧩 <a href="./ELEMENTS.md#server">&lt;server&gt;</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-port">port</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-ssl">ssl</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-format-error">formatError</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-onstart">onStart</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-onrequest">onRequest</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-onerror">onError</a></p>
          <p>├  🏷️ <a href="./ELEMENTS.md#server-onclose">onClose</a></p>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#blacklist">&lt;blacklist&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>╘  🏷️ <a href="./ELEMENTS.md#blacklist-ip">ip</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#whitelist">&lt;whitelist&gt;</a></summary>
            <blockquote>
              <p></p>           
              <p>╘  🏷️ <a href="./ELEMENTS.md#whitelist-ip">ip</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#protection">&lt;protection&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#protection-value">value</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#protection-maxage">maxAge</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#protection-excludeip">excludeIp</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#protection-cookiekey">cookieKey</a></p>
              <p>╘  🏷️ <a href="./ELEMENTS.md#protection-searchkey">searchKey</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#preset">&lt;preset&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#header">&lt;header&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#header-key">key</a>*</p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#header-value">value</a>*</p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#cookie">&lt;cookie&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-key">key</a>*</p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-value">value</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-domain">domain</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-encode">encode</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-expires">expires</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-httponly">httpOnly</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-maxage">maxAge</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-path">path</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-priority">priority</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cookie-samesite">sameSite</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#cookie-secure">secure</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#return">&lt;return&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#success">&lt;success&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#success-status">status</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#success-contenttype">contentType</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#error">&lt;error&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#error-status">status</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#error-code">code</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#proxy">&lt;proxy&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#proxy-to">to</a>*</p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#redirect">&lt;redirect&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#redirect-to">to</a>*</p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#redirect-status">status</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#cms">&lt;cms&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#cms-dir">dir</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#cms-prefix">prefix</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#file">&lt;file&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#file-path">path</a>*</p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./ELEMENTS.md#api">&lt;api&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-title">title</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-description">description</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-version">version</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-prefix">prefix</a></p>
              <p>├  🏷️ <a href="./ELEMENTS#api-schemageneration">schemaGeneration</a></p>
              <p>├  🏷️ <a href="./ELEMENTS#api-errorschema">errorSchema</a></p>
              <p>├  🏷️ <a href="./ELEMENTS#api-errorshemarefs">errorSchemaRefs</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-include">include</a></p>
              <p>├  🏷️ <a href="./ELEMENTS.md#api-exclude">exclude</a></p>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#host">&lt;host&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#host-url">url</a>*</p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#host-description">description</a></p>
                  <details>
                    <summary>&nbsp;🧩 <a href="./ELEMENTS.md#variable">&lt;variable&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#variable-key">key</a>*</p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#variable-value">value</a></p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#variable-values">values</a></p>
                      <p>╘  🏷️ <a href="./ELEMENTS.md#variable-description">description</a></p>
                    </blockquote>
                  </details>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#license">&lt;license&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#license-name">name</a>*</p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#license-identifier">identifier</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#license-url">url</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#contact">&lt;contact&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#contact-name">name</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#contact-email">email</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#contact-url">url</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#ui">&lt;ui&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#ui-html">html</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#ui-params">params</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#ui-path">path</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#dts">&lt;dts&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#dts-path">path</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#dts-namespace">namespace</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#tag">&lt;tag&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#tag-name">name</a>*</p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#tag-description">description</a></p>
                  <p>╘  🏷️ <a href="./ELEMENTS.md#tag-group">group</a></p>
                </blockquote>
              </details>
              <details>
                <summary>&nbsp;🧩 <a href="./ELEMENTS.md#endpoint">&lt;endpoint&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-method">method</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-path">path</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-summary">summary</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-description">description</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-deprecated">deprecated</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-private">private</a></p>
                  <p>├  🏷️ <a href="./ELEMENTS.md#endpoint-operationid">operationId</a></p>
                  <p>├  🧩 <a href="./ELEMENTS.md#body">&lt;body&gt;</a></p>
                  <details>
                    <summary>&nbsp;🧩 <a href="./ELEMENTS.md#param">&lt;param&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#param-in">in</a>*</p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#param-name">name</a>*</p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#param-description">description</a></p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#param-required">required</a></p>
                      <p>╘  🏷️ <a href="./ELEMENTS.md#param-deprecated">deprecated</a></p>
                    </blockquote>
                  </details>
                  <details>
                    <summary>&nbsp;🧩 <a href="./ELEMENTS.md#response">&lt;response&gt;</a></summary>
                    <blockquote>
                      <p></p>
                      <p>├  🏷️ <a href="./ELEMENTS.md#response-status">status</a></p>
                      <p>╘  🏷️ <a href="./ELEMENTS.md#response-type">type</a></p>
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
    <summary>&nbsp;🗂️ <a href="./SCHEMAS.md">Schemas</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁 <a href="./SCHEMAS.md#schemas-props">Props</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-title">title</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-description">description</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-examples">examples</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-example">example</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-default">default</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-nullable">nullable</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-ref">ref</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-const">const</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-values">values</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-readonly">readOnly</a></p>
          <p>├  🏷️ <a href="./SCHEMAS.md#schema-writeonly">writeOnly</a></p>
          <p>╘  🏷️ <a href="./SCHEMAS.md#schema-deprecated">deprecated</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="./SCHEMAS.md#collections">Collections</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#object">&lt;object&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="./SCHEMAS.md#field">&lt;field&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="./SCHEMAS.md#field-key">key</a></p>
                  <p>├  🏷️ <a href="./SCHEMAS.md#field-optional">optional</a></p>
                  <p>├  🏷️ <a href="./SCHEMAS.md#field-deprecated">deprecated</a></p>
                  <p>├  🏷️ <a href="./SCHEMAS.md#field-readonly">readOnly</a></p>
                  <p>╘  🏷️ <a href="./SCHEMAS.md#field-writeonly">writeOnly</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#array">&lt;array&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#array-min">min</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#array-max">max</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#array-unique">unique</a></p>
            </blockquote>
          </details>
          <p>╘  🧩 <a href="./SCHEMAS.md#tuple">&lt;tuple&gt;</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="./SCHEMAS.md#primitives">Primitives</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#string">&lt;string&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#string-min">min</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#string-max">max</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#string-pattern">pattern</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#string-patternid">patternId</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#number">&lt;number&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#num-min">min</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#num-max">max</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#num-exclusivemin">exclusiveMin</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#num-exclusivemax">exclusiveMax</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#num-multipleof">multipleOf</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#integer">&lt;integer&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#int-format">format</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#int-min">min</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#int-max">max</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#int-exclusivemin">exclusiveMin</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#int-exclusivemax">exclusiveMax</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#int-multipleof">multipleOf</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#date">&lt;date&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#date-min">min</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#date-max">max</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="./SCHEMAS.md#binary">&lt;binary&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#binary-accept">accept</a></p>
              <p>├  🏷️ <a href="./SCHEMAS.md#binary-min">min</a></p>
              <p>╘  🏷️ <a href="./SCHEMAS.md#binary-max">max</a></p>
            </blockquote>
          </details>
          <p>├  🧩 <a href="./SCHEMAS.md#uuid">&lt;uuid&gt;</a></p>
          <p>├  🧩 <a href="./SCHEMAS.md#boolean">&lt;boolean&gt;</a></p>
          <p>├  🧩 <a href="./SCHEMAS.md#null">&lt;null&gt;</a></p>
          <p>╘  🧩 <a href="./SCHEMAS.md#any">&lt;any&gt;</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🪝 <a href="./HOOKS.md">Hooks</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁 <a href="./HOOKS.md#runtime">Runtime</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="./HOOKS.md#userequest">useRequest</a></p>
          <p>├  🪝 <a href="./HOOKS.md#useresponse">useResponse</a></p>
          <p>├  🪝 <a href="./HOOKS.md#usepath">usePath</a></p>
          <p>├  🪝 <a href="./HOOKS.md#useheaders">useHeaders</a></p>
          <p>├  🪝 <a href="./HOOKS.md#usecookies">useCookies</a></p>
          <p>├  🪝 <a href="./HOOKS.md#useparams">useParams</a></p>
          <p>├  🪝 <a href="./HOOKS.md#usesearch">useSearch</a></p>
          <p>├  🪝 <a href="./HOOKS.md#usebody">useBody</a></p>
          <p>├  🪝 <a href="./HOOKS.md#usedata">useData</a></p>
          <p>╘  🪝 <a href="./HOOKS.md#useclientip">useClientIp</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="./HOOKS.md#initialization">Initialization</a></summary>
        <blockquote>
          <p></p>
          <p>╘  🪝 <a href="./HOOKS.md#useserverplugin">useServerPlugin</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="./HOOKS.md#shared-hooks">Shared</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="./HOOKS.md#useserver">useServer</a></p>
          <p>├  🪝 <a href="./HOOKS.md#useserverport">useServerPort</a></p>
          <p>├  🪝 <a href="./HOOKS.md#useisserverhttps">useIsServerHttps</a></p>
          <p>╘  🪝 <a href="./HOOKS.md#usecomponentname">useComponentName</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;⚙️ <a href="./CONFIGURATION.md">Configuration</a></summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_port">INNET_PORT</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_ssl_crt">INNET_SSL_CRT</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_ssl_key">INNET_SSL_KEY</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_api_prefix">INNET_API_PREFIX</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_api_version">INNET_API_VERSION</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_cms_dir">INNET_CMS_DIR</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_cms_prefix">INNET_CMS_PREFIX</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_blacklist_ip">INNET_BLACKLIST_IP</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_whitelist_ip">INNET_WHITELIST_IP</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_protection">INNET_PROTECTION</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_protected_ip">INNET_PROTECTED_IP</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_dts_path">INNET_DTS_PATH</a></p>
      <p>├  🏷️ <a href="./CONFIGURATION.md#innet_dts_namespace">INNET_DTS_NAMESPACE</a></p>
      <p>╘  🏷️ <a href="./CONFIGURATION.md#innet_ui_path">INNET_UI_PATH</a></p>
    </blockquote>
  </details>
</sub>
