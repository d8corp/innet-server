import cookie from 'cookie'
import type http from 'http'
import { type IncomingHttpHeaders } from 'http'
import { type ParsedQs } from 'qs'

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
  constructor (private readonly req: http.IncomingMessage) {}

  @once get parsedUrl (): ParsedUrl {
    const match = this.req.url?.match(URL_PARSER)
    if (!match) throw Error('cannot parse url')
    return match.groups as unknown as ParsedUrl
  }

  get path (): string | undefined {
    return this.parsedUrl.path
  }

  @once get originSearch (): ParsedQs {
    return parseSearch(this.parsedUrl.search)
  }

  #search: ParsedQs = {}
  get search (): ParsedQs {
    if (this.#search) return this.#search
    this.#search = this.originSearch
    return this.#search
  }

  set search (value: ParsedQs) {
    this.#search = value
  }

  get originHeaders (): IncomingHttpHeaders {
    return this.req.headers
  }

  #headers: IncomingHttpHeaders = {}
  get headers (): IncomingHttpHeaders {
    if (this.#headers) return this.#headers
    this.#headers = this.originHeaders
    return this.#headers
  }

  set headers (value: IncomingHttpHeaders) {
    this.#headers = value
  }

  @once get originCookies (): Record<string, string> {
    return cookie.parse(this.req.headers.cookie ?? '')
  }

  #cookie: Record<string, string> = {}
  get cookies (): Record<string, string> {
    if (this.#cookie) return this.#cookie
    this.#cookie = this.originCookies
    return this.#cookie
  }

  set cookies (value: Record<string, string>) {
    this.#cookie = value
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

  body?: object

  @once async parseBody (): Promise<void> {
    if (!this.bodyType) {
      return
    }

    if (this.bodyType === 'multipart/form-data') {
      this.body = parseFormBody(this.req)
    }

    if (this.bodyType === 'application/x-www-form-urlencoded') {
      this.body = parseSearch(await parseBody(this.req))
    }

    if (this.bodyType === 'application/json') {
      this.body = JSON.parse(await parseBody(this.req))
    }
  }
}
