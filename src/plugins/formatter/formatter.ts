import innet from 'innet'

import { actionContext } from '../../hooks'
import { Resources } from '../../utils'

export interface Formatter<V> {
  (value?: any): V
}

export type FormatterMap<B> = {
  [K in keyof B]?: Formatter<B[K]>[]
}

export interface FormatterProps <T> {
  map: FormatterMap<T>
  resource?: Resources
}

export interface FormatterJsxElement<T> {
  props: FormatterProps<T>
  children?: any
}

export function formatter <T extends object, E extends object> ({ props, children }: FormatterJsxElement<T>, handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <formatter> inside <action>')
  }

  const { map, resource = 'body' } = props

  const run = () => {
    const data = action[resource]

    if (!data) throw Error(`cannot find ${resource} in action`)

    for (const key in map) {
      if (key in data) {
        for (const format of (map as any)[key]) {
          data[key] = format(data[key])
        }
      }
    }

    return innet(children, handler)
  }

  if (resource === 'body' || resource === 'files') {
    return action.parseBody().then(run)
  }

  return run()
}
