'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function blacklist() {
    const { ip = process.env.INNET_BLACKLIST_IP, } = jsx.useProps() || {};
    const children = jsx.useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    useServerPlugin.useServerPlugin(() => {
        const action = useAction.useAction();
        if (!action.clientIp || (ips === null || ips === void 0 ? void 0 : ips.includes(action.clientIp))) {
            return children;
        }
    });
}

exports.blacklist = blacklist;
