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
    constructor(req: IncomingMessage, res: ServerResponse);
    get parsedUrl(): ParsedUrl;
    get path(): string;
    get originSearch(): ParsedQs;
    get search(): ParsedQs;
    set search(value: ParsedQs);
    get originHeaders(): IncomingHttpHeaders;
    get headers(): IncomingHttpHeaders;
    set headers(value: IncomingHttpHeaders);
    get originCookies(): Record<string, string>;
    get cookies(): Record<string, string>;
    set cookies(value: Record<string, string>);
    get bodyType(): BodyType | undefined;
    body?: object;
    parseBody(): Promise<void>;
    setCookie(name: string, value?: string, options?: CookieSerializeOptions): void;
    get clientIp(): string | null;
}
