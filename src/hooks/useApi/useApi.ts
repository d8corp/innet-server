import { Children, Context, useContext } from '@innet/jsx'
import { OpenAPIV3_1 as OpenApi } from 'openapi-types'

export interface Endpoint {
  [key: string]: Endpoint | Children
}

export interface ApiContext {
  docs: OpenApi.Document
  endpoints: Endpoint
}

export const apiContext = new Context<ApiContext>()

export function useApi () {
  const api = useContext(apiContext)

  if (!api) {
    throw Error('Use `useApi` in <api>')
  }

  return api
}
