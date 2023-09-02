import innet, { useHandler } from 'innet';
import { useChildren } from '@innet/jsx';

const prod = () => {
    if (process.env.NODE_ENV === 'production') {
        innet(useChildren(), useHandler());
    }
};

export { prod };
