import { type IParseOptions, type ParsedQs } from 'qs';
export declare const EMPTY_SEARCH: {};
export declare function parseSearch<V extends ParsedQs>(search?: string, options?: IParseOptions): V;
