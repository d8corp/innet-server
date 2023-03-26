import path from 'path'

import { file } from '../file'

import { actionContext } from '../../hooks'

export interface CmsProps {
  dir?: string
  prefix?: string
}

export interface CmsJsxElement {
  props: CmsProps
  children?: any
}

export function cms ({ props, children }: CmsJsxElement, handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <cms> inside <action>')
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

  return file({ props: { path: filePath }, children }, handler)
}
