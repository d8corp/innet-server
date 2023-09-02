import { __rest } from 'tslib';
import '../useApi/index.es6.js';
import '../useNewSchema/index.es6.js';
import { useApi } from '../useApi/useApi.es6.js';
import { useNewSchema } from '../useNewSchema/useNewSchema.es6.js';

function useSchemaType(type, _a = {}) {
    var _b;
    var { values, ref, example, examples } = _a, options = __rest(_a, ["values", "ref", "example", "examples"]);
    if (ref) {
        const { docs } = useApi();
        if (!docs.components) {
            docs.components = {};
        }
        if (!docs.components.schemas) {
            docs.components.schemas = {};
        }
        useNewSchema({
            $ref: `#/components/schemas/${ref}`,
        });
        if ((_b = docs.components.schemas) === null || _b === void 0 ? void 0 : _b[ref]) {
            return;
        }
        return (docs.components.schemas[ref] = Object.assign(Object.assign({}, options), { example,
            examples,
            type, enum: values }));
    }
    return useNewSchema(Object.assign(Object.assign({}, options), { example,
        examples, enum: values, type: type }));
}

export { useSchemaType };
