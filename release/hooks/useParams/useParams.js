'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const paramsContext = new jsx.Context({});
function useParams() {
    return jsx.useContext(paramsContext);
}

exports.paramsContext = paramsContext;
exports.useParams = useParams;
