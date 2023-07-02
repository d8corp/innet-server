import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { standContext, useApi, useOperation } from '../../hooks'
import { ServerObject } from '../../types'

export interface StandProps {
  /**
   * A URL to the target host.
   * This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI document is being served.
   * Variable substitutions will be made when a variable is named in {brackets}.
   * */
  url: string

  /**
   * An optional string describing the host designated by the URL.
   * [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.
   * */
  description?: string
}

export const stand: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { docs } = useApi()
  const props = useProps<StandProps>()
  const children = useChildren()
  const { operation } = useOperation() || {}
  const target = operation || docs

  if (!target.servers) {
    target.servers = []
  }

  const { servers } = operation || docs

  const server: ServerObject = {
    ...props,
  }

  servers.push(server)

  handler[standContext.key] = { server }

  innet(children, handler)
}
