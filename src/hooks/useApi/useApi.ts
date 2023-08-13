import { Context, useContext } from '@innet/jsx'

import { type Document, type Endpoints, type Fallback, type Formatter, type RequestPlugin, type Validator } from '../../types'

export interface ApiContext {
  docs: Document
  endpoints: Endpoints
  prefix: string
  requestPlugins: Set<RequestPlugin>
  fallback?: Fallback
  refFormatters: Record<string, Formatter<any, any>>
  refValidators: Record<string, Validator<any, any>>
}

export const apiContext = new Context<ApiContext>()

export function useApi () {
  const api = useContext(apiContext)

  if (!api) {
    throw Error('Use `useApi` in <api>')
  }

  return api
}
