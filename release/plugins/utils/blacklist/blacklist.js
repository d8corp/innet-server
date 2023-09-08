'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useRequestPlugin = require('../../../hooks/useRequestPlugin/useRequestPlugin.js');

function blacklist() {
    const { ip = process.env.BLACKLIST_IP, } = jsx.useProps() || {};
    const children = jsx.useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    useRequestPlugin.useRequestPlugin(action => {
        console.log(action.clientIp);
        if (!action.clientIp || (ips === null || ips === void 0 ? void 0 : ips.includes(action.clientIp))) {
            return children;
        }
    });
}

exports.blacklist = blacklist;
