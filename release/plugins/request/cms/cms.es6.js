import innet, { useHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import path from 'node:path';
import '../file/index.es6.js';
import '../../../hooks/index.es6.js';
import { usePath } from '../../../hooks/usePath/usePath.es6.js';
import { file } from '../file/file.es6.js';

function cms() {
    const { prefix = process.env.INNET_CMS_PREFIX || '/', dir = process.env.INNET_CMS_DIR || '.', } = useProps() || {};
    const children = useChildren();
    const handler = useHandler();
    let url = usePath();
    if (url.startsWith(prefix)) {
        url = url.slice(prefix.length);
    }
    else {
        return innet(children, handler);
    }
    const filePath = path.join(dir, url);
    innet({ type: file, props: { path: filePath }, children }, handler);
}

export { cms };
