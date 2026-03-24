import { innet, useHandler } from 'innet';
import { useProps } from '@innet/jsx';

const env = () => {
    const { children, is, of = 'NODE_ENV', } = useProps();
    if (Array.isArray(is) ? is.includes(process.env[of]) : process.env[of] === is) {
        innet(children, useHandler());
    }
};

export { env };
