import fs from 'fs'
import mime from 'mime'

import { Action, ACTION } from '../../action'

export interface FileProps {
  path: string
}

export function file ({ props, children = null }, handler) {
  const { res }: Action = handler[ACTION]
  const { path }: FileProps = props

  if (fs.existsSync(path)) {
    const stat = fs.statSync(path)

    if (stat.isFile()) {
      res.writeHead(200, {
        'Content-Type': mime.getType(path),
        'Content-Length': stat.size,
      })

      const readStream = fs.createReadStream(path)

      readStream.pipe(res)

      return new Promise((resolve, reject) => {
        readStream.once('end', () => resolve(children))
        readStream.once('error', reject)
      })
    }
  }
}
