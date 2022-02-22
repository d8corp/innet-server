import path from 'path';
import { ACTION } from '../../action/Action/Action.es6.js';
import { file } from '../file/file.es6.js';

function cms({ props }, handler) {
    const action = handler[ACTION];
    const { req } = action;
    if (!req) {
        throw Error('`cms` should be used inside `server`');
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
    return file({ props: { path: filePath } }, handler);
}

export { cms };
