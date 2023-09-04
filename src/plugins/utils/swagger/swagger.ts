import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useApi, useRequestPlugin } from '../../../hooks'
import html from './swagger.html'

export interface SwaggerProps {
  path?: string
}

export const swagger: HandlerPlugin = () => {
  const { path = '/swagger-ui' } = useProps<SwaggerProps>() || {}
  const { docs, prefix } = useApi()

  let swaggerResponse: string

  useRequestPlugin((req, res) => {
    if (req.url === prefix + path) {
      if (!swaggerResponse) {
        swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`)
      }

      res.statusCode = 200
      res.write(swaggerResponse)
      res.end()
      return true
    }
  })
}
