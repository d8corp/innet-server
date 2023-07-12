import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useHost } from '../../../hooks'

export interface VariableProps {
  /**
   * A server url parameter
   * */
  key: string

  /**
   * The default value to use for substitution,
   * which SHALL be sent if an alternate value is not supplied.
   * If the enum is defined, the value MUST exist in the enum's values.
   * */
  default: string

  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   * The array MUST NOT be empty.
   * */
  enum?: [string, ...string[]]

  /**
   * An optional description for the server variable.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string
}

export const variable: HandlerPlugin = () => {
  const { server } = useHost()
  const { key, ...rest } = useProps<VariableProps>()

  if (!server.variables) {
    server.variables = {}
  }

  server.variables[key] = rest
}
