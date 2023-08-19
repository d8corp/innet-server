import { RulesError } from '../helpers'
import { type Rule } from '../types'

export function oneOf (formatters: Rule[]) {
  return (value: any, data?: object) => {
    const rawErrors = []

    for (const formatter of formatters) {
      try {
        return formatter(value, data)
      } catch (e: any) {
        rawErrors.push(e.data)
      }
    }

    const errors: any[] = []
    const errorsQueue: any[] = [...rawErrors]
    let currentError: any

    while ((currentError = errorsQueue.pop())) {
      if (currentError.error === 'oneOf') {
        errorsQueue.push(...currentError.errors)
      } else {
        errors.push(currentError)
      }
    }

    throw new RulesError('oneOf', { errors })
  }
}
