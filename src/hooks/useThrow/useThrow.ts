import { useApp } from 'innet'
import { placeholder } from '@cantinc/utils'
import { JSXElement } from '@innet/jsx'

export function useThrow (message: string) {
  const { type } = useApp<JSXElement>()
  throw Error(placeholder(message, { type: typeof type === 'string' ? type : type.name }))
}
