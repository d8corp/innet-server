import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { endpointContext, hostContext, useApi } from '../../../hooks'
import { type ServerObject } from '../../../types'

export interface HostProps {
  /**
   * An optional string describing the host designated by the URL.
   * [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * A URL to the target host.
   * This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI document is being served.
   * Variable substitutions will be made when a variable is named in {brackets}.
   * */
  url: string
}

export const host: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { docs } = useApi()
  const props = useProps<HostProps>()
  const children = useChildren()
  const { operation } = useContext(endpointContext) || {}
  const target = operation || docs

  if (!target.servers) {
    target.servers = []
  }

  const { servers } = operation || docs

  const server: ServerObject = {
    ...props,
  }

  // @ts-expect-error: FIXME
  servers.push(server)

  handler[hostContext.key] = { server }

  innet(children, handler)
}
