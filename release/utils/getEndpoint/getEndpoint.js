'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getEndpoint(path, parentEndpoint) {
    const splitPath = path.split('/').slice(1);
    for (let deep = 0; deep < splitPath.length; deep++) {
        const key = splitPath[deep];
        const isDynamic = key.startsWith('{') && key.endsWith('}');
        if (!isDynamic) {
            if (!parentEndpoint.static) {
                parentEndpoint.static = {};
            }
            if (!parentEndpoint.static[key]) {
                parentEndpoint.static[key] = { key, plugins: new Set() };
            }
            parentEndpoint = parentEndpoint.static[key];
            if (deep + 1 === splitPath.length) {
                return parentEndpoint;
            }
            continue;
        }
        if (!parentEndpoint.dynamic) {
            parentEndpoint.dynamic = [];
        }
        const newEndpoint = { key, plugins: new Set() };
        parentEndpoint.dynamic.push(newEndpoint);
        parentEndpoint = newEndpoint;
        if (deep + 1 === splitPath.length) {
            return parentEndpoint;
        }
    }
}

exports.getEndpoint = getEndpoint;
