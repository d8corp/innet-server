import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const objectSchemaContext = new Context();
function useObjectSchemaContext() {
    const schema = useContext(objectSchemaContext);
    if (!schema) {
        useThrow('Use <{type}> in <object>');
    }
    return schema;
}

export { objectSchemaContext, useObjectSchemaContext };
