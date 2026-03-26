import { placeholder } from '@cantinc/utils';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import rapidoc from './rapidoc.html.es6.js';
import redoc from './redoc.html.es6.js';
import scalar from './scalar.html.es6.js';
import swagger from './swagger.html.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

function camelToDash(str) {
    return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
const uiPresets = { rapidoc, redoc, scalar, swagger };
const ui = () => {
    const { html = uiPresets.swagger, params = {}, path = process.env.INNET_UI_PATH || '/ui', } = useProps() || {};
    const { docs, prefix, } = useApi();
    let cache = '';
    useServerPlugin(() => {
        const action = useAction();
        if (action.path === prefix + path) {
            if (!cache) {
                const attributes = Object
                    .keys(params)
                    .reduce((res, key) => {
                    return `${res} ${camelToDash(key)}='${String(params[key])}'`;
                }, '');
                cache = placeholder(html, {
                    apiUrl: prefix,
                    attributes,
                    docs: JSON.stringify(docs),
                    params: JSON.stringify(params),
                    ...params,
                });
            }
            action.res.statusCode = 200;
            action.res.write(cache);
            action.res.end();
            return true;
        }
    });
};

export { ui, uiPresets };
