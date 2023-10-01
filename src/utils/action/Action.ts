import cookieLib, { type CookieSerializeOptions } from 'cookie'
import { type IncomingHttpHeaders, type IncomingMessage, type ServerResponse } from 'http'
import { type ParsedQs } from 'qs'
import { getClientIp } from 'request-ip'

import { once } from '../decorators'
import { parseBody } from '../parseBody'
import { parseFormBody } from '../parseFormBody'
import { parseSearch } from '../parseSearch'

import { allBodyTypes } from '../../constants'
import { type BodyType } from '../../types'

export const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/

export interface ParsedUrl {
  path: string
  search?: string
}

export class Action {
  #cookie: Record<string, string> = {}

  #headers: IncomingHttpHeaders = {}

  #search: ParsedQs | undefined

  body?: object

  constructor (
    readonly req: IncomingMessage,
    readonly res: ServerResponse,
  ) {}

  @once async parseBody (): Promise<void> {
    if (!this.bodyType) {
      return
    }

    if (this.bodyType === 'multipart/form-data') {
      this.body = await parseFormBody(this.req)
    }

    if (this.bodyType === 'application/x-www-form-urlencoded') {
      this.body = parseSearch(await parseBody(this.req))
    }

    if (this.bodyType === 'application/json') {
      this.body = JSON.parse(await parseBody(this.req))
    }
  }

  setCookie (name: string, value?: string, options?: CookieSerializeOptions) {
    let cookies: string | string[] | undefined = this.res.getHeader('Set-Cookie') as any

    if (typeof cookies === 'string') {
      cookies = [cookies]
    }

    const normValue = typeof value === 'string' ? cookieLib.serialize(name, value, options) : `${name}=; max-age=0`

    if (cookies) {
      cookies.push(normValue)
    } else {
      cookies = normValue
    }

    this.res.setHeader('Set-Cookie', cookies)
  }

  @once get bodyType (): BodyType | undefined {
    const headerType = this.req.headers['content-type']

    if (!headerType) return

    for (const bodyType of allBodyTypes) {
      if (headerType.startsWith(bodyType)) {
        return bodyType
      }
    }
  }

  @once get clientIp () {
    return getClientIp(this.req)
  }

  get cookies (): Record<string, string> {
    if (this.#cookie) return this.#cookie
    this.#cookie = this.originCookies
    return this.#cookie
  }

  set cookies (value: Record<string, string>) {
    this.#cookie = value
  }

  get headers (): IncomingHttpHeaders {
    if (this.#headers) return this.#headers
    this.#headers = this.originHeaders
    return this.#headers
  }

  set headers (value: IncomingHttpHeaders) {
    this.#headers = value
  }

  @once get originCookies (): Record<string, string> {
    return cookieLib.parse(this.req.headers.cookie ?? '')
  }

  get originHeaders (): IncomingHttpHeaders {
    return this.req.headers
  }

  @once get originSearch (): ParsedQs {
    return parseSearch(this.parsedUrl.search)
  }

  @once get parsedUrl (): ParsedUrl {
    const match = this.req.url?.match(URL_PARSER)
    if (!match) throw Error('cannot parse url')
    const result = match.groups as unknown as ParsedUrl
    result.path = result.path
      .replaceAll(/\/\.\.\//g, '/')
      .replaceAll(/\/+/g, '/')
    return result
  }

  get path (): string {
    return this.parsedUrl.path
  }

  get search (): ParsedQs {
    if (this.#search) return this.#search
    this.#search = this.originSearch
    return this.#search
  }

  set search (value: ParsedQs) {
    this.#search = value
  }
}
