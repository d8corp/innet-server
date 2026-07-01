import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useAction } from '../../../hooks/useAction/useAction.mjs';

const cookie = () => {
    const action = useAction();
    const { key, value, ...opt } = useProps();
    action.setCookie(key, value, opt);
};

export { cookie };
