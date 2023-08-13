import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Formatter } from '../../types'

export type FormatterContext = (formatter: Formatter<any, any>) => void

export const formatterContext = new Context<FormatterContext, null>(null)

export function useSetFormatter () {
  const setFormatter = useContext(formatterContext)

  if (!setFormatter) {
    useThrow('Use <{type}> inside <endpoint>')
  }

  return setFormatter
}

export function useFormatter (formatter: Formatter<any, any>) {
  useSetFormatter()(formatter)
}
