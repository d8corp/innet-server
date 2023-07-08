import { FormatterMap } from '../../types'

export function format <B extends object> (target: B, map: FormatterMap<B>) {
  for (const key in map) {
    if (key in target) {
      for (const format of (map as any)[key]) {
        target[key] = format(target[key])
      }
    }
  }
}
