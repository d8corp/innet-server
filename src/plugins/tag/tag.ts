import innet, { HandlerPlugin, useHandler, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { tagsContext, useApi } from '../../hooks'

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
  const tags = useContext(tagsContext)
  const { name, description } = useProps<TagProps>()
  const children = useChildren()

  if (description) {
    const { docs } = useApi()

    if (!docs.tags) {
      docs.tags = [{ name, description }]
    } else if (!docs.tags.find(({ name: tagName }) => tagName === name)) {
      docs.tags.push({ name, description })
    }
  }

  if (tags.includes(name)) {
    innet(children, useHandler())
    return
  }

  const handler = useNewHandler()
  handler[tagsContext.key] = [...tags, name]

  innet(children, handler)
}
