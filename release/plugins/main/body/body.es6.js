import innet, { useNewHandler } from 'innet';
import { useContext, useChildren } from '@innet/jsx';
import { callHandler } from '@innet/utils';
import { allBodyTypes } from '../../../constants.es6.js';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { endpointContext } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.es6.js';
import { bodyFileContext } from '../../../hooks/useBodyFile/useBodyFile.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';

const body = () => {
    const endpoint = useContext(endpointContext);
    if (!endpoint) {
        throw Error('<body> MUST be placed in <endpoint> element');
    }
    const children = useChildren();
    const { operation } = endpoint;
    if (!operation.requestBody) {
        operation.requestBody = {
            content: {},
        };
    }
    const requestBody = operation.requestBody;
    for (const type of allBodyTypes) {
        if (requestBody.content[type]) {
            throw Error(`<body type="${type}"> already used`);
        }
    }
    const handler = useNewHandler();
    const schema = {};
    schemaContext.set(handler, schema);
    const rules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}]);
    let fileUsed = false;
    bodyFileContext.set(handler, () => {
        fileUsed = true;
    });
    ruleContext.set(handler, rule => {
        rules.body = rule;
    });
    innet(children, handler);
    innet(() => {
        if (fileUsed) {
            requestBody.content['multipart/form-data'] = { schema };
        }
        else {
            for (const type of allBodyTypes) {
                requestBody.content[type] = { schema };
            }
        }
    }, callHandler);
};

export { body };
