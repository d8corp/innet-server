import { Context, useContext } from '@innet/jsx'

import { ResponseObject } from '../../types'

export interface ResponseContext {
  response: ResponseObject
}

export const responseContext = new Context<ResponseContext>()

export function useResponseContext () {
  return useContext(responseContext)
}
