import { useHandler, innet } from 'innet';
import { useProps } from '@innet/jsx';
import fs from 'node:fs';
import mime from 'mime';
import '../../../hooks/index.mjs';
import { useResponse } from '../../../hooks/useResponse/useResponse.mjs';
import { useThrow } from '../../../hooks/useThrow/useThrow.mjs';

function file() {
    const handler = useHandler();
    const { children, ...props } = useProps();
    const res = useResponse();
    if (!res) {
        useThrow('<{type}> MUST be in <return> or <preset>');
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
            return;
        }
    }
    innet(children, handler);
}

export { file };
