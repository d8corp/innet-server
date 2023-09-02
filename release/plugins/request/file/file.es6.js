import innet, { useHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import fs from 'node:fs';
import mime from 'mime';
import '../../../hooks/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';

function file() {
    const handler = useHandler();
    const props = useProps();
    const children = useChildren();
    const res = useResponse();
    if (!res) {
        useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const { path } = props;
    if (fs.existsSync(path)) {
        const stat = fs.statSync(path);
        if (stat.isFile()) {
            const readStream = fs.createReadStream(path);
            const type = mime.getType(path);
            const headers = {
                'Content-Length': stat.size,
            };
            if (type) {
                headers['Content-Type'] = type;
            }
            res.writeHead(200, headers);
            readStream.pipe(res);
        }
    }
    else {
        innet(children, handler);
    }
}

export { file };
