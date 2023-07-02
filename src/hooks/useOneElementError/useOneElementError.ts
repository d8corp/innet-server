import { useApp } from 'innet'
import { JSXElement } from '@innet/jsx'

export function useOneElementError () {
  const { type } = useApp<JSXElement>()
  throw Error(`You can use only one <${type}> in <api>`)
}
