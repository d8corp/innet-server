import { Context, useContext } from '@innet/jsx'

import { type ServerPlugin } from '../useServer'
import { useThrow } from '../useThrow'

export const serverPlugins = new Context<Set<ServerPlugin>>()

export function useServerPlugins (): Set<ServerPlugin> {
  const plugins = useContext(serverPlugins)

  if (!plugins) {
    useThrow('Use <{type}> in <server>')
  }

  return plugins
}
