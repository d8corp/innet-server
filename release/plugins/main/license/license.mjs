import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useOneElementError } from '../../../hooks/useOneElementError/useOneElementError.mjs';

const license = () => {
    const { docs } = useApi();
    const props = useProps();
    if (docs.info.license) {
        useOneElementError();
    }
    docs.info.license = props;
};

export { license };
