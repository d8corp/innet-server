import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';

const header = () => {
    const res = useResponse();
    if (!res) {
        useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const { key, value } = useProps();
    res.setHeader(key, value);
};

export { header };
