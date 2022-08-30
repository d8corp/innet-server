import innet from 'innet';
import { Watch } from 'watch-state';

function serverFn() {
    return (fn, next, handler) => {
        let result;
        new Watch(update => (result = innet(fn(update), handler)));
        return result;
    };
}

export { serverFn };
