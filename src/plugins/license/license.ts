import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useApi } from '../../hooks'

export interface LicenseProps {
  /**
   * The license name used for the API.
   * @example: Apache 2.0
   * */
  name: string

  /**
   * An [SPDX](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) license expression for the API.
   * The `identifier` field is mutually exclusive of the `url` field.
   * @example: Apache-2.0
   * */
  identifier?: string

  /**
   * A URL to the license used for the API.
   * This MUST be in the form of a URL.
   * The `url` field is mutually exclusive of the `identifier` field.
   * */
  url?: string
}

export const license: HandlerPlugin = () => {
  const { docs } = useApi()
  const props = useProps<LicenseProps>()
  docs.info.license = { ...props }
}