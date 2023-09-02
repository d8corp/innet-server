import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useOneElementError } from '../../../hooks/useOneElementError/useOneElementError.es6.js';

const license = () => {
    const { docs } = useApi();
    const props = useProps();
    if (docs.info.license) {
        useOneElementError();
    }
    docs.info.license = props;
};

export { license };
