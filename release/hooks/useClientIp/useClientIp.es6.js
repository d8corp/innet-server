import { getClientIp } from 'request-ip';
import '../useRequest/index.es6.js';
import '../useThrow/index.es6.js';
import { useRequest } from '../useRequest/useRequest.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

function useClientIp() {
    const req = useRequest();
    if (!req) {
        useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    return getClientIp(req);
}

export { useClientIp };
