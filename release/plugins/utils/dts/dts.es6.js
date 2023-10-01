import { useProps } from '@innet/jsx';
import { promises } from 'node:fs';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { generateTypes } from '../../../utils/generateTypes/generateTypes.es6.js';

const dts = () => {
    const { namespace = process.env.INNET_DTS_NAMESPACE, path = process.env.INNET_DTS_PATH || 'src/apiTypes.d.ts', } = useProps() || {};
    const { docs } = useApi();
    promises.writeFile(path, generateTypes(docs, namespace)).catch(e => {
        console.error(e);
    });
};

export { dts };
