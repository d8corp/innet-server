import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useOneElementError } from '../../../hooks/useOneElementError/useOneElementError.es6.js';

const contact = () => {
    const { docs } = useApi();
    const props = useProps();
    const { contact } = docs.info;
    if (contact) {
        useOneElementError();
    }
    docs.info.contact = props;
};

export { contact };
