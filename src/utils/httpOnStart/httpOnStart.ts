import { type ServerStartParams } from '../../types'

export function httpOnStart ({
  apiPaths,
  https,
  port,
}: ServerStartParams) {
  apiPaths.forEach(path => {
    console.log(`http${https ? 's' : ''}://localhost:${port}${path}`)
  })
}
