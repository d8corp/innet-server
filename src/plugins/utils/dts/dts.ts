import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { promises } from 'fs'

import { useApi } from '../../../hooks'
import { generateTypes } from '../../../utils'

export interface DtsProps {
  path?: string
  namespace?: string
}

export const dts: HandlerPlugin = () => {
  const {
    path = process.env.INNET_DTS_PATH || 'src/apiTypes.d.ts',
    namespace = process.env.INNET_DTS_NAMESPACE,
  } = useProps<DtsProps>() || {}
  const { docs } = useApi()

  promises.writeFile(path, generateTypes(docs, namespace)).catch(e => {
    console.error(e)
  })
}
