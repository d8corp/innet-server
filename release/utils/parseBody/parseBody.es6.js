import { __awaiter } from 'tslib';
import { StringDecoder } from 'node:string_decoder';

function parseBody(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            const decoder = new StringDecoder('utf-8');
            let buffer = '';
            req.on('data', chunk => {
                buffer += decoder.write(chunk);
            });
            req.on('end', () => {
                buffer += decoder.end();
                resolve(buffer);
            });
            req.on('error', err => {
                reject(err);
            });
        });
    });
}

export { parseBody };
