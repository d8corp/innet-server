import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import cookie$1 from 'cookie';
import '../../../hooks/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';

const cookie = () => {
    const res = useResponse();
    if (!res) {
        useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const _a = useProps(), { key, value } = _a, opt = __rest(_a, ["key", "value"]);
    let cookies = res.getHeader('Set-Cookie');
    if (typeof cookies === 'string') {
        cookies = [cookies];
    }
    const normValue = typeof value === 'string' ? cookie$1.serialize(key, value, opt) : `${key}=; max-age=0`;
    if (cookies) {
        cookies.push(normValue);
    }
    else {
        cookies = normValue;
    }
    res.setHeader('Set-Cookie', cookies);
};

export { cookie };
