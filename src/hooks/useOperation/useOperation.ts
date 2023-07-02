import { Context, useContext } from '@innet/jsx'

import { EndpointsMethods, OperationObject } from '../../types'

export interface OperationContext {
  operation: OperationObject
  path: string
  method: EndpointsMethods
}

export const operationContext = new Context<OperationContext>()

export function useOperation () {
  return useContext(operationContext)
}
