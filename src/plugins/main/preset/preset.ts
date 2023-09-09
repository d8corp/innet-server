import innet, { useHandler } from 'innet'
import { Context, useChildren, useContext } from '@innet/jsx'
import { type IncomingMessage, type ServerResponse } from 'http'

import { actionContext, useServer } from '../../../hooks'
import { Action } from '../../../utils'

export interface PresetProps {}

export type PresetCondition = (action: Action) => boolean

export const presetCondition =
  new Context<PresetCondition, PresetCondition>(() => true)

export function preset () {
  const { server } = useServer()
  const handler = useHandler()
  const children = useChildren()
  const condition = useContext(presetCondition)

  const listener = (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const action = new Action(req, res)

    if (condition(action)) {
      const newHandler = Object.create(handler)
      actionContext.set(newHandler, action)

      innet(children, newHandler)
    }
  }

  server.addListener('request', listener)
}
