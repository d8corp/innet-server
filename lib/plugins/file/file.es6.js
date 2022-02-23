import fs from 'fs';
import mime from 'mime';
import { ACTION } from '../../action/Action/Action.es6.js';

function file({ props, children = null }, handler) {
    const { res } = handler[ACTION];
    const { path } = props;
    if (fs.existsSync(path)) {
        const stat = fs.statSync(path);
        if (stat.isFile()) {
            res.writeHead(200, {
                'Content-Type': mime.getType(path),
                'Content-Length': stat.size,
            });
            const readStream = fs.createReadStream(path);
            readStream.pipe(res);
            return new Promise((resolve, reject) => {
                readStream.once('end', () => resolve(children));
                readStream.once('error', reject);
            });
        }
    }
    res.statusCode = 404;
}

export { file };
