import { ACTION } from '../Action/Action.es6.js';

function withAction(target) {
    const originInit = target.prototype.init;
    target.prototype.init = function init(...args) {
        this.action = args[2][ACTION];
        return originInit.apply(this, args);
    };
    return target;
}

export { withAction as default };
