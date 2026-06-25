import { innet, useHandler } from 'innet'
import { useProps } from '@innet/jsx'
import path from 'path'

import { file } from '../file'

import { usePath } from '../../../hooks'

export interface CmsProps {
  /** Fallback content when file is not found */
  children?: any

  /**
   * Directory path to serve static files from.
   *
   * @default '.'
   * @env INNET_CMS_DIR
   *
   * @example
   * ```tsx
   * <cms dir="public" />
   * ```
   */
  dir?: string

  /**
   * URL prefix to match before serving files.
   *
   * @default '/'
   * @env INNET_CMS_PREFIX
   *
   * @example
   * ```tsx
   * <cms prefix="/assets" />
   * ```
   */
  prefix?: string
}

export function cms () {
  const {
    children,
    dir = process.env.INNET_CMS_DIR || '.',
    prefix = process.env.INNET_CMS_PREFIX || '/',
  } = useProps<CmsProps>()

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
