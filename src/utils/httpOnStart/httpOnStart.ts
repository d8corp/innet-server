import { ServerStartParams } from '../../types'

export function httpOnStart ({ port, https }: ServerStartParams) {
  console.log(`http${https ? 's' : ''}://localhost:${port}`)
}
