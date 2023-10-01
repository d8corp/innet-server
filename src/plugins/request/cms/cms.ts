import innet, { useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'
import path from 'path'

import { file } from '../file'

import { usePath } from '../../../hooks'

export interface CmsProps {
  dir?: string
  prefix?: string
}

export function cms () {
  const {
    dir = process.env.INNET_CMS_DIR || '.',
    prefix = process.env.INNET_CMS_PREFIX || '/',
  } = useProps<CmsProps>() || {}
  const children = useChildren()
  const handler = useHandler()
  let url = usePath()

  if (url.startsWith(prefix)) {
    url = url.slice(prefix.length)
  } else {
    return innet(children, handler)
  }

  const filePath = path.join(dir, url)

  innet({ children, props: { path: filePath }, type: file }, handler)
}
