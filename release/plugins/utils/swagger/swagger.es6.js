import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import html from './swagger.html.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

const swagger = () => {
    const { path = '/swagger-ui' } = useProps() || {};
    const { docs, prefix } = useApi();
    let swaggerResponse;
    useServerPlugin(() => {
        const action = useAction();
        if (action.path === prefix + path) {
            if (!swaggerResponse) {
                swaggerResponse = html.replace('spec: {},', `spec: ${JSON.stringify(docs)},`);
            }
            action.res.statusCode = 200;
            action.res.write(swaggerResponse);
            action.res.end();
            return true;
        }
    });
};

export { swagger };
