import { type Handler } from 'innet'
import { Context, useContext } from '@innet/jsx'

import { type ServerPlugin } from '../useServer'
import { useThrow } from '../useThrow'

export const serverPlugins = new Context<Map<ServerPlugin, Handler>>()

export function useServerPlugins (): Map<ServerPlugin, Handler> {
  const plugins = useContext(serverPlugins)

  if (!plugins) {
    useThrow('Use <{type}> in <server>')
  }

  return plugins
}
