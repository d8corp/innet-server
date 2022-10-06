import { once } from '@cantinc/utils'
import { useHandler } from '@innet/jsx'
import cookie, { CookieSerializeOptions } from 'cookie'
import { IncomingMessage, ServerResponse } from 'http'
import multiparty from 'multiparty'
import { ParsedQs } from 'qs'

import { parseSearch } from '../../utils'

export const ACTION = Symbol('Action') as unknown as string

export type Body = Record<string, any>
export type Search = ParsedQs
export type Cookies = Record<string, string | string[]>

export interface File {
  fieldName: string
  headers: Record<string, string>
  originalFilename: string
  path: string
  size: number
}
export type Files = Record<string, File | File[]>

export type Request = IncomingMessage
export type Response = ServerResponse

export interface ActionOptions {
  search: Search
  cookies: Cookies
  body?: Body
  files?: Files
}

export type Resources = Exclude<keyof ActionOptions, undefined>

export const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/

export class Action<O extends ActionOptions = ActionOptions> {
  constructor (public readonly req: Request, public readonly res: Response) {}

  @once get cookies (): O['cookies'] {
    return cookie.parse(this.req.headers.cookie || '')
  }

  setCookie (key: string, value?: string, opt?: CookieSerializeOptions) {
    let cookies: string[] | string | undefined = this.res.getHeader('Set-Cookie') as any

    if (typeof cookies === 'string') {
      cookies = [cookies]
    }

    const normValue = typeof value === 'string' ? cookie.serialize(key, value, opt) : `${key}=; max-age=0`

    if (cookies) {
      cookies.push(normValue)
    } else {
      cookies = normValue
    }

    this.res.setHeader('Set-Cookie', cookies)
  }

  @once parseBody () {
    return new Promise((resolve, reject) => {
      new multiparty.Form().parse(this.req, (err, fields, files) => {
        if (err) {
          reject(err)
        } else {
          for (const key in fields) {
            if (fields[key].length === 1) {
              fields[key] = fields[key][0]
            }
          }

          for (const key in files) {
            if (files[key].length === 1) {
              files[key] = files[key][0]
            }
          }

          this.body = fields
          this.files = files
          resolve(fields)
        }
      })
    })
  }

  body?: O['body']
  files?: O['files']

  @once get search (): O['search'] {
    return parseSearch(this.parsedUrl.search)
  }

  @once get parsedUrl () {
    const match = this.req.url.match(URL_PARSER)
    return match.groups as {
      search?: string,
      path?: string,
    }
  }

  get path () {
    return this.parsedUrl.path
  }
}

export function useAction<T extends Partial<ActionOptions>, O extends ActionOptions = ActionOptions & T> (): Action<O> {
  return useHandler()[ACTION]
}
