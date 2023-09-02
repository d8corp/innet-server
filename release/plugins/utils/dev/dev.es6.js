import innet, { useHandler } from 'innet';
import { useChildren } from '@innet/jsx';

const dev = () => {
    if (process.env.NODE_ENV === 'development') {
        innet(useChildren(), useHandler());
    }
};

export { dev };
