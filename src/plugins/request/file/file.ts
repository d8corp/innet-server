import innet, { useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'
import fs from 'fs'
import { type OutgoingHttpHeaders } from 'http'
import mime from 'mime'

import { useResponse, useThrow } from '../../../hooks'

export interface FileProps {
  path: string
}

export function file () {
  const handler = useHandler()
  const props = useProps()
  const children = useChildren()
  const res = useResponse()

  if (!res) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  const { path }: FileProps = props

  if (fs.existsSync(path)) {
    const stat = fs.statSync(path)

    if (stat.isFile()) {
      const readStream = fs.createReadStream(path)
      const type = mime.getType(path)

      const headers: OutgoingHttpHeaders = {
        'Content-Length': stat.size,
      }

      if (type) {
        headers['Content-Type'] = type
      }

      res.writeHead(200, headers)

      readStream.pipe(res)
    }
  } else {
    innet(children, handler)
  }
}
