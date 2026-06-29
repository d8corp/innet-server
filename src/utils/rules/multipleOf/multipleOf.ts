import { RulesError } from '../helpers'

export function multipleOf (multiple: bigint | number) {
  return (value: any, data?: object) => {
    if (!['bigint', 'number'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if (value % (multiple as any)) {
      throw new RulesError('multipleOf', {
        ...data,
        multiple,
        value,
      })
    }

    return value
  }
}
