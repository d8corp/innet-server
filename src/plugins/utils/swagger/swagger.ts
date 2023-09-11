import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useAction, useApi, useServerPlugin } from '../../../hooks'
import html from './swagger.html'

export interface SwaggerProps {
  path?: string
}

export const swagger: HandlerPlugin = () => {
  const {
    path = process.env.INNET_SWAGGER_PATH || '/swagger-ui',
  } = useProps<SwaggerProps>() || {}
  const { docs, prefix } = useApi()

  let swaggerResponse: string

  useServerPlugin(() => {
    const action = useAction()

    if (action.path === prefix + path) {
      if (!swaggerResponse) {
        swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`)
      }

      action.res.statusCode = 200
      action.res.write(swaggerResponse)
      action.res.end()
      return true
    }
  })
}
