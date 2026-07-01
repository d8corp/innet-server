import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useOneElementError } from '../../../hooks/useOneElementError/useOneElementError.mjs';

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
