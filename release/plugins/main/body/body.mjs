import { useNewHandler, innet } from 'innet';
import { useContext, useChildren } from '@innet/jsx';
import { allBodyTypes } from '../../../constants.mjs';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { endpointContext } from '../../../hooks/useEndpoint/useEndpoint.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { getOrAdd } from '../../../utils/getOrAdd/getOrAdd.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { useEffect } from '../../../hooks/useEffect/useEffect.mjs';

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
    bodyContext.set(handler, {
        useFile: () => {
            fileUsed = true;
        },
    });
    ruleContext.set(handler, rule => {
        rules.body = rule;
    });
    useEffect(() => {
        if (fileUsed) {
            requestBody.content['multipart/form-data'] = { schema };
        }
        else {
            for (const type of allBodyTypes) {
                requestBody.content[type] = { schema };
            }
        }
    });
    innet(children, handler);
};

export { body };
