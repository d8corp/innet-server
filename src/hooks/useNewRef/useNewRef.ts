import { useApp } from 'innet'
import { JSXElement } from '@innet/jsx'

export function useNewRef () {
  const { type } = useApp<JSXElement>()
  return type.name
}
