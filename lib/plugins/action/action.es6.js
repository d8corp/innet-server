import { __awaiter } from 'tslib';
import innet from 'innet';
import { CONTINUE } from '../../constants.es6.js';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import { serverContext } from '../../hooks/useServer/useServer.es6.js';
import 'qs';
import { Action } from '../../utils/action/Action/Action.es6.js';

function action({ props = {}, children }, handler) {
    const server = serverContext.get(handler);
    if (!server) {
        throw Error('Use <action> inside <server>');
    }
    const { onError, unknownError = '' } = props;
    server.on('request', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const childHandler = Object.create(handler);
        childHandler[actionContext.key] = new Action(req, res, props);
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
                onError === null || onError === void 0 ? void 0 : onError(e, actionContext.get(childHandler));
                res.write(unknownError);
            }
        }
        res.end();
    }));
}

export { action };
