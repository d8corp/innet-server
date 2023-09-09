'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useServer = require('../../../hooks/useServer/useServer.js');
var Action = require('../../../utils/action/Action.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const presetCondition = new jsx.Context(() => true);
function preset() {
    const { server } = useServer.useServer();
    const handler = innet.useHandler();
    const children = jsx.useChildren();
    const condition = jsx.useContext(presetCondition);
    const listener = (req, res) => {
        const action = new Action.Action(req, res);
        if (condition(action)) {
            const newHandler = Object.create(handler);
            useAction.actionContext.set(newHandler, action);
            innet__default["default"](children, newHandler);
        }
    };
    server.addListener('request', listener);
}

exports.preset = preset;
exports.presetCondition = presetCondition;
