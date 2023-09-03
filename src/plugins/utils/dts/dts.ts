import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { promises } from 'fs'

import { useApi } from '../../../hooks'
import { generateTypes } from '../../../utils'

export interface DtsProps {
  path: string
}

export const dts: HandlerPlugin = () => {
  const { path } = useProps<DtsProps>()
  const { docs } = useApi()

  promises.writeFile(path, generateTypes(docs)).catch(e => {
    console.error(e)
  })
}
