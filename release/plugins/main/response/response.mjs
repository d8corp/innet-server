import { useNewHandler, innet } from 'innet';
import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import '../../request/index.mjs';
import { errorStatuses } from '../../request/error/error.mjs';
import { redirectStatuses } from '../../request/redirect/redirect.mjs';
import { successStatuses } from '../../request/success/success.mjs';
import { useEndpoint, endpointContext } from '../../../hooks/useEndpoint/useEndpoint.mjs';
import { useThrow } from '../../../hooks/useThrow/useThrow.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.mjs';
import { ruleContext } from '../../../hooks/useRule/useRule.mjs';

const statuses = {
    ...errorStatuses,
    ...redirectStatuses,
    ...successStatuses,
};
const response = () => {
    var _a;
    let { children, description = '', status = 'default', type = 'application/json', } = useProps() || {};
    const { operation, props: { path }, } = useEndpoint();
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
    const schema = status === 204 || !children ? undefined : {};
    const response = {
        description,
    };
    if (schema) {
        response.content = {
            ...defaultResponse === null || defaultResponse === void 0 ? void 0 : defaultResponse.content,
            [type]: {
                schema,
            },
        };
    }
    operation.responses[status] = response;
    schemaContext.set(handler, schema);
    const rules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    ruleContext.set(handler, rule => {
        rules.response = rule;
    });
    innet(children, handler);
};

export { response, statuses };
