import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'
import { OpenAPIV3_1 as OpenApi } from 'openapi-types'

import { useApi } from '../../hooks'
import { standContext } from '../../hooks/useStand'

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
  const { servers } = docs

  const server: OpenApi.ServerObject = {
    ...props,
  }

  servers.push(server)

  handler[standContext.key] = { server }

  innet(children, handler)
}
