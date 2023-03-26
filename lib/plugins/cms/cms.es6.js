import path from 'path';
import { file } from '../file/file.es6.js';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function cms({ props, children }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <cms> inside <action>');
    }
    const { prefix, dir } = props;
    let url = action.path;
    if (prefix) {
        if (url.startsWith(prefix)) {
            url = url.slice(prefix.length);
        }
        else {
            return;
        }
    }
    const filePath = path.join(dir, url);
    return file({ props: { path: filePath }, children }, handler);
}

export { cms };
