import { RulesError } from '../helpers'

import { type IntegerFormats } from '../../../types'

const sizes: Record<IntegerFormats, number | bigint> = {
  int32: 2_147_483_647,
  int64: BigInt('9223372036854775807'),
}

export function int (format: IntegerFormats) {
  const validator: (val: any) => any = format === 'int32' ? isNaN : (value: any) => isNaN(parseInt(value))

  return (value: any, data?: object) => {
    const result = format === 'int32' ? Number(value) : BigInt(value)

    if (validator(result) || result > sizes[format] || result < -sizes[format]) {
      throw new RulesError('integer', {
        format,
        ...data,
      })
    }

    return result
  }
}
