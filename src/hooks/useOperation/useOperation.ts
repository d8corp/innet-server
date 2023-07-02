import { Context, useContext } from '@innet/jsx'

import { OperationObject } from '../../types'

export interface OperationContext {
  operation: OperationObject
  path: string
}

export const operationContext = new Context<OperationContext>()

export function useOperation () {
  return useContext(operationContext)
}
