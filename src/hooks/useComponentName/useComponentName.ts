import { useApp } from 'innet'
import { type JSXElement } from '@innet/jsx'

export function useComponentName () {
  const { type } = useApp<JSXElement>()
  return type.name
}
