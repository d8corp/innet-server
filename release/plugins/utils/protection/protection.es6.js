import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

function protection() {
    const { cookieKey = process.env.INNET_PROTECTION_COOKIE_KEY || 'protection', excludeIp = process.env.INNET_PROTECTED_IP, maxAge = Number(process.env.INNET_PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60, searchKey = process.env.INNET_PROTECTION_SEARCH_KEY || 'protection', value = process.env.INNET_PROTECTION, } = useProps() || {};
    const children = useChildren();
    if (!value)
        return;
    const excludeIps = Array.isArray(excludeIp) ? excludeIp : excludeIp === null || excludeIp === void 0 ? void 0 : excludeIp.split(',');
    useServerPlugin(() => {
        const action = useAction();
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
                httpOnly: true,
                maxAge,
                path: '/',
                secure: true,
            });
            return;
        }
        action.setCookie(cookieKey);
        return children;
    });
}

export { protection };
