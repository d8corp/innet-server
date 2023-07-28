import innet, { type HandlerPlugin, useHandler } from 'innet'
import { useChildren } from '@innet/jsx'

export interface DevProps {

}

export const dev: HandlerPlugin = () => {
  if (process.env.NODE_ENV === 'development') {
    innet(useChildren(), useHandler())
  }
}
