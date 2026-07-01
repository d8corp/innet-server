import { useContext } from '@innet/jsx';
import '../useParam/index.mjs';
import '../useThrow/index.mjs';
import { paramContext } from '../useParam/useParam.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

function useBlock(...placements) {
    const param = useContext(paramContext);
    if (param && placements.includes(param.props.in)) {
        useThrow(`<{type}> cannot be used in patch param <param in="${param === null || param === void 0 ? void 0 : param.props.in}">`);
    }
}

export { useBlock };
