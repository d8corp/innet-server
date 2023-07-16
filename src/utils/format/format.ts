import { FormatterMap } from '../../types'

export function format <B extends object> (target: B, map: FormatterMap<B>, defaultValues: Record<string, any>) {
  for (const key in map) {
    if (key in target) {
      for (const format of (map as any)[key]) {
        target[key] = format(target[key])
      }
    } else if (key in defaultValues) {
      const value = defaultValues[key]
      target[key] = typeof value === 'function' ? value() : value
    }
  }
}
