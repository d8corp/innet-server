import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useStand } from '../../hooks/useStand'

export interface VariableProps {
  /**
   * A server url parameter
   * */
  key: string

  /**
   * A URL to the target host.
   * This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI document is being served.
   * Variable substitutions will be made when a variable is named in {brackets}.
   * */
  default: string

  /**
   * A URL to the target host.
   * This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI document is being served.
   * Variable substitutions will be made when a variable is named in {brackets}.
   * */
  enum?: [string, ...string[]]

  /**
   * An optional string describing the host designated by the URL.
   * [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.
   * */
  description?: string
}

export const variable: HandlerPlugin = () => {
  const { server } = useStand()
  const { key, ...rest } = useProps<VariableProps>()

  if (!server.variables) {
    server.variables = {}
  }

  server.variables[key] = rest
}
