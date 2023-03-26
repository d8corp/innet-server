import innet, { Handler } from 'innet'

import { CONTINUE } from '../../constants'
import { actionContext, serverContext } from '../../hooks'
import { Action, ActionParams } from '../../utils'

export interface ActionProps extends ActionParams {
  unknownError?: string
  onError?: (e: Error, action: Action) => any
}

export function action ({ props = {} as ActionProps, children }, handler: Handler) {
  const server = serverContext.get(handler)

  if (!server) {
    throw Error('Use <action> inside <server>')
  }

  const { onError, unknownError = '' } = props

  server.on('request', async (req, res) => {
    const childHandler = Object.create(handler)

    childHandler[actionContext.key] = new Action(req, res, props)

    if (children) {
      try {
        const result = await innet(children, childHandler)

        if (result === CONTINUE) {
          return
        }

        if (typeof result === 'string') {
          res.write(result)
        }
      } catch (e) {
        res.statusCode = 520
        onError?.(e, actionContext.get(childHandler))
        res.write(unknownError)
      }
    }

    res.end()
  })
}
