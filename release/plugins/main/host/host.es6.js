import innet, { useNewHandler } from 'innet';
import { useProps, useChildren, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { endpointContext } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { hostContext } from '../../../hooks/useHost/useHost.es6.js';

const host = () => {
    const handler = useNewHandler();
    const { docs } = useApi();
    const props = useProps();
    const children = useChildren();
    const { operation } = useContext(endpointContext) || {};
    const target = operation || docs;
    if (!target.servers) {
        target.servers = [];
    }
    const { servers } = operation || docs;
    const server = Object.assign({}, props);
    // @ts-expect-error: FIXME
    servers.push(server);
    handler[hostContext.key] = { server };
    innet(children, handler);
};

export { host };
