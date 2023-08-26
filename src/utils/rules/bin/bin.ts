import { RulesError } from '../helpers'

import { Bin } from '../../FileData'

export function bin (value: any, data?: object) {
  if (!(value instanceof Bin)) {
    throw new RulesError('binary', {
      value,
      ...data,
    })
  }

  return value
}
