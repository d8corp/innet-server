import { useNewHandler, innet } from 'innet';
import { useProps, useChildren, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { endpointContext } from '../../../hooks/useEndpoint/useEndpoint.mjs';
import { hostContext } from '../../../hooks/useHost/useHost.mjs';

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
    const server = {
        ...props,
    };
    // @ts-expect-error: FIXME
    servers.push(server);
    handler[hostContext.key] = { server };
    innet(children, handler);
};

export { host };
