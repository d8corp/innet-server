import { ACTION } from '../Action/Action.es6.js';

function getAction(handler) {
    return handler[ACTION];
}

export { getAction };
