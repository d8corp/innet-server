import { type HandlerPlugin } from 'innet'
import { placeholder } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useAction, useApi, useServerPlugin } from '../../../hooks'
import rapidoc from './rapidoc.html'
import redoc from './redoc.html'
import scalar from './scalar.html'
import swagger from './swagger.html'

function camelToDash (str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}

export const uiPresets = { rapidoc, redoc, scalar, swagger } satisfies Record<string, string>

export interface UiProps {
  html?: string
  params?: Record<string, any>
  path?: string
}

export const ui: HandlerPlugin = () => {
  const {
    html = uiPresets.swagger,
    params = {},
    path = process.env.INNET_UI_PATH || '/ui',
  } = useProps<UiProps>() || {}

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
