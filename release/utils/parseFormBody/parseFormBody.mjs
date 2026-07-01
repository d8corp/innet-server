import { Form } from 'multiparty';
import '../FileData/index.mjs';
import '../parseSearch/index.mjs';
import { Bin } from '../FileData/Bin.mjs';
import { parseSearch } from '../parseSearch/parseSearch.mjs';

async function parseFormBody(req) {
    return await new Promise((resolve, reject) => {
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
                    const { headers, ...options } = value;
                    const binOptions = {
                        ...options,
                        disposition: headers['content-disposition'],
                        type: headers['content-type'],
                    };
                    queryFiles.push(new Bin(binOptions));
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
}

export { parseFormBody };
