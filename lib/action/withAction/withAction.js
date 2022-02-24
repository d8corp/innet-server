'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.withAction = withAction;
