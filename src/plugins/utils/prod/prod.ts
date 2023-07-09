import innet, { HandlerPlugin, useHandler } from 'innet'
import { useChildren } from '@innet/jsx'

export interface ProdProps {

}

export const prod: HandlerPlugin = () => {
  if (process.env.NODE_ENV === 'production') {
    innet(useChildren(), useHandler())
  }
}
