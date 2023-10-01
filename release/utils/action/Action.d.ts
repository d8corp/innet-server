/// <reference types="node" />
import { type CookieSerializeOptions } from 'cookie';
import { type IncomingHttpHeaders, type IncomingMessage, type ServerResponse } from 'http';
import { type ParsedQs } from 'qs';
import { type BodyType } from '../../types';
export declare const URL_PARSER: RegExp;
export interface ParsedUrl {
    path: string;
    search?: string;
}
export declare class Action {
    #private;
    readonly req: IncomingMessage;
    readonly res: ServerResponse;
    body?: object;
    constructor(req: IncomingMessage, res: ServerResponse);
    parseBody(): Promise<void>;
    setCookie(name: string, value?: string, options?: CookieSerializeOptions): void;
    get bodyType(): BodyType | undefined;
    get clientIp(): string | null;
    get cookies(): Record<string, string>;
    set cookies(value: Record<string, string>);
    get headers(): IncomingHttpHeaders;
    set headers(value: IncomingHttpHeaders);
    get originCookies(): Record<string, string>;
    get originHeaders(): IncomingHttpHeaders;
    get originSearch(): ParsedQs;
    get parsedUrl(): ParsedUrl;
    get path(): string;
    get search(): ParsedQs;
    set search(value: ParsedQs);
}
