import innet, { useNewHandler } from 'innet';
import { useProps, useChildren, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useEndpoint, endpointContext } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';

const response = () => {
    const { description = '', status = 'default' } = useProps() || {};
    const { operation, props: { path } } = useEndpoint();
    const children = useChildren();
    const handler = useNewHandler();
    const endpoint = useContext(endpointContext);
    if (!endpoint) {
        useThrow('<{type}> MUST be placed in <endpoint> element');
    }
    if (!operation.responses) {
        operation.responses = {};
    }
    if (operation.responses[status]) {
        throw Error(`status ${status} for '${path}' already used`);
    }
    const schema = {};
    const response = {
        description,
        content: {
            'application/json': {
                schema,
            },
        },
    };
    operation.responses[status] = response;
    schemaContext.set(handler, schema);
    const rules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    ruleContext.set(handler, rule => {
        rules.response = rule;
    });
    innet(children, handler);
};

export { response };
