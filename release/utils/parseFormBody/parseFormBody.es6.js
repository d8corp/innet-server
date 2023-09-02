import { __awaiter, __rest } from 'tslib';
import { Form } from 'multiparty';
import '../FileData/index.es6.js';
import '../parseSearch/index.es6.js';
import { Bin } from '../FileData/Bin.es6.js';
import { parseSearch } from '../parseSearch/parseSearch.es6.js';

function parseFormBody(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            const form = new Form();
            form.parse(req, (error, fields, files) => {
                if (error) {
                    reject(error);
                    return;
                }
                let query = '';
                const queryFiles = [];
                for (const key in fields) {
                    for (const value of fields[key]) {
                        if (query) {
                            query += '&';
                        }
                        query += `${key}=${value.replaceAll('=', '%26')}`;
                    }
                }
                for (const key in files) {
                    const values = files[key];
                    for (const value of values) {
                        if (query) {
                            query += '&';
                        }
                        query += `${key}==${queryFiles.length}`;
                        const { headers } = value, options = __rest(value, ["headers"]);
                        options.type = headers['content-type'];
                        options.disposition = headers['content-disposition'];
                        queryFiles.push(new Bin(options));
                    }
                }
                resolve(parseSearch(query, {
                    decoder(value, decoder, charset, type) {
                        if (type === 'key') {
                            return decoder(value, decoder, charset);
                        }
                        if (value.startsWith('=')) {
                            return queryFiles[Number(value.slice(1))];
                        }
                        return value.replaceAll('%26', '=');
                    },
                }));
            });
        });
    });
}

export { parseFormBody };
