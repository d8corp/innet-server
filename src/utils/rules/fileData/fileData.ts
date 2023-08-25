import { RulesError } from '../helpers'

import { FileData } from '../../FileData'

export function fileData (value: any, data?: object) {
  if (!(value instanceof FileData)) {
    throw new RulesError('file', {
      value,
      ...data,
    })
  }

  return value
}
