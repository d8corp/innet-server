import cookie from 'cookie'
import http from 'http'

import { once } from '../decorators'
import { parseBody } from '../parseBody'
import { parseFormBody } from '../parseFormBody'
import { parseSearch } from '../parseSearch'

import { allBodyTypes } from '../../constants'
import { BodyType } from '../../types'

export const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/

export class Action {
  constructor (private req: http.IncomingMessage) {}

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

  @once get originSearch () {
    return parseSearch(this.parsedUrl.search)
  }

  #search
  get search () {
    if (this.#search) return this.#search
    this.#search = this.originSearch
    return this.#search
  }

  set search (value) {
    this.#search = value
  }

  get originHeaders () {
    return this.req.headers
  }

  #headers
  get headers () {
    if (this.#headers) return this.#headers
    this.#headers = this.originHeaders
    return this.#headers
  }

  set headers (value) {
    this.#headers = value
  }

  @once get originCookies () {
    return cookie.parse(this.req.headers.cookie || '')
  }

  #cookie
  get cookies () {
    if (this.#cookie) return this.#cookie
    this.#cookie = this.originCookies
    return this.#cookie
  }

  set cookies (value) {
    this.#cookie = value
  }

  body: object

  @once async parseBody () {
    let type: string
    const headerType = this.req.headers['content-type']
    for (const bodyType of allBodyTypes) {
      if (headerType.startsWith(bodyType)) {
        type = bodyType
        break
      }
    }

    if (!type) {
      return
    }

    if (type === 'multipart/form-data') {
      this.body = parseFormBody(this.req)
    }

    if (type === 'application/x-www-form-urlencoded') {
      this.body = parseSearch(await parseBody(this.req))
    }

    if (type === 'application/json') {
      this.body = JSON.parse(await parseBody(this.req))
    }
  }
}
