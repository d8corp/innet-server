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
  const { prefix = '/', dir = '.' } = useProps<CmsProps>() || {}
  const children = useChildren()
  const handler = useHandler()
  let url = usePath()

  if (url.startsWith(prefix)) {
    url = url.slice(prefix.length)
  } else {
    return innet(children, handler)
  }

  const filePath = path.join(dir, url)

  innet({ type: file, props: { path: filePath }, children }, handler)
}
