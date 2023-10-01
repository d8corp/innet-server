'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function httpOnStart({ https, port, }) {
    console.log(`http${https ? 's' : ''}://localhost:${port}`);
}

exports.httpOnStart = httpOnStart;
