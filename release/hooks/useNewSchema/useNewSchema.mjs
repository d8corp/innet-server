import '../useSchemaContext/index.mjs';
import '../useThrow/index.mjs';
import { useSchemaContext } from '../useSchemaContext/useSchemaContext.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

function useNewSchema(schema = Object.create(null)) {
    const parentSchema = useSchemaContext();
    if (!parentSchema) {
        useThrow('Use <{type}> inside one of <response>, <param> or <body>');
    }
    if (Array.isArray(parentSchema)) {
        parentSchema.push(schema);
    }
    else if (parentSchema.oneOf) {
        parentSchema.oneOf.push(schema);
    }
    else if (parentSchema.type || '$ref' in parentSchema) {
        const oldSchema = { ...parentSchema };
        for (const key in parentSchema) {
            // @ts-expect-error: FIXME
            delete parentSchema[key];
        }
        parentSchema.oneOf = [oldSchema, schema];
    }
    else {
        Object.assign(parentSchema, schema);
        return parentSchema;
    }
    return schema;
}

export { useNewSchema };
