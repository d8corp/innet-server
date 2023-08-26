import { RulesError } from '../helpers'
import { type Rule } from '../types'

import { type Bin } from '../../FileData'

export function binaryAccept (accept: string): Rule {
  const acceptChips: string[] = accept
    .split(',')
    .map(chip => chip.trim())

  const acceptExtensions: string[] = acceptChips
    .filter(chip => chip.startsWith('.'))
    .map(chip => chip.slice(1))

  const acceptTypes: [string, string][] = acceptChips
    .filter(chip => !chip.startsWith('.'))
    .map(chip => chip.split('/', 2) as [string, string])

  return (value: Bin, data?: object) => {
    for (let i = 0; i < acceptExtensions.length; i++) {
      if (value.extension === acceptExtensions[i]) return value
    }

    const [type1, type2] = value.type.split('/', 2)

    for (let i = 0; i < acceptTypes.length; i++) {
      const [acceptType1, acceptType2] = acceptTypes[i]
      if (acceptType1 !== '*' && acceptType1 !== type1) continue
      if (acceptType2 !== '*' && acceptType2 !== type2) continue
      return value
    }

    throw new RulesError('binaryAccept', {
      type: value.type,
      extensions: value.extension,
      accept,
      ...data,
    })
  }
}
