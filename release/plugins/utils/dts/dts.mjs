import { useProps } from '@innet/jsx';
import { promises } from 'node:fs';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useEffect } from '../../../hooks/useEffect/useEffect.mjs';
import { generateTypes } from '../../../utils/generateTypes/generateTypes.mjs';

const dts = () => {
    const { namespace = process.env.INNET_DTS_NAMESPACE, path = process.env.INNET_DTS_PATH || 'src/apiTypes.d.ts', } = useProps() || {};
    const { docs } = useApi();
    useEffect(() => {
        promises.writeFile(path, generateTypes(docs, namespace)).catch(e => {
            console.error(e);
        });
    });
};

export { dts };
