import { RulesError } from '../helpers'
import { type Rule } from '../types'

import { type Bin } from '../../FileData'

export function maxBin (max: number): Rule {
  return (value: Bin, data?: object) => {
    if (value.size > max) {
      throw new RulesError('maxBin', {
        max,
        ...data,
      })
    }

    return value
  }
}
