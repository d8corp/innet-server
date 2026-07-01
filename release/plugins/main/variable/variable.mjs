import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useHost } from '../../../hooks/useHost/useHost.mjs';

const variable = () => {
    const { server } = useHost();
    const { key, values, 
    // predefine
    value = values === null || values === void 0 ? void 0 : values[0], ...rest } = useProps();
    if (!server.variables) {
        server.variables = {};
    }
    // @ts-expect-error: FIXME
    server.variables[key] = { ...rest, default: value, enum: values };
};

export { variable };
