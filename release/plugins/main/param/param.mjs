import { useNewHandler, innet } from 'innet';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import '../../../utils/rules/index.mjs';
import { useEndpoint } from '../../../hooks/useEndpoint/useEndpoint.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.mjs';
import { objectOf } from '../../../utils/rules/objectOf/objectOf.mjs';
import { paramContext } from '../../../hooks/useParam/useParam.mjs';
import { ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { required } from '../../../utils/rules/required/required.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';

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
    const { children, ...props } = useProps();
    const params = { ...props };
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
