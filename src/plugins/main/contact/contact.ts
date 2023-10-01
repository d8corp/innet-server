import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useApi, useOneElementError } from '../../../hooks'

export interface ContactProps {
  /** The email address of the contact person/organization. This MUST be in the form of an email address. */
  email?: string

  /** The identifying name of the contact person/organization. */
  name?: string

  /** The URL pointing to the contact information. This MUST be in the form of a URL. */
  url?: string
}

export const contact: HandlerPlugin = () => {
  const { docs } = useApi()
  const props = useProps()
  const { contact } = docs.info

  if (contact) {
    useOneElementError()
  }

  docs.info.contact = props
}
