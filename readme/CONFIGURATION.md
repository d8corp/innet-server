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

| Parameter                           | Default                         | Used by                      | Description                                          |
|-------------------------------------|----------------------------------|------------------------------|------------------------------------------------------|
| **Server Settings**                 |                                  |                              |                                                      |
| [`INNET_PORT`](#innet_port)         | `80` (HTTP) or `443` (HTTPS)     | `<server port>`        | Server port number.                                  |
| [`INNET_SSL_CRT`](#innet_ssl_crt)   | `localhost.crt`                  | `<server ssl>`               | Path to SSL certificate file.                        |
| [`INNET_SSL_KEY`](#innet_ssl_key)   | `localhost.key`                  | `<server ssl>`               | Path to SSL private key file.                        |
| **API Settings**                    |                                  |                              |                                                      |
| [`INNET_API_PREFIX`](#innet_api_prefix) | `''` (empty string)          | `<api prefix>`               | URL prefix for all API endpoints.                    |
| [`INNET_API_VERSION`](#innet_api_version) | `'0.0.0'`                  | `<api version>`              | API version string.                                  |
| [`INNET_API_ENUM_DESCRIPTION_KEY`](#innet_api_enum_description_key) | `'x-enumNames'` | Schema enums | Key name for enum descriptions in OpenAPI spec.     |
| **CMS Settings**                    |                                  |                              |                                                      |
| [`INNET_CMS_DIR`](#innet_cms_dir)   | `'.'`                            | `<cms dir>`                  | Directory for static CMS files.                      |
| [`INNET_CMS_PREFIX`](#innet_cms_prefix) | `'/'`                        | `<cms prefix>`               | URL prefix for CMS routes.                           |
| **Security Settings**               |                                  |                              |                                                      |
| [`INNET_BLACKLIST_IP`](#innet_blacklist_ip) | `undefined`             | `<blacklist ip>`             | IP address to blacklist.                             |
| [`INNET_WHITELIST_IP`](#innet_whitelist_ip) | `undefined`             | `<whitelist ip>`             | IP address to whitelist.                             |
| [`INNET_PROTECTION`](#innet_protection) | `undefined`                | `<protection value>`         | Protection token value.                              |
| [`INNET_PROTECTION_MAX_AGE`](#innet_protection_max_age) | `31536000` (1 year) | `<protection maxAge>` | Protection token max age in seconds.                 |
| [`INNET_PROTECTION_COOKIE_KEY`](#innet_protection_cookie_key) | `'protection'` | `<protection cookieKey>` | Cookie name for protection token.                    |
| [`INNET_PROTECTION_SEARCH_KEY`](#innet_protection_search_key) | `'protection'` | `<protection searchKey>` | Query parameter name for protection token.           |
| [`INNET_PROTECTED_IP`](#innet_protected_ip) | `undefined`          | `<protection excludeIp>`     | IP address to exclude from protection.               |
| **Documentation Settings**          |                                  |                              |                                                      |
| [`INNET_DTS_PATH`](#innet_dts_path) | `'src/apiTypes.d.ts'`            | `<dts path>`                 | Path for generated TypeScript definition file.       |
| [`INNET_DTS_NAMESPACE`](#innet_dts_namespace) | `undefined`          | `<dts namespace>`            | Namespace for generated TypeScript types.            |
| [`INNET_UI_PATH`](#innet_ui_path)   | `'/ui'`                          | `<ui path>`                  | URL path for API documentation UI.                   |

## Server Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / Server Settings [↓](#api-settings)

<sub>
  <details>
    <summary>&nbsp;🏷️️ Settings</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_port">INNET_PORT</a></p>
      <p>├  🏷️ <a href="#innet_ssl_crt">INNET_SSL_CRT</a></p>
      <p>╘  🏷️ <a href="#innet_ssl_key">INNET_SSL_KEY</a></p>
    </blockquote>
  </details>
</sub>

Configure the port and SSL certificate settings for your server.

### <a id="innet_port">INNET_PORT</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Server Settings](#server-settings) / INNET_PORT [↓](#innet_ssl_crt)
Server port number.

- **Default:** `80` (HTTP) or `443` (HTTPS)
- **Used by:** `<server port={3000}>`

```shell
INNET_PORT=3000
```

### <a id="innet_ssl_crt">INNET_SSL_CRT</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Server Settings](#server-settings) / INNET_SSL_CRT [↑](#innet_port) [↓](#innet_ssl_key)
Path to SSL certificate file.

- **Default:** `localhost.crt`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_CRT=./certs/server.crt
```

### <a id="innet_ssl_key">INNET_SSL_KEY</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Server Settings](#server-settings) / INNET_SSL_KEY [↑](#innet_ssl_crt)
Path to SSL private key file.

- **Default:** `localhost.key`
- **Used by:** `<server ssl>`

```shell
INNET_SSL_KEY=./certs/server.key
```

## API Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / API Settings [↑](#server-settings) [↓](#cms-settings)

<sub>
  <details>
    <summary>&nbsp;🏷️️ Settings</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_api_prefix">INNET_API_PREFIX</a></p>
      <p>├  🏷️ <a href="#innet_api_version">INNET_API_VERSION</a></p>
      <p>╘  🏷️ <a href="#innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a></p>
    </blockquote>
  </details>
</sub>

Define API prefix, version, and customize how enums are described in your OpenAPI specification.

### <a id="innet_api_prefix">INNET_API_PREFIX</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [API Settings](#api-settings) / INNET_API_PREFIX [↓](#innet_api_version)
URL prefix for all API endpoints.

- **Default:** `''` (empty string)
- **Used by:** `<api prefix>`

```shell
INNET_API_PREFIX=/api/v1
```

### <a id="innet_api_version">INNET_API_VERSION</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [API Settings](#api-settings) / INNET_API_VERSION [↓](#innet_api_enum_description_key)
API version string.

- **Default:** `'0.0.0'`
- **Used by:** `<api version>`

```shell
INNET_API_VERSION=1.0.0
```

### <a id="innet_api_enum_description_key">INNET_API_ENUM_DESCRIPTION_KEY</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [API Settings](#api-settings) / INNET_API_ENUM_DESCRIPTION_KEY [↓](#cms-settings)
Key name for enum descriptions in OpenAPI spec.

- **Default:** `'x-enumNames'`
- **Used by:** Schema enums

```shell
INNET_API_ENUM_DESCRIPTION_KEY=x-enum-descriptions
```

## CMS Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / CMS Settings [↑](#api-settings) [↓](#security-settings)

<sub>
  <details>
    <summary>&nbsp;🏷️️ Settings</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_cms_dir">INNET_CMS_DIR</a></p>
      <p>╘  🏷️ <a href="#innet_cms_prefix">INNET_CMS_PREFIX</a></p>
    </blockquote>
  </details>
</sub>

Configure static CMS file serving and URL routing for the CMS.

### <a id="innet_cms_dir">INNET_CMS_DIR</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [CMS Settings](#cms-settings) / INNET_CMS_DIR [↓](#innet_cms_prefix)
Directory for static CMS files.

- **Default:** `'.'`
- **Used by:** `<cms dir>`

```shell
INNET_CMS_DIR=./public
```

### <a id="innet_cms_prefix">INNET_CMS_PREFIX</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [CMS Settings](#cms-settings) / INNET_CMS_PREFIX [↓](#security-settings)
URL prefix for CMS routes.

- **Default:** `'/'`
- **Used by:** `<cms prefix>`

```shell
INNET_CMS_PREFIX=/static
```

## Security Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / Security Settings [↑](#cms-settings) [↓](#documentation-settings)

<sub>
  <details>
    <summary>&nbsp;🏷️️ Settings</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_blacklist_ip">INNET_BLACKLIST_IP</a></p>
      <p>├  🏷️ <a href="#innet_whitelist_ip">INNET_WHITELIST_IP</a></p>
      <p>├  🏷️ <a href="#innet_protection">INNET_PROTECTION</a></p>
      <p>├  🏷️ <a href="#innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a></p>
      <p>├  🏷️ <a href="#innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a></p>
      <p>├  🏷️ <a href="#innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a></p>
      <p>╘  🏷️ <a href="#innet_protected_ip">INNET_PROTECTED_IP</a></p>
    </blockquote>
  </details>
</sub>

Manage IP filtering, protection tokens, and security policies for your server.

### <a id="innet_blacklist_ip">INNET_BLACKLIST_IP</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_BLACKLIST_IP [↓](#innet_whitelist_ip)
IP address to blacklist.

- **Default:** `undefined`
- **Used by:** `<blacklist ip>`

```shell
INNET_BLACKLIST_IP=192.168.1.100
```

### <a id="innet_whitelist_ip">INNET_WHITELIST_IP</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_WHITELIST_IP [↓](#innet_protection)
IP address to whitelist.

- **Default:** `undefined`
- **Used by:** `<whitelist ip>`

```shell
INNET_WHITELIST_IP=10.0.0.1
```

### <a id="innet_protection">INNET_PROTECTION</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_PROTECTION [↓](#innet_protection_max_age)
Protection token value.

- **Default:** `undefined`
- **Used by:** `<protection value>`

```shell
INNET_PROTECTION=secret-token
```

### <a id="innet_protection_max_age">INNET_PROTECTION_MAX_AGE</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_PROTECTION_MAX_AGE [↓](#innet_protection_cookie_key)
Protection token max age in seconds.

- **Default:** `31536000` (1 year)
- **Used by:** `<protection maxAge>`

```shell
INNET_PROTECTION_MAX_AGE=86400
```

### <a id="innet_protection_cookie_key">INNET_PROTECTION_COOKIE_KEY</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_PROTECTION_COOKIE_KEY [↓](#innet_protection_search_key)
Cookie name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection cookieKey>`

```shell
INNET_PROTECTION_COOKIE_KEY=auth_token
```

### <a id="innet_protection_search_key">INNET_PROTECTION_SEARCH_KEY</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_PROTECTION_SEARCH_KEY [↓](#innet_protected_ip)
Query parameter name for protection token.

- **Default:** `'protection'`
- **Used by:** `<protection searchKey>`

```shell
INNET_PROTECTION_SEARCH_KEY=token
```

### <a id="innet_protected_ip">INNET_PROTECTED_IP</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Security Settings](#security-settings) / INNET_PROTECTED_IP [↓](#documentation-settings)
IP address to exclude from protection.

- **Default:** `undefined`
- **Used by:** `<protection excludeIp>`

```shell
INNET_PROTECTED_IP=127.0.0.1
```

## Documentation Settings
###### [🏠︎](./README.md) / [Configuration](#configuration) / Documentation Settings [↑](#security-settings)

<sub>
  <details>
    <summary>&nbsp;🏷️️ Settings</summary>
    <blockquote>
      <p></p>
      <p>├  🏷️ <a href="#innet_dts_path">INNET_DTS_PATH</a></p>
      <p>├  🏷️ <a href="#innet_dts_namespace">INNET_DTS_NAMESPACE</a></p>
      <p>╘  🏷️ <a href="#innet_ui_path">INNET_UI_PATH</a></p>
    </blockquote>
  </details>
</sub>

Configure TypeScript definition generation and API documentation UI settings.

### <a id="innet_dts_path">INNET_DTS_PATH</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Documentation Settings](#documentation-settings) / INNET_DTS_PATH [↓](#innet_dts_namespace)
Path for generated TypeScript definition file.

- **Default:** `'src/apiTypes.d.ts'`
- **Used by:** `<dts path>`

```shell
INNET_DTS_PATH=./types/api.d.ts
```

### <a id="innet_dts_namespace">INNET_DTS_NAMESPACE</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Documentation Settings](#documentation-settings) / INNET_DTS_NAMESPACE [↓](#innet_ui_path)
Namespace for generated TypeScript types.

- **Default:** `undefined`
- **Used by:** `<dts namespace>`

```shell
INNET_DTS_NAMESPACE=API
```

### <a id="innet_ui_path">INNET_UI_PATH</a>
###### [🏠︎](./README.md) / [Configuration](#configuration) / [Documentation Settings](#documentation-settings) / INNET_UI_PATH
URL path for API documentation UI.

- **Default:** `'/ui'`
- **Used by:** `<ui path>`

```shell
INNET_UI_PATH=/docs
```
