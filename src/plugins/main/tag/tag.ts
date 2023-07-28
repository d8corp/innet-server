import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { tagContext, useApi } from '../../../hooks'

export interface TagProps {
  /** The name of the tag. */
  name: string

  /**
   * A description for the tag.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string
}

export const tag: HandlerPlugin = () => {
  if (useContext(tagContext)) {
    throw Error('You cannot use a <tag> inside another one')
  }

  const { name, description } = useProps<TagProps>()
  const children = useChildren()
  const { docs } = useApi()
  const tag = description ? { name, description } : { name }

  if (!docs.tags) {
    docs.tags = [tag]
  } else if (!docs.tags.find(({ name: tagName }) => tagName === name)) {
    docs.tags.push(tag)
  } else {
    throw Error(`You cannot use two tags with the same name (${name})`)
  }

  const handler = useNewHandler()
  handler[tagContext.key] = tag

  innet(children, handler)
}
