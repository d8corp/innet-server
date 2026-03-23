import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

const cookie = () => {
    const action = useAction();
    const { key, value, ...opt } = useProps();
    action.setCookie(key, value, opt);
};

export { cookie };
