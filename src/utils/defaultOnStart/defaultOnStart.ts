import { ServerStartParams } from '../../types'

export function defaultOnStart ({ port, https }: ServerStartParams) {
  console.log(`http${https ? 's' : ''}://localhost:${port}`)
}
