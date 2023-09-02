'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const paramContext = new jsx.Context();
function useParam() {
    const param = jsx.useContext(paramContext);
    if (!param) {
        throw Error('`useParam` MUST be used in <param>');
    }
    return param;
}

exports.paramContext = paramContext;
exports.useParam = useParam;
