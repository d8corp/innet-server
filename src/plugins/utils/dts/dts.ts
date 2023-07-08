import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import dtsGenerator, { parseSchema } from 'dtsgenerator'
import { Config } from 'dtsgenerator/dist/core/config'
import fs from 'fs'

import { useApi } from '../../../hooks'

export interface DtsProps extends Partial<Config> {
  path: string
}

export const dts: HandlerPlugin = () => {
  const { path, ...config } = useProps<DtsProps>()
  const { docs } = useApi()

  dtsGenerator({
    contents: [parseSchema(JSON.parse(JSON.stringify(docs)))],
    config,
  }).then(content => fs.promises.writeFile(path, content)).catch(error => {
    console.error(error)
  })
}
