import { once } from '@cantinc/utils'
import cookie, { CookieSerializeOptions } from 'cookie'
import { IncomingMessage, ServerResponse } from 'http'
import multiparty, { FormOptions } from 'multiparty'
import { ParsedQs } from 'qs'

import { parseSearch } from '../../parseSearch'

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

export interface ActionParams {
  multipartyForm?: FormOptions
}

export type Resources = Exclude<keyof ActionOptions, undefined>

export const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/
export const KEY_FIELD = /^(?<field>[^[]+)(?<rest>.*)$/
export const KEY_KEYS = /^\[(?<key>[^\]]+)\](?<rest>.*)$/

interface ParsedKey {
  field: string
  keys: string[]
}

function getKeys (keys: string): string[] {
  const match = keys.match(KEY_KEYS)

  if (!match) return [keys]
  if (!match.groups.rest) return [match.groups.key]

  return [match.groups.key, ...getKeys(match.groups.rest)]
}

function parseKey (key: string): ParsedKey {
  const fieldMatch = key.match(KEY_FIELD)

  if (!fieldMatch?.groups.field) {
    return {
      field: key,
      keys: [],
    }
  }

  return {
    field: fieldMatch.groups.field,
    keys: fieldMatch?.groups.rest ? getKeys(fieldMatch.groups.rest) : [],
  }
}

function addField (key: ParsedKey, value: any, fields: Record<string, any>) {
  if (!key.keys.length) {
    if (!(key.field in fields)) {
      fields[key.field] = value
      return
    }

    const oldValue = fields[key.field]

    if (Array.isArray(oldValue)) {
      if (Array.isArray(value)) {
        oldValue.push(...value)
        return
      }

      oldValue.push(value)
      return
    }

    if (Array.isArray(value)) {
      fields[key.field] = [oldValue, ...value]
      return
    }

    fields[key.field] = [oldValue, value]
    return
  }

  const [field, ...keys] = key.keys
  const oldValue = fields[key.field]

  if (Array.isArray(oldValue)) {
    throw Error('invalid keys')
  }

  if (!oldValue) {
    fields[key.field] = {}
  } else if (typeof oldValue !== 'object') {
    throw Error('invalid keys')
  }

  addField({ field, keys }, value, fields[key.field])
}

function formatFields (fields: any) {
  const result = {}

  for (const key in fields) {
    const value = fields[key]
    addField(parseKey(key), Array.isArray(value) && value.length === 1 ? value[0] : value, result)
  }

  return result
}

export class Action<O extends ActionOptions = ActionOptions> {
  constructor (public readonly req: Request, public readonly res: Response, public params: ActionParams = {}) {}

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
      new multiparty.Form(this.params.multipartyForm).parse(this.req, (err, fields, files) => {
        if (err) {
          reject(err)
          return
        }

        this.body = formatFields(fields)
        this.files = formatFields(files)
        resolve(fields)
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
