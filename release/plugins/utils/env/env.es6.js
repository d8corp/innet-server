import innet, { useHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';

const env = () => {
    const { is, of = 'NODE_ENV', } = useProps();
    if (Array.isArray(is) ? is.includes(process.env[of]) : process.env[of] === is) {
        innet(useChildren(), useHandler());
    }
};

export { env };
