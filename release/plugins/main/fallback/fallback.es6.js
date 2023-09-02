import { useHandler } from 'innet';
import { useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';

const fallback = () => {
    const api = useApi();
    if (!api) {
        throw Error('Use <fallback> inside <api>');
    }
    if (api.fallback) {
        throw Error('<fallback> MUST be used once on an <api>');
    }
    const children = useChildren();
    const handler = useHandler();
    api.fallback = { children, handler };
};

export { fallback };
