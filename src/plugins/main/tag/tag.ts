import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { tagContext, useApi } from '../../../hooks'
import { type Document, type TagObject } from '../../../types'

export interface TagGroup {
  name: string
  tags: string[]
}

export const TAG_GROUP_NAME = 'x-tagGroups'

export interface TagProps {
  children?: any
  /**
   * A description for the tag.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /** A name of the tag group. */
  group?: string

  /** A name of the tag. */
  name: string
}

export const tag: HandlerPlugin = () => {
  if (useContext(tagContext)) {
    throw Error('You cannot use a <tag> inside another one')
  }

  const {
    children,
    description,
    group,
    name,
  } = useProps<TagProps>()

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

  if (group) {
    if (docs[TAG_GROUP_NAME as keyof Document]) {
      const groups = docs[TAG_GROUP_NAME as keyof Document] as TagGroup[]
      const tagGroup = groups.find(({ name }) => name === group)

      if (tagGroup) {
        tagGroup.tags.push(name)
      } else {
        groups.push({ name: group, tags: [name] })
      }
    } else {
      // @ts-expect-error Custom field
      docs[TAG_GROUP_NAME] = [{ name: group, tags: [name] }] satisfies TagGroup[]
    }
  }

  const handler = useNewHandler()
  handler[tagContext.key] = tag

  innet(children, handler)
}
