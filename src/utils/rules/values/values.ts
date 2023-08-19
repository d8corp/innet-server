import { RulesError } from '../helpers'

export function values (values: any[]) {
  return (value: any, data?: object) => {
    if (!values.includes(value)) {
      throw new RulesError('values', {
        ...data,
        value,
        values,
      })
    }

    return value
  }
}
