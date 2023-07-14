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
   * If the `values` is defined, the `value` MUST exist in the `values`.
   * */
  value?: string

  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   * The array MUST NOT be empty.
   * */
  values?: [string, string, ...string[]]

  /**
   * An optional description for the server variable.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string
}

export const variable: HandlerPlugin = () => {
  const { server } = useHost()
  const { key, values, value = values?.[0], ...rest } = useProps<VariableProps>()

  if (!server.variables) {
    server.variables = {}
  }

  server.variables[key] = { ...rest, default: value, enum: values }
}
