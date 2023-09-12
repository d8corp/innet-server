import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const objectSchemaContext = new Context();
function useObjectSchemaContext() {
    const schema = useContext(objectSchemaContext);
    if (!schema) {
        useThrow('Use <{type}> in <object>');
    }
    return schema;
}

export { objectSchemaContext, useObjectSchemaContext };
