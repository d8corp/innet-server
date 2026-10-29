import cookieLib, { type Cookies, type SerializeOptions } from 'cookie'
import { type IncomingHttpHeaders, type IncomingMessage, type ServerResponse } from 'http'
import { type ParsedQs } from 'qs'
import { getClientIp } from 'request-ip'

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
  #bodyType: BodyType | null | undefined = null
  #clientIp: null | string | undefined
  #cookie: Cookies = {}
  #headers: IncomingHttpHeaders = {}
  #originCookies: Cookies | undefined
  #originSearch: ParsedQs | undefined
  #parsedBody = false
  #parsedUrl: ParsedUrl | undefined
  #search: ParsedQs | undefined

  body?: object

  constructor (
    readonly req: IncomingMessage,
    readonly res: ServerResponse,
  ) {}

  async parseBody (): Promise<void> {
    if (this.#parsedBody || !this.bodyType) {
      this.#parsedBody = true
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

    this.#parsedBody = true
  }

  setCookie (name: string, value?: string, options?: SerializeOptions) {
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

  get bodyType (): BodyType | undefined {
    if (this.#bodyType !== null) return this.#bodyType

    const headerType = this.req.headers['content-type']

    if (!headerType) {
      this.#bodyType = undefined
      return
    }

    for (const bodyType of allBodyTypes) {
      if (headerType.startsWith(bodyType)) {
        return (this.#bodyType = bodyType)
      }
    }

    this.#bodyType = undefined
  }

  get clientIp () {
    if (this.#clientIp === undefined) {
      this.#clientIp = getClientIp(this.req)
    }

    return this.#clientIp
  }

  get cookies (): Cookies {
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

  get originCookies (): Cookies {
    if (!this.#originCookies) {
      this.#originCookies = cookieLib.parse(this.req.headers.cookie ?? '')
    }

    return this.#originCookies
  }

  get originHeaders (): IncomingHttpHeaders {
    return this.req.headers
  }

  get originSearch (): ParsedQs {
    if (!this.#originSearch) {
      this.#originSearch = parseSearch(this.parsedUrl.search)
    }

    return this.#originSearch
  }

  get parsedUrl (): ParsedUrl {
    if (!this.#parsedUrl) {
      const match = this.req.url?.match(URL_PARSER)
      if (!match) throw Error('cannot parse url')
      const result = match.groups as unknown as ParsedUrl

      result.path = result.path
        .replaceAll(/\/\.\.\//g, '/')
        .replaceAll(/\/+/g, '/')

      this.#parsedUrl = result
    }

    return this.#parsedUrl
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
