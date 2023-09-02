/// <reference types="node" />
import type http from 'http';
export declare function parseFormBody(req: http.IncomingMessage): Promise<object>;
