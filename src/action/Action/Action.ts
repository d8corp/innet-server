import { once } from '@cantinc/utils'
import cookie, { CookieSerializeOptions } from 'cookie'
import { IncomingMessage, ServerResponse } from 'http'
import multiparty from 'multiparty'

export const ACTION = Symbol('Action') as unknown as string

export type Resources = 'search' | 'body' | 'cookies' | 'files'

export type Body = Record<string, any>
export type Search = Record<string, any>
export type Cookies = Record<string, string | string[]>
export type Files = Record<string, File | File[]>

export type Request = IncomingMessage
export type Response = ServerResponse

export interface ActionOptions {
  body?: Body
  search?: Search
  cookies?: Cookies
  files?: Files
}

export interface File {
  fieldName: string
  headers: Record<string, string>
  originalFilename: string
  path: string
  size: number
}

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
    const result = Object.create(null)
    const search = this.parsedUrl.search || ''

    for (const option of search.split('&')) {
      const [key, ...value] = option.split('=')
      if (key) {
        const normValue = value.join('=')
        if (key in result) {
          if (Array.isArray(result[key])) {
            result[key].push(normValue)
          } else {
            result[key] = [result[key], normValue]
          }
        } else {
          result[key] = normValue
        }
      }
    }

    return result
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
