import { Context, useContext } from '@innet/jsx';

const schemaContext = new Context();
function useSchemaContext() {
    return useContext(schemaContext);
}

export { schemaContext, useSchemaContext };
