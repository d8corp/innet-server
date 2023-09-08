import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useRequestPlugin } from '../../../hooks/useRequestPlugin/useRequestPlugin.es6.js';

function blacklist() {
    const { ip = process.env.BLACKLIST_IP, } = useProps() || {};
    const children = useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    useRequestPlugin(action => {
        console.log(action.clientIp);
        if (!action.clientIp || (ips === null || ips === void 0 ? void 0 : ips.includes(action.clientIp))) {
            return children;
        }
    });
}

export { blacklist };
