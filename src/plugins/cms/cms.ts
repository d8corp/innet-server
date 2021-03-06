import { Props } from '@innet/jsx'
import path from 'path'

import { Action, ACTION } from '../../action'
import { file } from '../file'

export interface CmsProps extends Props {
  dir?: string
  prefix?: string
}

export interface CmsJsxElement {
  props: CmsProps
}

export function cms ({ props }: CmsJsxElement, handler) {
  const action: Action = handler[ACTION]
  const { req } = action

  if (!req) {
    throw Error('`cms` should be used inside `server`')
  }

  const { prefix, dir } = props
  let url = action.path

  if (prefix) {
    if (url.startsWith(prefix)) {
      url = url.slice(prefix.length)
    } else {
      return
    }
  }

  const filePath = path.join(dir, url)

  return file({ props: { path: filePath } }, handler)
}
