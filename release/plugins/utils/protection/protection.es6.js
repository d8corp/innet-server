import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

function protection() {
    const { maxAge = Number(process.env.PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60, value = process.env.PROTECTION, excludeIp = process.env.PROTECTED_IP, cookieKey = process.env.PROTECTION_COOKIE_KEY || 'protection', searchKey = process.env.PROTECTION_SEARCH_KEY || 'protection', } = useProps() || {};
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

export { protection };
