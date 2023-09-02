'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const tagContext = new jsx.Context();
function useTag() {
    return jsx.useContext(tagContext);
}

exports.tagContext = tagContext;
exports.useTag = useTag;
