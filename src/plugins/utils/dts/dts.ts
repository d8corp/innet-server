import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import dtsGenerator, { parseSchema } from 'dtsgenerator'
import { type Config } from 'dtsgenerator/dist/core/config'
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
  }).then(async content => {
    await fs.promises.writeFile(
      path,
      content.replaceAll('string; // date-time', 'Date; // date-time'),
    )
  }).catch(error => {
    console.error(error)
  })
}
