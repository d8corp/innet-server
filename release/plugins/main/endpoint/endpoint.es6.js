import innet, { useNewHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useTag } from '../../../hooks/useTag/useTag.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { getEndpoint } from '../../../utils/getEndpoint/getEndpoint.es6.js';
import { endpointContext } from '../../../hooks/useEndpoint/useEndpoint.es6.js';
import { serverPlugins } from '../../../hooks/useServerPlugins/useServerPlugins.es6.js';

const endpoint = () => {
    const handler = useNewHandler();
    const tag = useTag();
    const { docs, endpoints } = useApi();
    const props = useProps();
    const { path, summary, description, deprecated, method, private: privateMode } = props;
    const children = useChildren();
    const { paths } = docs;
    if (!paths)
        throw Error('cannot find paths in docs');
    if (!paths[path]) {
        paths[path] = {};
    }
    // @ts-expect-error: it's always an object
    if (paths[path][method]) {
        throw Error(`You cannot use the same endpoints ${method}:${path}`);
    }
    const operation = {};
    if (summary) {
        operation.summary = summary;
    }
    if (description) {
        operation.description = description;
    }
    if (deprecated) {
        operation.deprecated = deprecated;
    }
    if (tag) {
        operation.tags = [tag.name];
    }
    if (!privateMode) {
        // @ts-expect-error: it's always an object
        paths[path][method] = operation;
    }
    if (!endpoints[method]) {
        endpoints[method] = { key: '', plugins: new Set() };
    }
    // @ts-expect-error: it's always an object
    const endpoint = getEndpoint(path, endpoints[method]);
    // @ts-expect-error: it's always an object
    endpointContext.set(handler, { operation, props, endpoint });
    // @ts-expect-error: it's always an object
    serverPlugins.set(handler, endpoint.plugins);
    innet(children, handler);
};

export { endpoint };
