import { useApp } from 'innet'
import { type JSXElement } from '@innet/jsx'

export function useComponentName (): string {
  const { type } = useApp<JSXElement>()
  return type.name
}
