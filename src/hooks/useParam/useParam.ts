import { Context, useContext } from '@innet/jsx'

import { type ParamProps } from '../../plugins'

export interface ParamContext {
  props: ParamProps
}

export const paramContext = new Context<ParamContext>()

export function useParam () {
  const param = useContext(paramContext)

  if (!param) {
    throw Error('`useParam` MUST be used in <param>')
  }

  return param
}
