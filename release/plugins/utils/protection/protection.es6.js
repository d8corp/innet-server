import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useRequestPlugin } from '../../../hooks/useRequestPlugin/useRequestPlugin.es6.js';

function protection() {
    const { html, maxAge = Number(process.env.PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60, value = process.env.PROTECTION, excludeIp = process.env.PROTECTED_IP, cookieKey = process.env.PROTECTION_COOKIE_KEY || 'protection', searchKey = process.env.PROTECTION_SEARCH_KEY || 'protection', } = useProps();
    if (!value)
        return;
    const excludeIps = Array.isArray(excludeIp) ? excludeIp : excludeIp === null || excludeIp === void 0 ? void 0 : excludeIp.split(',');
    useRequestPlugin(action => {
        if (!action.clientIp) {
            action.res.write(html);
            action.res.end();
            return true;
        }
        if (excludeIps === null || excludeIps === void 0 ? void 0 : excludeIps.includes(action.clientIp))
            return false;
        const { [cookieKey]: cookieProtection } = action.cookies;
        if (cookieProtection && cookieProtection === value)
            return false;
        const { [searchKey]: searchProtection } = action.search;
        if (searchProtection && searchProtection === value) {
            action.setCookie(cookieKey, value, {
                maxAge,
                httpOnly: true,
                secure: true,
                path: '/',
            });
            return false;
        }
        action.setCookie(cookieKey);
        action.res.write(html);
        action.res.end();
        return true;
    });
}

export { protection };
