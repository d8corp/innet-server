import { placeholder } from '@cantinc/utils';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import rapidoc from './rapidoc.html.mjs';
import redoc from './redoc.html.mjs';
import scalar from './scalar.html.mjs';
import swagger from './swagger.html.mjs';
import { useServer } from '../../../hooks/useServer/useServer.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.mjs';
import { useAction } from '../../../hooks/useAction/useAction.mjs';

function camelToDash(str) {
    return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
const uiPresets = { rapidoc, redoc, scalar, swagger };
const ui = () => {
    const { initUI } = useServer();
    const props = useProps() || {};
    const { html = uiPresets.swagger, params = {}, path = process.env.INNET_UI_PATH || '/ui', } = props;
    initUI(props);
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
