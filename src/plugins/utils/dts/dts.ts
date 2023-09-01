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
      `interface Bin {
  filename: string
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
  extension?: string
}
${content
        .replaceAll(';', '')
        .replaceAll('number // int64', 'bigint')
        .replaceAll('string // binary', 'Bin')
        .replaceAll('string // date-time', 'Date')}`,
    )
  }).catch(error => {
    console.warn(error)
  })
}
