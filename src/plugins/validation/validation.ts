import innet from 'innet'
import { validation as validate, ValidationMap, ValidationResponse } from '@cantinc/utils'
import { Context } from '@innet/jsx'

import { actionContext } from '../../hooks'
import { Resources } from '../../utils'

export interface ValidationProps <T> {
  map: ValidationMap<T>
  resource?: Resources
}

export interface ValidationJsxElement<T> {
  props: ValidationProps<T>
  children?: any
}

export interface ValidationContext {
  handleError?: (e: ValidationResponse<any>) => any
}

export const validationContext = new Context<ValidationContext>({})

export function validation <T extends object, E extends object> ({ props, children }: ValidationJsxElement<T>, handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <validation> inside <action>')
  }

  const { map, resource = 'body' } = props

  const run = () => {
    const data = action[resource]

    if (!data) throw Error(`cannot find ${resource} in action`)

    const result = validate<T, E>(map, data as T)

    if (result) {
      const { handleError } = validationContext.get(handler)
      return handleError ? innet(handleError(result), handler) : undefined
    }

    return innet(children, handler)
  }

  if (resource === 'body' || resource === 'files') {
    return action.parseBody().then(run)
  }

  return run()
}
