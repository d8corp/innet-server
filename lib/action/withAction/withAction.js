'use strict';

var Action = require('../Action/Action.js');

function withAction(target) {
    var originInit = target.prototype.init;
    target.prototype.init = function init() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.action = args[2][Action.ACTION];
        return originInit.apply(this, args);
    };
    return target;
}

module.exports = withAction;
