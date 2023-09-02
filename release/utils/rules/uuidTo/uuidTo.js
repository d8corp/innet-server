'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

const UUID_REG = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
function uuidTo(value, data) {
    if (!UUID_REG.test(value)) {
        throw new helpers.RulesError('uuid', data);
    }
    return value;
}

exports.uuidTo = uuidTo;
