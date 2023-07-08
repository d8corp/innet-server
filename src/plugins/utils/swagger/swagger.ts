import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { ServerResponse } from 'http'
import { onDestroy } from 'watch-state'

import { useApi, useServer } from '../../../hooks'
import html from './swagger.html'

export interface SwaggerProps {
  path: string
}

export const swagger: HandlerPlugin = () => {
  const { path } = useProps<SwaggerProps>()
  const { server } = useServer()
  const { docs } = useApi()

  const listener = (req: Request, res: ServerResponse) => {
    if (req.url === path) {
      if (res.writableEnded) {
        return console.error(`<swagger path="${path}"> The path already used.`)
      }

      res.statusCode = 200
      res.write(html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`))
      res.end()
    }
  }

  server.on('request', listener)
  onDestroy(() => {
    server.off('request', listener)
  })
}
