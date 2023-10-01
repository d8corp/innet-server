'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../useApi/index.js');
require('../useNewSchema/index.js');
var useApi = require('../useApi/useApi.js');
var useNewSchema = require('../useNewSchema/useNewSchema.js');

function useSchemaType(type, _a = {}) {
    var _b;
    var { example, examples, ref, values } = _a, options = tslib.__rest(_a, ["example", "examples", "ref", "values"]);
    if (ref) {
        const { docs } = useApi.useApi();
        if (!docs.components) {
            docs.components = {};
        }
        if (!docs.components.schemas) {
            docs.components.schemas = {};
        }
        useNewSchema.useNewSchema({
            $ref: `#/components/schemas/${ref}`,
        });
        if ((_b = docs.components.schemas) === null || _b === void 0 ? void 0 : _b[ref]) {
            return;
        }
        return (docs.components.schemas[ref] = Object.assign(Object.assign({}, options), { enum: values, example,
            examples, type: type === 'any' ? undefined : type }));
    }
    return useNewSchema.useNewSchema(Object.assign(Object.assign({}, options), { enum: values, example,
        examples, type: type === 'any' ? undefined : type }));
}

exports.useSchemaType = useSchemaType;
