import innet, { useHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';

const env = () => {
    const { of = 'NODE_ENV', is } = useProps();
    if (Array.isArray(is) ? is.includes(process.env[of]) : process.env[of] === is) {
        innet(useChildren(), useHandler());
    }
};

export { env };
