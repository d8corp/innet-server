import { RulesError } from '../helpers'
import { type Rule } from '../types'

import { type Bin } from '../../FileData'

export function minBin (min: number): Rule {
  return (value: Bin, data?: object) => {
    if (value.size < min) {
      throw new RulesError('minBin', {
        value,
        min,
        ...data,
      })
    }

    return value
  }
}
