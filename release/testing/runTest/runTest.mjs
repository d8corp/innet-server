import { innet } from 'innet';
import { Watch } from 'watch-state';
import '../../handler/index.mjs';
import { handler } from '../../handler/handler.mjs';

async function runTest(app) {
    const { promise: start, resolve: onStart, } = Promise.withResolvers();
    const { promise: end, resolve: onEnd, } = Promise.withResolvers();
    const server = new Watch(() => {
        innet(app(onStart, onEnd), handler);
    });
    await start;
    return async () => {
        server.destroy();
        await end;
    };
}

export { runTest };
