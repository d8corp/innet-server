import { createHandler } from 'innet';
import html from '@innet/html';
import { jsxPlugins, jsxComponent, context, slot, slots } from '@innet/jsx';
import { switchAsync } from '@innet/switch';
import { promise, array, nullish, stop, object, fn, arrayAsync, arrayClear, arraySingleLess, async } from '@innet/utils';
import { serverFn } from '../experimental/serverFn/serverFn.es6.js';
import { cookie } from '../plugins/cookie/cookie.es6.js';
import { header } from '../plugins/header/header.es6.js';
import { router } from '../plugins/router/router.es6.js';
import { success } from '../plugins/success/success.es6.js';
import { error } from '../plugins/error/error.es6.js';
import { cms } from '../plugins/cms/cms.es6.js';
import { file } from '../plugins/file/file.es6.js';
import { proxy } from '../plugins/proxy/proxy.es6.js';
import { redirect } from '../plugins/redirect/redirect.es6.js';
import { validation } from '../plugins/validation/validation.es6.js';
import { formatter } from '../plugins/formatter/formatter.es6.js';
import { access } from '../plugins/access/access.es6.js';
import { parseBody } from '../plugins/parseBody/parseBody.es6.js';
import { server } from '../plugins/server/server.es6.js';
import { action } from '../plugins/action/action.es6.js';

const arrayPlugins = [
    arrayAsync,
    arrayClear,
    arraySingleLess,
];
const JSXPlugins = {
    server,
    action,
    html,
    switch: switchAsync,
    router,
    cookie,
    header,
    success,
    error,
    cms,
    file,
    proxy,
    redirect,
    validation,
    formatter,
    context,
    slot,
    slots,
    access,
    'parse-body': parseBody,
};
const fnPlugins = [
    serverFn,
];
const objectPlugins = [
    jsxPlugins(JSXPlugins),
    jsxComponent,
];
const promisePlugins = [
    async,
];
const handler = createHandler([
    promise(promisePlugins),
    array(arrayPlugins),
    nullish([stop]),
    object(objectPlugins),
    fn(fnPlugins),
]);

export { JSXPlugins, arrayPlugins, fnPlugins, handler, objectPlugins, promisePlugins };
