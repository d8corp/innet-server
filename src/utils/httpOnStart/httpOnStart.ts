import { type ServerStartParams } from '../../types'

export function httpOnStart ({
  https,
  port,
}: ServerStartParams) {
  console.log(`http${https ? 's' : ''}://localhost:${port}`)
}
