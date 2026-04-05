'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const inValidationValues = ['body', 'query', 'cookie', 'header', 'path'];
const rulesErrors = [
    'oneOf',
    'number',
    'date',
    'uuid',
    'integer',
    'minimum',
    'boolean',
    'minDate',
    'maxDate',
    'maximum',
    'minLength',
    'maxLength',
    'values',
    'object',
    'array',
    'tuple',
    'required',
    'null',
    'pattern',
    'string',
    'binary',
    'binaryAccept',
    'minBin',
    'maxBin',
];
const rulesErrorSchemas = {
    array: {
        description: 'The value should be an array',
        properties: {
            error: {
                const: 'array',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'array',
        type: 'object',
    },
    binary: {
        description: 'The value should be a binary file',
        properties: {
            error: {
                const: 'binary',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'value'],
        title: 'binary',
        type: 'object',
    },
    binaryAccept: {
        description: 'The file should match the accepted MIME types or extensions',
        properties: {
            accept: {
                type: 'string',
            },
            error: {
                const: 'binaryAccept',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'accept', 'value'],
        title: 'binaryAccept',
        type: 'object',
    },
    boolean: {
        description: 'The value should be a boolean',
        properties: {
            error: {
                const: 'boolean',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'boolean',
        type: 'object',
    },
    date: {
        description: 'The value should be a valid date',
        properties: {
            error: {
                const: 'date',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'value'],
        title: 'date',
        type: 'object',
    },
    integer: {
        description: 'The value should be a valid integer within the specified format range',
        properties: {
            error: {
                const: 'integer',
                type: 'string',
            },
            format: {
                enum: ['int32', 'int64'],
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            max: {
                type: ['integer', 'string'],
            },
            min: {
                type: ['integer', 'string'],
            },
            value: {},
        },
        required: ['error', 'in', 'format', 'value'],
        title: 'integer',
        type: 'object',
    },
    maxBin: {
        description: 'The file size should not exceed the maximum limit',
        properties: {
            error: {
                const: 'maxBin',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            max: {
                type: 'integer',
            },
            value: {},
        },
        required: ['error', 'in', 'max', 'value'],
        title: 'maxBin',
        type: 'object',
    },
    maxDate: {
        description: 'The date should not exceed the maximum limit',
        properties: {
            error: {
                const: 'maxDate',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            max: {
                format: 'date-time',
                type: 'string',
            },
            value: {
                format: 'date-time',
                type: 'string',
            },
        },
        required: ['error', 'in', 'max', 'value'],
        title: 'maxDate',
        type: 'object',
    },
    maximum: {
        description: 'The number should not exceed the maximum limit',
        properties: {
            error: {
                const: 'maximum',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            max: {
                oneOf: [
                    { type: 'number' },
                    { type: 'string' },
                ],
            },
            value: {},
        },
        required: ['error', 'in', 'max', 'value'],
        title: 'maximum',
        type: 'object',
    },
    maxLength: {
        description: 'The string length should not exceed the maximum limit',
        properties: {
            error: {
                const: 'maxLength',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            max: {
                type: 'integer',
            },
            value: {
                type: 'string',
            },
        },
        required: ['error', 'in', 'max', 'value'],
        title: 'maxLength',
        type: 'object',
    },
    minBin: {
        description: 'The file size should meet the minimum limit',
        properties: {
            error: {
                const: 'minBin',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            min: {
                type: 'integer',
            },
            value: {},
        },
        required: ['error', 'in', 'min', 'value'],
        title: 'minBin',
        type: 'object',
    },
    minDate: {
        description: 'The date should not be earlier than the minimum limit',
        properties: {
            error: {
                const: 'minDate',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            min: {
                format: 'date-time',
                type: 'string',
            },
            value: {
                format: 'date-time',
                type: 'string',
            },
        },
        required: ['error', 'in', 'min', 'value'],
        title: 'minDate',
        type: 'object',
    },
    minimum: {
        description: 'The number should meet the minimum limit',
        properties: {
            error: {
                const: 'minimum',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            min: {
                oneOf: [
                    { type: 'number' },
                    { type: 'string' },
                ],
            },
            value: {},
        },
        required: ['error', 'in', 'min', 'value'],
        title: 'minimum',
        type: 'object',
    },
    minLength: {
        description: 'The string length should meet the minimum limit',
        properties: {
            error: {
                const: 'minLength',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            min: {
                type: 'integer',
            },
            value: {
                type: 'string',
            },
        },
        required: ['error', 'in', 'min', 'value'],
        title: 'minLength',
        type: 'object',
    },
    null: {
        description: 'The value should be null',
        properties: {
            error: {
                const: 'null',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'null',
        type: 'object',
    },
    number: {
        description: 'The value should be a valid number',
        properties: {
            error: {
                const: 'number',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'value'],
        title: 'number',
        type: 'object',
    },
    object: {
        description: 'The value should be an object',
        properties: {
            error: {
                const: 'object',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'value'],
        title: 'object',
        type: 'object',
    },
    oneOf: {
        description: 'The value should match exactly one of the provided schemas',
        properties: {
            error: {
                const: 'oneOf',
                type: 'string',
            },
            errors: {
                items: {
                    type: 'object',
                },
                type: 'array',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in', 'errors'],
        title: 'oneOf',
        type: 'object',
    },
    pattern: {
        description: 'The value should match the specified regex pattern',
        properties: {
            error: {
                const: 'pattern',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            pattern: {
                type: 'string',
            },
            patternId: {
                type: 'string',
            },
            value: {},
        },
        required: ['error', 'in', 'pattern', 'patternId', 'value'],
        title: 'pattern',
        type: 'object',
    },
    required: {
        description: 'The field is required and must not be undefined',
        properties: {
            error: {
                const: 'required',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'required',
        type: 'object',
    },
    string: {
        description: 'The value should be a string',
        properties: {
            error: {
                const: 'string',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'string',
        type: 'object',
    },
    tuple: {
        description: 'The value should be a tuple',
        properties: {
            error: {
                const: 'tuple',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'tuple',
        type: 'object',
    },
    uuid: {
        description: 'The value should be a valid UUID',
        properties: {
            error: {
                const: 'uuid',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
        },
        required: ['error', 'in'],
        title: 'uuid',
        type: 'object',
    },
    values: {
        description: 'The value should be one of the allowed values',
        properties: {
            error: {
                const: 'values',
                type: 'string',
            },
            in: {
                enum: inValidationValues,
                type: 'string',
            },
            key: {
                type: 'string',
            },
            value: {},
            values: {
                items: {},
                type: 'array',
            },
        },
        required: ['error', 'in', 'value', 'values'],
        title: 'values',
        type: 'object',
    },
};

exports.inValidationValues = inValidationValues;
exports.rulesErrorSchemas = rulesErrorSchemas;
exports.rulesErrors = rulesErrors;
