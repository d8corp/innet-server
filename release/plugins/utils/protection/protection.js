'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function protection() {
    const { maxAge = Number(process.env.INNET_PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60, value = process.env.INNET_PROTECTION, excludeIp = process.env.INNET_PROTECTED_IP, cookieKey = process.env.INNET_PROTECTION_COOKIE_KEY || 'protection', searchKey = process.env.INNET_PROTECTION_SEARCH_KEY || 'protection', } = jsx.useProps() || {};
    const children = jsx.useChildren();
    if (!value)
        return;
    const excludeIps = Array.isArray(excludeIp) ? excludeIp : excludeIp === null || excludeIp === void 0 ? void 0 : excludeIp.split(',');
    useServerPlugin.useServerPlugin(() => {
        const action = useAction.useAction();
        if (!action.clientIp)
            return children;
        if (excludeIps === null || excludeIps === void 0 ? void 0 : excludeIps.includes(action.clientIp))
            return;
        const { [cookieKey]: cookieProtection } = action.cookies;
        if (cookieProtection && cookieProtection === value)
            return;
        const { [searchKey]: searchProtection } = action.search;
        if (searchProtection && searchProtection === value) {
            action.setCookie(cookieKey, value, {
                maxAge,
                httpOnly: true,
                secure: true,
                path: '/',
            });
            return;
        }
        action.setCookie(cookieKey);
        return children;
    });
}

exports.protection = protection;
