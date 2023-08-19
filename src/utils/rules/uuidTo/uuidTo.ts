import { RulesError } from '../helpers'

const UUID_REG = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/

export function uuidTo (value: any, data?: object) {
  if (!UUID_REG.test(value)) {
    throw new RulesError('uuid', data)
  }

  return value
}
