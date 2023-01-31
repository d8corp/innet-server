import { __awaiter } from 'tslib';
import innet from 'innet';
import fs from 'fs';
import http from 'http';
import http2 from 'https';
import { onDestroy } from 'watch-state';
import { ACTION, Action } from '../action/Action/Action.es6.js';
import { CONTINUE } from '../constants.es6.js';

const isInvalidPath = require('is-invalid-path');
function server({ props = {}, children }, handler) {
    const { env } = process;
    let { ssl: { key = env.SSL_KEY, cert = env.SSL_CRT } = {}, actionParams } = props;
    if (!isInvalidPath(key)) {
        key = fs.readFileSync(key).toString();
    }
    if (!isInvalidPath(cert)) {
        cert = fs.readFileSync(cert).toString();
    }
    const https = Boolean(key && cert);
    const { port = env.PORT || (https ? 442 : 80), unknownError = '', onStart, onError, onRequest } = props;
    const server = https ? http2.createServer({ key, cert }) : http.createServer();
    onDestroy(() => {
        var _a;
        (_a = props.onDestroy) === null || _a === void 0 ? void 0 : _a.call(props);
        server.close();
    });
    server.on('request', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const childHandler = Object.create(handler);
        childHandler[ACTION] = new Action(req, res, actionParams);
        if (onRequest) {
            yield onRequest(childHandler[ACTION]);
        }
        if (children) {
            try {
                const result = yield innet(children, childHandler);
                if (result === CONTINUE) {
                    return;
                }
                if (typeof result === 'string') {
                    res.write(result);
                }
            }
            catch (e) {
                res.statusCode = 520;
                onError === null || onError === void 0 ? void 0 : onError(e);
                res.write(unknownError);
            }
        }
        res.end();
    }));
    let res, rej;
    const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });
    server.on('error', e => {
        rej(e);
        onError === null || onError === void 0 ? void 0 : onError(e);
    });
    server.listen(port, () => {
        const url = `http${https ? 's' : ''}://localhost:${port}`;
        onStart === null || onStart === void 0 ? void 0 : onStart(url);
        res(url);
    });
    return promise;
}

export { server };
