import { useContext } from '@innet/jsx';
import '../useParam/index.es6.js';
import '../useThrow/index.es6.js';
import { paramContext } from '../useParam/useParam.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

function useBlock(...placements) {
    const param = useContext(paramContext);
    if (param && placements.includes(param.props.in)) {
        useThrow(`<{type}> cannot be used in patch param <param in="${param === null || param === void 0 ? void 0 : param.props.in}">`);
    }
}

export { useBlock };
