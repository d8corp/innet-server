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
      <p>├  📁 <a href="./QUICK_START#hello-world">Hello World</a></p>
      <p>├  📁 <a href="./QUICK_START#api-example">API Example</a></p>
      <p>├  📁 <a href="./QUICK_START#endpoint-example">Endpoint Example</a></p>
      <p>╘  📁 <a href="./QUICK_START#component-example">Component Example</a></p>
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
                      <p>├  🏷️ <a href="#variable-key">key</a></p>
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
                  <p>├  🏷️ <a href="#license-name">name</a></p>
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
  <details>
    <summary>&nbsp;🗂️ <a href="#schemas">Schemas</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁 <a href="#schemas-props">Props</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#schema-title">title</a></p>
          <p>├  🏷️ <a href="#schema-description">description</a></p>
          <p>├  🏷️ <a href="#schema-examples">examples</a></p>
          <p>├  🏷️ <a href="#schema-example">example</a></p>
          <p>├  🏷️ <a href="#schema-default">default</a></p>
          <p>├  🏷️ <a href="#schema-nullable">nullable</a></p>
          <p>├  🏷️ <a href="#schema-ref">ref</a></p>
          <p>├  🏷️ <a href="#schema-const">const</a></p>
          <p>├  🏷️ <a href="#schema-values">values</a></p>
          <p>├  🏷️ <a href="#schema-readonly">readOnly</a></p>
          <p>├  🏷️ <a href="#schema-writeonly">writeOnly</a></p>
          <p>╘  🏷️ <a href="#schema-deprecated">deprecated</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#collections">Collections</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#object">&lt;object&gt;</a></summary>
            <blockquote>
              <p></p>
              <details>
                <summary>&nbsp;🧩 <a href="#field">&lt;field&gt;</a></summary>
                <blockquote>
                  <p></p>
                  <p>├  🏷️ <a href="#field-key">key</a></p>
                  <p>├  🏷️ <a href="#field-optional">optional</a></p>
                  <p>├  🏷️ <a href="#field-deprecated">deprecated</a></p>
                  <p>├  🏷️ <a href="#field-readonly">readOnly</a></p>
                  <p>╘  🏷️ <a href="#field-writeonly">writeOnly</a></p>
                </blockquote>
              </details>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#array">&lt;array&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#array-minitems">minItems</a></p>
              <p>├  🏷️ <a href="#array-maxitems">maxItems</a></p>
              <p>╘  🏷️ <a href="#array-uniqueitems">uniqueItems</a></p>
            </blockquote>
          </details>
          <p>╘  🧩 <a href="#tuple">&lt;tuple&gt;</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#primitive-data">Primitives</a></summary>
        <blockquote>
          <p></p>
          <details>
            <summary>&nbsp;🧩 <a href="#string">&lt;string&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#string-min">min</a></p>
              <p>├  🏷️ <a href="#string-max">max</a></p>
              <p>├  🏷️ <a href="#string-pattern">pattern</a></p>
              <p>╘  🏷️ <a href="#string-patternid">patternId</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#number">&lt;number&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#num-min">min</a></p>
              <p>├  🏷️ <a href="#num-max">max</a></p>
              <p>├  🏷️ <a href="#num-exclusivemin">exclusiveMin</a></p>
              <p>├  🏷️ <a href="#num-exclusivemax">exclusiveMax</a></p>
              <p>╘  🏷️ <a href="#num-multipleof">multipleOf</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#integer">&lt;integer&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#int-format">format</a></p>
              <p>├  🏷️ <a href="#int-min">min</a></p>
              <p>├  🏷️ <a href="#int-max">max</a></p>
              <p>├  🏷️ <a href="#int-exclusivemin">exclusiveMin</a></p>
              <p>├  🏷️ <a href="#int-exclusivemax">exclusiveMax</a></p>
              <p>╘  🏷️ <a href="#int-multipleof">multipleOf</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#date">&lt;date&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#date-min">min</a></p>
              <p>╘  🏷️ <a href="#date-max">max</a></p>
            </blockquote>
          </details>
          <details>
            <summary>&nbsp;🧩 <a href="#binary">&lt;binary&gt;</a></summary>
            <blockquote>
              <p></p>
              <p>├  🏷️ <a href="#binary-accept">accept</a></p>
              <p>├  🏷️ <a href="#binary-min">min</a></p>
              <p>╘  🏷️ <a href="#binary-max">max</a></p>
            </blockquote>
          </details>
          <p>├  🧩 <a href="#uuid">&lt;uuid&gt;</a></p>
          <p>├  🧩 <a href="#boolean">&lt;boolean&gt;</a></p>
          <p>├  🧩 <a href="#null">&lt;null&gt;</a></p>
          <p>╘  🧩 <a href="#any">&lt;any&gt;</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;🪝 <a href="#hooks">Hooks</a></summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁 <a href="#runtime-hooks">Runtime</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="#userequest">useRequest</a></p>
          <p>├  🪝 <a href="#useresponse">useResponse</a></p>
          <p>├  🪝 <a href="#usepath">usePath</a></p>
          <p>├  🪝 <a href="#useheaders">useHeaders</a></p>
          <p>├  🪝 <a href="#usecookies">useCookies</a></p>
          <p>├  🪝 <a href="#useparams">useParams</a></p>
          <p>├  🪝 <a href="#usesearch">useSearch</a></p>
          <p>├  🪝 <a href="#usebody">useBody</a></p>
          <p>╘  🪝 <a href="#useclientip">useClientIp</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁 <a href="#shared-hooks">Shared</a></summary>
        <blockquote>
          <p></p>
          <p>├  🪝 <a href="#useserver">useServer</a></p>
          <p>├  🪝 <a href="#useserverport">useServerPort</a></p>
          <p>├  🪝 <a href="#useisserverhttps">useIsServerHttps</a></p>
          <p>├  🪝 <a href="#usecomponentname">useComponentName</a></p>
          <p>╘  🪝 <a href="#useserverplugin">useServerPlugin</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
  <details>
    <summary>&nbsp;⚙️ <a href="#configuration">Configuration</a></summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_port">INNET_PORT</a></p>
      <p>├  🏷️ <a href="#innet_ssl_crt">INNET_SSL_CRT</a></p>
      <p>├  🏷️ <a href="#innet_ssl_key">INNET_SSL_KEY</a></p>
      <p>├  🏷️ <a href="#innet_api_prefix">INNET_API_PREFIX</a></p>
      <p>├  🏷️ <a href="#innet_api_version">INNET_API_VERSION</a></p>
      <p>├  🏷️ <a href="#innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a></p>
      <p>├  🏷️ <a href="#innet_cms_dir">INNET_CMS_DIR</a></p>
      <p>├  🏷️ <a href="#innet_cms_prefix">INNET_CMS_PREFIX</a></p>
      <p>├  🏷️ <a href="#innet_blacklist_ip">INNET_BLACKLIST_IP</a></p>
      <p>├  🏷️ <a href="#innet_whitelist_ip">INNET_WHITELIST_IP</a></p>
      <p>├  🏷️ <a href="#innet_protection">INNET_PROTECTION</a></p>
      <p>├  🏷️ <a href="#innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a></p>
      <p>├  🏷️ <a href="#innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a></p>
      <p>├  🏷️ <a href="#innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a></p>
      <p>├  🏷️ <a href="#innet_protected_ip">INNET_PROTECTED_IP</a></p>
      <p>├  🏷️ <a href="#innet_dts_path">INNET_DTS_PATH</a></p>
      <p>├  🏷️ <a href="#innet_dts_namespace">INNET_DTS_NAMESPACE</a></p>
      <p>├  🏷️ <a href="#innet_ui_path">INNET_UI_PATH</a></p>
      <p>╘  🏷️ <a href="#innet_swagger_path">INNET_SWAGGER_PATH</a></p>
    </blockquote>
  </details>
</sub>
