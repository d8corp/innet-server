import { type RulesErrors } from './types'

export class RulesError extends Error {
  data: { error: RulesErrors } & object

  constructor (error: RulesErrors, data?: object) {
    super(`Validation Error: ${error}`)
    this.data = {
      error,
      ...data,
    }
  }
}

export function addKey (key: number | string, data?: any) {
  return data?.key ? `${data.key as string}.${key}` : key
}
