import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useApi } from '../../hooks'

export interface ContactProps {
  /** The identifying name of the contact person/organization. */
  name?: string

  /** The URL pointing to the contact information. This MUST be in the form of a URL. */
  url?: string

  /** The email address of the contact person/organization. This MUST be in the form of an email address. */
  email?: string
}

export const contact: HandlerPlugin = () => {
  const { docs } = useApi()
  const props = useProps()
  const { contact } = docs.info

  if (contact) {
    Object.assign(contact, props)
  } else {
    docs.info.contact = { ...props }
  }
}
