import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

const cookie = () => {
    const action = useAction();
    const _a = useProps(), { key, value } = _a, opt = __rest(_a, ["key", "value"]);
    action.setCookie(key, value, opt);
};

export { cookie };
