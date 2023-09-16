import innet, { type HandlerPlugin, useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

export interface EnvProps {
  is: string[] | string
  of?: string
}

export const env: HandlerPlugin = () => {
  const { of = 'NODE_ENV', is } = useProps<EnvProps>()

  if (Array.isArray(is) ? is.includes(process.env[of] as string) : process.env[of] === is) {
    innet(useChildren(), useHandler())
  }
}
