import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { onDestroy } from 'watch-state'

import { useApi } from '../../../hooks'
import { RequestPlugin } from '../../../types'
import html from './swagger.html'

export interface SwaggerProps {
  path: string
}

export const swagger: HandlerPlugin = () => {
  const { path } = useProps<SwaggerProps>()
  const { docs, requestPlugins } = useApi()

  let swaggerResponse: string

  const listener: RequestPlugin = (req, res) => {
    if (req.url === path) {
      if (!swaggerResponse) {
        swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`)
      }

      res.statusCode = 200
      res.write(swaggerResponse)
      res.end()
      return true
    }
  }

  requestPlugins.add(listener)
  onDestroy(() => {
    requestPlugins.delete(listener)
  })
}
