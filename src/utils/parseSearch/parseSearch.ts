import qs, { IParseOptions, ParsedQs } from 'qs'

export function parseSearch <V extends ParsedQs> (search?: string, options?: IParseOptions): V {
  return qs.parse(search, {
    ignoreQueryPrefix: true,
    ...options,
  }) as V
}
