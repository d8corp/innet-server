import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import html from './swagger.html.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useRequestPlugin } from '../../../hooks/useRequestPlugin/useRequestPlugin.es6.js';

const swagger = () => {
    const { path = '/swagger-ui' } = useProps() || {};
    const { docs, prefix } = useApi();
    let swaggerResponse;
    useRequestPlugin((req, res) => {
        if (req.url === prefix + path) {
            if (!swaggerResponse) {
                swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`);
            }
            res.statusCode = 200;
            res.write(swaggerResponse);
            res.end();
            return true;
        }
    });
};

export { swagger };
