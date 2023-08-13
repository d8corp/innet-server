import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Validator } from '../../types'

export type ValidatorContext = (validator: Validator<any, any>) => void

export const validatorContext = new Context<ValidatorContext, null>(null)

export function useSetValidator () {
  const setValidator = useContext(validatorContext)

  if (!setValidator) {
    useThrow('Use <{type}> inside <endpoint>')
  }

  return setValidator
}

export function useValidator (validator: Validator<any, any>) {
  useSetValidator()(validator)
}
