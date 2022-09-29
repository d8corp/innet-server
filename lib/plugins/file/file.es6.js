import innet from 'innet';
import fs from 'fs';
import mime from 'mime';
import { ACTION } from '../../action/Action/Action.es6.js';

function file({ props, children = null }, handler) {
    const { res } = handler[ACTION];
    const { path } = props;
    if (fs.existsSync(path)) {
        const stat = fs.statSync(path);
        if (stat.isFile()) {
            const readStream = fs.createReadStream(path);
            const result = innet(children, handler);
            const run = () => {
                res.writeHead(200, {
                    'Content-Type': mime.getType(path),
                    'Content-Length': stat.size,
                });
                readStream.pipe(res);
            };
            if (result instanceof Promise) {
                result.then(run);
            }
            else {
                run();
            }
            return new Promise((resolve, reject) => {
                readStream.once('end', () => resolve(result));
                readStream.once('error', reject);
            });
        }
    }
}

export { file };
