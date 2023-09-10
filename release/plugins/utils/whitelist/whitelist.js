'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function whitelist() {
    const { ip = process.env.WHITELIST_IP, } = jsx.useProps() || {};
    const children = jsx.useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    if (!ips)
        return;
    useServerPlugin.useServerPlugin(() => {
        const action = useAction.useAction();
        if (!action.clientIp || !ips.includes(action.clientIp)) {
            return children;
        }
    });
}

exports.whitelist = whitelist;
