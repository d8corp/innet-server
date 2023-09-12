'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useTag = require('../../../hooks/useTag/useTag.js');
var useApi = require('../../../hooks/useApi/useApi.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const tag = () => {
    if (jsx.useContext(useTag.tagContext)) {
        throw Error('You cannot use a <tag> inside another one');
    }
    const { name, description } = jsx.useProps();
    const children = jsx.useChildren();
    const { docs } = useApi.useApi();
    const tag = { name };
    if (description) {
        tag.description = description;
    }
    if (!docs.tags) {
        docs.tags = [tag];
    }
    else if (!docs.tags.find(({ name: tagName }) => tagName === name)) {
        docs.tags.push(tag);
    }
    else {
        throw Error(`You cannot use two tags with the same name (${name})`);
    }
    const handler = innet.useNewHandler();
    handler[useTag.tagContext.key] = tag;
    innet__default["default"](children, handler);
};

exports.tag = tag;
