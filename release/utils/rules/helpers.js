'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class RulesError extends Error {
    constructor(error, data) {
        super(`Validation Error: ${error}`);
        this.data = Object.assign({ error }, data);
    }
}
function addKey(key, data) {
    return (data === null || data === void 0 ? void 0 : data.key) ? `${data.key}.${key}` : key;
}

exports.RulesError = RulesError;
exports.addKey = addKey;
