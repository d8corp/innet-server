import { useProps } from '@innet/jsx';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import html from './swagger.html.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';

const swagger = () => {
    const { path = '/swagger-ui' } = useProps() || {};
    const { docs, requestPlugins, prefix } = useApi();
    let swaggerResponse;
    const listener = (req, res) => {
        if (req.url === prefix + path) {
            if (!swaggerResponse) {
                swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`);
            }
            res.statusCode = 200;
            res.write(swaggerResponse);
            res.end();
            return true;
        }
    };
    requestPlugins.add(listener);
    onDestroy(() => {
        requestPlugins.delete(listener);
    });
};

export { swagger };
