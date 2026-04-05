import { rulesErrorSchemas } from './utils/rules/constants.es6.js';

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
            oneOf: Object.values(rulesErrorSchemas),
        },
        error: {
            const: 'requestValidation',
            title: 'The error code',
            type: 'string',
        },
    },
    type: 'object',
};

export { allBodyTypes, apiErrors, defaultRequestBodyContentTypeSchema, defaultRequestValidationSchema };
