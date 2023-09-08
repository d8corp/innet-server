'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useRequestPlugin = require('../../../hooks/useRequestPlugin/useRequestPlugin.js');

function whitelist() {
    const { ip = process.env.WHITELIST_IP, } = jsx.useProps() || {};
    const children = jsx.useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    if (!ips)
        return;
    useRequestPlugin.useRequestPlugin(action => {
        if (!action.clientIp || !ips.includes(action.clientIp)) {
            return children;
        }
    });
}

exports.whitelist = whitelist;
