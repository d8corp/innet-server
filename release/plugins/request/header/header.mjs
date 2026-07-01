import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useResponse } from '../../../hooks/useResponse/useResponse.mjs';
import { useThrow } from '../../../hooks/useThrow/useThrow.mjs';

const header = () => {
    const res = useResponse();
    if (!res) {
        useThrow('<{type}> MUST be in <return> or <preset>');
    }
    const { key, value, } = useProps();
    res.setHeader(key, value);
};

export { header };
