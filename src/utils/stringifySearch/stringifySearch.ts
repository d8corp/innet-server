import qs, { type IStringifyOptions, type ParsedQs } from 'qs'

export function stringifySearch (search: ParsedQs, options?: IStringifyOptions): string {
  return qs.stringify(search, {
    encode: false,
    ...options,
  })
}
