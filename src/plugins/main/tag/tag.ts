import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { tagContext, useApi } from '../../../hooks'
import { type TagObject } from '../../../types'

export interface TagProps {
  /**
   * A description for the tag.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /** The name of the tag. */
  name: string
}

export const tag: HandlerPlugin = () => {
  if (useContext(tagContext)) {
    throw Error('You cannot use a <tag> inside another one')
  }

  const {
    description,
    name,
  } = useProps<TagProps>()
  const children = useChildren()
  const { docs } = useApi()
  const tag: TagObject = { name }

  if (description) {
    tag.description = description
  }

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
