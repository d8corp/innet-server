import { useHandler, innet } from 'innet';
import { useProps } from '@innet/jsx';
import path from 'node:path';
import '../file/index.mjs';
import '../../../hooks/index.mjs';
import { usePath } from '../../../hooks/usePath/usePath.mjs';
import { file } from '../file/file.mjs';

function cms() {
    const { children, dir = process.env.INNET_CMS_DIR || '.', prefix = process.env.INNET_CMS_PREFIX || '/', } = useProps();
    const handler = useHandler();
    let url = usePath();
    if (url.startsWith(prefix)) {
        url = url.slice(prefix.length);
    }
    else {
        return innet(children, handler);
    }
    const filePath = path.join(dir, url);
    innet({ children, props: { path: filePath }, type: file }, handler);
}

export { cms };
