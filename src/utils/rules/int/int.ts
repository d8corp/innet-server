import { RulesError } from '../helpers'

import { type IntegerFormats } from '../../../types'

const sizes: Record<IntegerFormats, bigint | number> = {
  int32: 2_147_483_647,
  int64: BigInt('9223372036854775807'),
}

export function int (format: IntegerFormats) {
  return (value: any, data?: object) => {
    let result: bigint | number

    if (format === 'int32') {
      result = parseInt(value)
    } else {
      try {
        result = BigInt(value)
      } catch (e) {
        result = NaN
      }
    }

    if (Number.isNaN(result)) {
      throw new RulesError('integer', {
        format,
        value,
        ...data,
      })
    }

    if (result > sizes[format]) {
      throw new RulesError('integer', {
        format,
        max: sizes[format],
        value: result,
        ...data,
      })
    }

    if (result < -sizes[format]) {
      throw new RulesError('integer', {
        format,
        min: -sizes[format],
        value: result,
        ...data,
      })
    }

    return result
  }
}
