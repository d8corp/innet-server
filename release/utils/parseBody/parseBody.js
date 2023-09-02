'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var node_string_decoder = require('node:string_decoder');

function parseBody(req) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            const decoder = new node_string_decoder.StringDecoder('utf-8');
            let buffer = '';
            req.on('data', chunk => {
                buffer += decoder.write(chunk);
            });
            req.on('end', () => {
                buffer += decoder.end();
                resolve(buffer);
            });
            req.on('error', err => {
                reject(err);
            });
        });
    });
}

exports.parseBody = parseBody;
