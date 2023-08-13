import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Validator } from '../../types'
import { type ObjectValidatorMap } from '../../utils'

export const objectValidatorContext = new Context<ObjectValidatorMap, null>(null)

export type SetObjectValidator = (map: Record<string, Validator<any, any>>) => void

export function useSetObjectValidator (): SetObjectValidator {
  const objectValidator = useContext(objectValidatorContext)

  if (!objectValidator) {
    useThrow('Use <{type}> inside <object>')
  }

  return map => {
    Object.assign(objectValidator, map)
  }
}
