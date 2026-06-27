import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { promises } from 'fs'

import { useApi, useEffect } from '../../../hooks'
import { generateTypes } from '../../../utils'

export interface DtsProps {
  /**
   * Global namespace name for generated types.
   *
   * @default 'Api'
   *
   * @example
   * ```tsx
   * <dts namespace='API' />
   * ```
   */
  namespace?: string

  /**
   * Output path for the generated TypeScript definitions file.
   *
   * @default 'src/api.d.ts'
   *
   * @example
   * ```tsx
   * <dts path='src/types.d.ts' />
   * ```
   */
  path?: string
}

export const dts: HandlerPlugin = () => {
  const {
    namespace = process.env.INNET_DTS_NAMESPACE,
    path = process.env.INNET_DTS_PATH || 'src/apiTypes.d.ts',
  } = useProps<DtsProps>() || {}
  const { docs } = useApi()

  useEffect(() => {
    promises.writeFile(path, generateTypes(docs, namespace)).catch(e => {
      console.error(e)
    })
  })
}
