import innet, { useHandler, useApp } from 'innet';
import { Watch } from 'watch-state';

const serverFn = () => {
    return () => {
        const handler = useHandler();
        const fn = useApp();
        new Watch(update => {
            innet(fn(update), handler);
        });
    };
};

export { serverFn };
