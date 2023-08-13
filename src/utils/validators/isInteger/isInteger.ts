import { type IntegerFormats, type ValidationErrorData } from '../../../types'

export interface IntegerData {
  format: IntegerFormats
}

const sizes: Record<IntegerFormats, number | bigint> = {
  int32: 2_147_483_647,
  int64: BigInt('9223372036854775807'),
}

export function isInteger (format: IntegerFormats) {
  const validator = format === 'int32' ? isNaN : (value: any) => isNaN(parseInt(value))

  return (value: number, data?: object): ValidationErrorData => {
    if (validator(value) || value > sizes[format] || value < -sizes[format]) {
      return {
        error: 'integer',
        format,
        ...data,
      }
    }
  }
}
