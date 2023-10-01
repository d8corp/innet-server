import innet, { useNewHandler } from 'innet';
import { useChildren, useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../../utils/rules/index.es6.js';
import { useEndpoint } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.es6.js';
import { objectOf } from '../../../utils/rules/objectOf/objectOf.es6.js';
import { paramContext } from '../../../hooks/useParam/useParam.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { required } from '../../../utils/rules/required/required.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';

const inMap = {
    cookie: 'cookie',
    header: 'header',
    path: 'path',
    query: 'search',
};
const param = () => {
    var _a;
    const { endpoint, operation, } = useEndpoint();
    if (!operation.parameters) {
        operation.parameters = [];
    }
    const children = useChildren();
    const props = useProps();
    const params = Object.assign({}, props);
    if (props.in === 'path') {
        params.required = (_a = params.required) !== null && _a !== void 0 ? _a : true;
    }
    operation.parameters.push(params);
    if (!children)
        return;
    const handler = useNewHandler();
    const schema = {};
    params.schema = schema;
    schemaContext.set(handler, schema);
    const rulesMap = getOrAdd(endpoint, `rulesMaps.${inMap[props.in]}`, [{}, {}]);
    const oneOfRulesMap = {};
    const key = props.name;
    getOrAdd(endpoint, `rules.${inMap[props.in]}`, [{}, objectOf(rulesMap)]);
    paramContext.set(handler, { props });
    ruleContext.set(handler, rule => {
        const override = params.required ? required : (e) => e;
        if (key in rulesMap) {
            if (key in oneOfRulesMap) {
                oneOfRulesMap[key].push(rule);
            }
            else {
                oneOfRulesMap[key] = [rulesMap[key], rule];
                rulesMap[key] = override(oneOf(oneOfRulesMap[key]));
            }
        }
        else {
            rulesMap[key] = override(rule);
        }
    });
    innet(children, handler);
};

export { param };
