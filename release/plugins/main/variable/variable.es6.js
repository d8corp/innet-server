import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useHost } from '../../../hooks/useHost/useHost.es6.js';

const variable = () => {
    const { server } = useHost();
    const { key, values, value = values === null || values === void 0 ? void 0 : values[0], ...rest } = useProps();
    if (!server.variables) {
        server.variables = {};
    }
    server.variables[key] = { ...rest, default: value, enum: values };
};

export { variable };
