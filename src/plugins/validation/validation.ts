import { validation as validate, ValidationMap, ValidationResponse } from '@cantinc/utils'
import { Context } from '@innet/jsx'

import { ACTION, Action, Resources } from '../../action'

export interface ValidationProps <T> {
  map: ValidationMap<T>
  resource?: Resources
}

export interface ValidationJsxElement<T> {
  props: ValidationProps<T>
  children?: any
}

export interface ValidationContext {
  handleError: (e: ValidationResponse<any>) => any
}

export const validationContext = new Context<ValidationContext>({
  handleError: () => {},
})

export function validation <T extends object, E extends object> ({ props, children }: ValidationJsxElement<T>, handler) {
  const action: Action = handler[ACTION]

  if (!action) {
    throw Error('`validation` should be inside `server`')
  }

  const { map, resource = 'body' } = props

  const run = () => {
    const data = action[resource]

    if (!data) throw Error(`cannot find ${resource} in action`)

    return validate<T, E>(map, data as T).then(e => {
      if (e) {
        return validationContext.get(handler).handleError(e)
      }

      return children
    })
  }

  if (resource === 'body' || resource === 'files') {
    return action.parseBody().then(run)
  }

  return run()
}
