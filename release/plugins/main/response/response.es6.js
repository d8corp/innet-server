import innet, { useNewHandler } from 'innet';
import { useProps, useChildren, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../request/index.es6.js';
import { errorStatuses } from '../../request/error/error.es6.js';
import { redirectStatuses } from '../../request/redirect/redirect.es6.js';
import { successStatuses } from '../../request/success/success.es6.js';
import { useEndpoint, endpointContext } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';

const statuses = Object.assign(Object.assign(Object.assign({}, errorStatuses), redirectStatuses), successStatuses);
const response = () => {
    var _a;
    let { description = '', status = 'default', type = 'application/json', } = useProps() || {};
    const { operation, props: { path }, } = useEndpoint();
    const children = useChildren();
    const handler = useNewHandler();
    const endpoint = useContext(endpointContext);
    if (status in statuses) {
        status = statuses[status];
    }
    if (!endpoint) {
        useThrow('<{type}> MUST be placed in <endpoint> element');
    }
    if (!operation.responses) {
        operation.responses = {};
    }
    const defaultResponse = operation.responses[status];
    if ((_a = defaultResponse === null || defaultResponse === void 0 ? void 0 : defaultResponse.content) === null || _a === void 0 ? void 0 : _a[type]) {
        throw Error(`status ${status} and type ${type} for '${path}' already used`);
    }
    const schema = {};
    const response = {
        content: Object.assign(Object.assign({}, defaultResponse === null || defaultResponse === void 0 ? void 0 : defaultResponse.content), { [type]: {
                schema,
            } }),
        description,
    };
    operation.responses[status] = response;
    schemaContext.set(handler, schema);
    const rules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    ruleContext.set(handler, rule => {
        rules.response = rule;
    });
    innet(children, handler);
};

export { response, statuses };
