/// <reference types="node" />
import type http from 'http';
export declare function parseBody(req: http.IncomingMessage): Promise<string>;
