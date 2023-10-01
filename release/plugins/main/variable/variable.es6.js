import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useHost } from '../../../hooks/useHost/useHost.es6.js';

const variable = () => {
    const { server } = useHost();
    const _a = useProps(), { key, values, 
    // predefine
    value = values === null || values === void 0 ? void 0 : values[0] } = _a, rest = __rest(_a, ["key", "values", "value"]);
    if (!server.variables) {
        server.variables = {};
    }
    // @ts-expect-error: FIXME
    server.variables[key] = Object.assign(Object.assign({}, rest), { default: value, enum: values });
};

export { variable };
