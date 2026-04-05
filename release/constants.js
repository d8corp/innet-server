'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('./utils/rules/constants.js');

const apiErrors = [
    'requestValidation',
    'requestBodyContentType',
];
const allBodyTypes = [
    'application/json',
    'application/x-www-form-urlencoded',
    'multipart/form-data',
];
const defaultRequestBodyContentTypeSchema = {
    description: 'The request has no body or has unsupported content type format',
    properties: {
        error: {
            const: 'requestBodyContentType',
            title: 'The error code',
            type: 'string',
        },
    },
    type: 'object',
};
const defaultRequestValidationSchema = {
    description: 'The request contains invalid data',
    properties: {
        data: {
            oneOf: Object.values(constants.rulesErrorSchemas),
        },
        error: {
            const: 'requestValidation',
            title: 'The error code',
            type: 'string',
        },
    },
    type: 'object',
};

exports.allBodyTypes = allBodyTypes;
exports.apiErrors = apiErrors;
exports.defaultRequestBodyContentTypeSchema = defaultRequestBodyContentTypeSchema;
exports.defaultRequestValidationSchema = defaultRequestValidationSchema;
