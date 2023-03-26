import innet from 'innet'
import fs from 'fs'
import mime from 'mime'

import { actionContext } from '../../hooks'

export interface FileProps {
  path: string
}

export function file ({ props, children = null }, handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <file> inside <action>')
  }

  const { path }: FileProps = props

  if (fs.existsSync(path)) {
    const stat = fs.statSync(path)

    if (stat.isFile()) {
      const readStream = fs.createReadStream(path)

      const result = innet(children, handler)

      const run = () => {
        action.res.writeHead(200, {
          'Content-Type': mime.getType(path),
          'Content-Length': stat.size,
        })
        readStream.pipe(action.res)
      }

      if (result instanceof Promise) {
        result.then(run)
      } else {
        run()
      }

      return new Promise((resolve, reject) => {
        readStream.once('end', () => resolve(result))
        readStream.once('error', reject)
      })
    }
  }
}
