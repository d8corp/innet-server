import { useApp } from 'innet'
import { type JSXElement } from '@innet/jsx'

export function useOneElementError () {
  const { type } = useApp<JSXElement<string>>()
  throw Error(`You can use only one <${type}> in <api>`)
}
