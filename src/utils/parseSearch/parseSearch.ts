import qs, { type IParseOptions, type ParsedQs } from 'qs'

export const EMPTY_SEARCH = {}

export function parseSearch <V extends ParsedQs> (search?: string, options?: IParseOptions): V {
  if (!search) return EMPTY_SEARCH as V

  return qs.parse(search, {
    ignoreQueryPrefix: true,
    ...options,
  }) as V
}
