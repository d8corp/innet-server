'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function httpOnStart({ apiPaths, https, port, }) {
    apiPaths.forEach(path => {
        console.log(`http${https ? 's' : ''}://localhost:${port}${path}`);
    });
}

exports.httpOnStart = httpOnStart;
