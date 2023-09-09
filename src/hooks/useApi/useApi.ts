import { Context, useContext } from '@innet/jsx'

import { type Document, type Endpoints, type Fallback } from '../../types'
import { type Rule } from '../../utils'

export interface ApiContext {
  docs: Document
  endpoints: Endpoints
  prefix: string
  fallback?: Fallback
  refRules: Record<string, Rule>
}

export const apiContext = new Context<ApiContext>()

export function useApi () {
  const api = useContext(apiContext)

  if (!api) {
    throw Error('Use `useApi` in <api>')
  }

  return api
}
