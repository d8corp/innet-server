import { useHandler, useApp, innet } from 'innet';
import { Watch } from 'watch-state';

const serverFn = () => {
    return () => {
        const handler = useHandler();
        const fn = useApp();
        new Watch(() => {
            innet(fn(), handler);
        });
    };
};

export { serverFn };
