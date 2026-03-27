import { useNewHandler, innet } from 'innet';
import { useProps } from '@innet/jsx';
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
    const props = useProps();
    const { docs, endpoints, } = useApi();
    const { children, deprecated, description, method, operationId, path, private: privateMode, summary, } = props;
    const { paths } = docs;
    if (!paths)
        throw Error('cannot find paths in docs');
    if (!paths[path]) {
        paths[path] = {};
    }
    if (paths[path][method]) {
        throw Error(`You cannot use the same endpoints ${method}:${path}`);
    }
    const operation = {};
    if (operationId) {
        operation.operationId = operationId;
    }
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
        paths[path][method] = operation;
    }
    if (!endpoints[method]) {
        endpoints[method] = { key: '', plugins: new Set() };
    }
    const endpoint = getEndpoint(path, endpoints[method]);
    endpointContext.set(handler, { endpoint, operation, props });
    serverPlugins.set(handler, endpoint.plugins);
    innet(children, handler);
};

export { endpoint };
