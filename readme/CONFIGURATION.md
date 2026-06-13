# Configuration
###### [🏠︎](./README.md) / Configuration [↑](#quick-start) [↓](#components)

<sub>
  <details>
    <summary>&nbsp;📁️ Sections</summary>
    <blockquote>
      <p></p>
      <details>
        <summary>&nbsp;📁️ <a href="#server-settings">Server Settings</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#innet_port">INNET_PORT</a></p>
          <p>├  🏷️ <a href="#innet_ssl_crt">INNET_SSL_CRT</a></p>
          <p>╘  🏷️ <a href="#innet_ssl_key">INNET_SSL_KEY</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁️ <a href="#api-settings">API Settings</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#innet_api_prefix">INNET_API_PREFIX</a></p>
          <p>├  🏷️ <a href="#innet_api_version">INNET_API_VERSION</a></p>
          <p>╘  🏷️ <a href="#innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁️ <a href="#cms-settings">CMS Settings</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#innet_cms_dir">INNET_CMS_DIR</a></p>
          <p>╘  🏷️ <a href="#innet_cms_prefix">INNET_CMS_PREFIX</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁️ <a href="#security-settings">Security Settings</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#innet_blacklist_ip">INNET_BLACKLIST_IP</a></p>
          <p>├  🏷️ <a href="#innet_whitelist_ip">INNET_WHITELIST_IP</a></p>
          <p>├  🏷️ <a href="#innet_protection">INNET_PROTECTION</a></p>
          <p>├  🏷️ <a href="#innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a></p>
          <p>├  🏷️ <a href="#innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a></p>
          <p>├  🏷️ <a href="#innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a></p>
          <p>╘  🏷️ <a href="#innet_protected_ip">INNET_PROTECTED_IP</a></p>
        </blockquote>
      </details>
      <details>
        <summary>&nbsp;📁️ <a href="#documentation-settings">Documentation Settings</a></summary>
        <blockquote>
          <p></p>
          <p>├  🏷️ <a href="#innet_dts_path">INNET_DTS_PATH</a></p>
          <p>├  🏷️ <a href="#innet_dts_namespace">INNET_DTS_NAMESPACE</a></p>
          <p>╘  🏷️ <a href="#innet_ui_path">INNET_UI_PATH</a></p>
        </blockquote>
      </details>
    </blockquote>
  </details>
</sub>

Configure the server and API behavior using environment variables.

| Parameter                           | Default                         | Used by                      |
|-------------------------------------|----------------------------------|------------------------------|
| **Server Settings**                 |                                  |                              |
| [`INNET_PORT`](#innet_port)         | `80` (HTTP) or `443` (HTTPS)     | `<server port={...}>`        |
| [`INNET_SSL_CRT`](#innet_ssl_crt)   | `localhost.crt`                  | `<server ssl>`               |
| [`INNET_SSL_KEY`](#innet_ssl_key)   | `localhost.key`                  | `<server ssl>`               |
| **API Settings**                    |                                  |                              |
| [`INNET_API_PREFIX`](#innet_api_prefix) | `''` (empty string)          | `<api prefix>`               |
| [`INNET_API_VERSION`](#innet_api_version) | `'0.0.0'`                  | `<api version>`              |
| [`INNET_API_ENUM_DESCRIPTION_KEY`](#innet_api_enum_description_key) | `'x-enumNames'` | Schema enums |
| **CMS Settings**                    |                                  |                              |
| [`INNET_CMS_DIR`](#innet_cms_dir)   | `'.'`                            | `<cms dir>`                  |
| [`INNET_CMS_PREFIX`](#innet_cms_prefix) | `'/'`                        | `<cms prefix>`               |
| **Security Settings**               |                                  |                              |
| [`INNET_BLACKLIST_IP`](#innet_blacklist_ip) | `undefined`             | `<blacklist ip>`             |
| [`INNET_WHITELIST_IP`](#innet_whitelist_ip) | `undefined`             | `<whitelist ip>`             |
| [`INNET_PROTECTION`](#innet_protection) | `undefined`                | `<protection value>`         |
| [`INNET_PROTECTION_MAX_AGE`](#innet_protection_max_age) | `31536000` (1 year) | `<protection maxAge>` |
| [`INNET_PROTECTION_COOKIE_KEY`](#innet_protection_cookie_key) | `'protection'` | `<protection cookieKey>` |
| [`INNET_PROTECTION_SEARCH_KEY`](#innet_protection_search_key) | `'protection'` | `<protection searchKey>` |
| [`INNET_PROTECTED_IP`](#innet_protected_ip) | `undefined`          | `<protection excludeIp>`     |
| **Documentation Settings**          |                                  |                              |
| [`INNET_DTS_PATH`](#innet_dts_path) | `'src/apiTypes.d.ts'`            | `<dts path>`                 |
| [`INNET_DTS_NAMESPACE`](#innet_dts_namespace) | `undefined`          | `<dts namespace>`            |
| [`INNET_UI_PATH`](#innet_ui_path)   | `'/ui'`                          | `<ui path>`                  |

## Server Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / Server Settings [↓](#components)

### <a id="innet_port">INNET_PORT</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Server Settings](#server-settings) / INNET_PORT [↓](#innet_ssl_crt)
Server port number.

- **Default:** `80` (HTTP) or `443` (HTTPS)
- **Used by:** `<server port={3000}>`

```shell
INNET_PORT=3000
```

### <a id="innet_ssl_crt">INNET_SSL_CRT</a>
Path to SSL certificate file.

- **Default:** `localhost.crt`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_CRT=./certs/server.crt
```

### <a id="innet_ssl_key">INNET_SSL_KEY</a>
Path to SSL private key file.

- **Default:** `localhost.key`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_KEY=./certs/server.key
```

## API Settings

### <a id="innet_api_prefix">INNET_API_PREFIX</a>
URL prefix for all API endpoints.

- **Default:** `''` (empty string)
- **Used by:** `<api prefix>`

```shell
INNET_API_PREFIX=/api/v1
```

### <a id="innet_api_version">INNET_API_VERSION</a>
API version string.

- **Default:** `'0.0.0'`
- **Used by:** `<api version>`

```shell
INNET_API_VERSION=1.0.0
```

### <a id="innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a>
Key name for enum descriptions in OpenAPI spec.

- **Default:** `'x-enumNames'`
- **Used by:** Schema enums

```shell
INNET_API_ENUM_DESCRIPTION_KEY=x-enum-descriptions
```

## CMS Settings

### <a id="innet_cms_dir">INNET_CMS_DIR</a>
Directory for static CMS files.

- **Default:** `'.'`
- **Used by:** `<cms dir>`

```shell
INNET_CMS_DIR=./public
```

### <a id="innet_cms_prefix">INNET_CMS_PREFIX</a>
URL prefix for CMS routes.

- **Default:** `'/'`
- **Used by:** `<cms prefix>`

```shell
INNET_CMS_PREFIX=/static
```

## Security Settings

### <a id="innet_blacklist_ip">INNET_BLACKLIST_IP</a>
IP address to blacklist.

- **Default:** `undefined`
- **Used by:** `<blacklist ip>`

```shell
INNET_BLACKLIST_IP=192.168.1.100
```

### <a id="innet_whitelist_ip">INNET_WHITELIST_IP</a>
IP address to whitelist.

- **Default:** `undefined`
- **Used by:** `<whitelist ip>`

```shell
INNET_WHITELIST_IP=10.0.0.1
```

### <a id="innet_protection">INNET_PROTECTION</a>
Protection token value.

- **Default:** `undefined`
- **Used by:** `<protection value>`

```shell
INNET_PROTECTION=secret-token
```

### <a id="innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a>
Protection token max age in seconds.

- **Default:** `31536000` (1 year)
- **Used by:** `<protection maxAge>`

```shell
INNET_PROTECTION_MAX_AGE=86400
```

### <a id="innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a>
Cookie name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection cookieKey>`

```shell
INNET_PROTECTION_COOKIE_KEY=auth_token
```

### <a id="innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a>
Query parameter name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection searchKey>`

```shell
INNET_PROTECTION_SEARCH_KEY=token
```

### <a id="innet_protected_ip">INNET_PROTECTED_IP</a>
IP address to exclude from protection.

- **Default:** `undefined`
- **Used by:** `<protection excludeIp>`

```shell
INNET_PROTECTED_IP=127.0.0.1
```

## Documentation Settings

### <a id="innet_dts_path">INNET_DTS_PATH</a>
Path for generated TypeScript definition file.

- **Default:** `'src/apiTypes.d.ts'`
- **Used by:** `<dts path>`

```shell
INNET_DTS_PATH=./types/api.d.ts
```

### <a id="innet_dts_namespace">INNET_DTS_NAMESPACE</a>
Namespace for generated TypeScript types.

- **Default:** `undefined`
- **Used by:** `<dts namespace>`

```shell
INNET_DTS_NAMESPACE=API
```

### <a id="innet_ui_path">INNET_UI_PATH</a>
URL path for API documentation UI.

- **Default:** `'/ui'`
- **Used by:** `<ui path>`

```shell
INNET_UI_PATH=/docs
```
