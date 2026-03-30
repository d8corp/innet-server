import '../useApi/index.es6.js';
import '../useNewSchema/index.es6.js';
import { useApi } from '../useApi/useApi.es6.js';
import { useNewSchema } from '../useNewSchema/useNewSchema.es6.js';

function useSchemaType(type, { example, examples, ref, values, ...options } = {}) {
    var _a;
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
        if ((_a = docs.components.schemas) === null || _a === void 0 ? void 0 : _a[ref]) {
            return;
        }
        return (docs.components.schemas[ref] = {
            ...options,
            enum: values,
            example,
            examples,
            type: type === 'any' ? undefined : type,
        });
    }
    const arrayValues = values ? Array.isArray(values) ? values : Object.keys(values) : values;
    const enumDescription = values && !Array.isArray(values)
        ? {
            [process.env.INNET_API_ENUM_DESCRIPTION_KEY || 'x-enumNames']: values,
        }
        : {};
    return useNewSchema({
        ...options,
        ...enumDescription,
        enum: arrayValues,
        example,
        examples,
        type: type === 'any' ? undefined : type,
    });
}

export { useSchemaType };
