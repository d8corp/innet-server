import { type HandlerPlugin } from 'innet'
import { placeholder } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useAction, useApi, useServer, useServerPlugin } from '../../../hooks'
import rapidoc from './rapidoc.html'
import redoc from './redoc.html'
import scalar from './scalar.html'
import swagger from './swagger.html'

function camelToDash (str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}

export const uiPresets = { rapidoc, redoc, scalar, swagger } satisfies Record<string, string>

export interface UiProps {
  /**
   * Custom HTML template for the documentation viewer.
   * Use built-in presets or provide custom HTML.
   *
   * @default Swagger UI HTML template
   *
   * @example
   * ```tsx
   * import { uiPresets } from '@innet/server'
   *
   * export default (
   *   <api>
   *     <ui html={uiPresets.scalar} />
   *   </api>
   * )
   * ```
   */
  html?: string

  /**
   * Additional parameters to pass to the documentation viewer.
   * Parameters vary by viewer type.
   *
   * @default empty object
   *
   * @example
   * ```tsx
   * <ui
   *   html={uiPresets.scalar}
   *   params={{
   *     theme: 'moon',
   *     layout: 'classic'
   *   }}
   * />
   * ```
   */
  params?: Record<string, any>

  /**
   * The URL path where the documentation UI will be served.
   *
   * @default INNET_UI_PATH or '/ui'
   *
   * @example
   * ```tsx
   * <ui path='/docs' />
   * ```
   */
  path?: string
}

export const ui: HandlerPlugin = () => {
  const { initUI } = useServer()

  const props = useProps<UiProps>() || {}

  const {
    html = uiPresets.swagger,
    params = {},
    path = process.env.INNET_UI_PATH || '/ui',
  } = props

  initUI(props)

  const {
    docs,
    prefix,
  } = useApi()

  let cache: string = ''

  useServerPlugin(() => {
    const action = useAction()

    if (action.path === prefix + path) {
      if (!cache) {
        const attributes = Object
          .keys(params)
          .reduce((res, key) => {
            return `${res} ${camelToDash(key)}='${String(params[key])}'`
          }, '')

        cache = placeholder(html, {
          apiUrl: prefix,
          attributes,
          docs: JSON.stringify(docs),
          params: JSON.stringify(params),
          ...params,
        })
      }

      action.res.statusCode = 200
      action.res.write(cache)
      action.res.end()
      return true
    }
  })
}
