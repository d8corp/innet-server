import { Context, useContext } from '@innet/jsx'

import { OperationObject } from '../../types'

export const operationContext = new Context<OperationObject>()

export function useOperation () {
  return useContext(operationContext)
}
