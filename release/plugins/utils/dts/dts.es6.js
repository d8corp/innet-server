import { __rest, __awaiter } from 'tslib';
import { useProps } from '@innet/jsx';
import dtsGenerator, { parseSchema } from 'dtsgenerator';
import fs from 'node:fs';
import '../../../hooks/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';

const dts = () => {
    const _a = useProps(), { path } = _a, config = __rest(_a, ["path"]);
    const { docs } = useApi();
    dtsGenerator({
        contents: [parseSchema(JSON.parse(JSON.stringify(docs)))],
        config,
    }).then((content) => __awaiter(void 0, void 0, void 0, function* () {
        yield fs.promises.writeFile(path, `interface Bin {
  filename: string
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
  extension?: string
}
${content
            .replaceAll(';', '')
            .replaceAll('number // int64', 'bigint')
            .replaceAll('string // binary', 'Bin')
            .replaceAll('string // date-time', 'Date')}`);
    })).catch(error => {
        console.warn(error);
    });
};

export { dts };
