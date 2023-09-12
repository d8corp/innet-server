import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

function blacklist() {
    const { ip = process.env.INNET_BLACKLIST_IP, } = useProps() || {};
    const children = useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    useServerPlugin(() => {
        const action = useAction();
        if (!action.clientIp || (ips === null || ips === void 0 ? void 0 : ips.includes(action.clientIp))) {
            return children;
        }
    });
}

export { blacklist };
