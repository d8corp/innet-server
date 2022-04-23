import html from '@innet/html';
import { jsxPlugins, jsxTemplate } from '@innet/jsx';
import { switchAsync } from '@innet/switch';
import { promise, array, object, fn, arrayAsync, arrayClear, arraySingleLess, async } from '@innet/utils';
import { createHandler } from 'innet';
import { cookie } from '../plugins/cookie/cookie.es6.js';
import { header } from '../plugins/header/header.es6.js';
import { router } from '../plugins/router/router.es6.js';
import { success } from '../plugins/success/success.es6.js';
import { error } from '../plugins/error/error.es6.js';
import { cms } from '../plugins/cms/cms.es6.js';
import { file } from '../plugins/file/file.es6.js';
import { proxy } from '../plugins/proxy/proxy.es6.js';
import { redirect } from '../plugins/redirect/redirect.es6.js';
import { server } from '../server/server.es6.js';
import { serverFn } from '../experimental/serverFn/serverFn.es6.js';

const arrayPlugins = [
    arrayAsync,
    arrayClear,
    arraySingleLess,
];
const JSXPlugins = {
    server,
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
};
const fnPlugins = [
    serverFn,
];
const objectPlugins = [
    jsxPlugins(JSXPlugins),
    jsxTemplate,
];
const promisePlugins = [
    async,
];
var handler = createHandler([
    promise(promisePlugins),
    array(arrayPlugins),
    object(objectPlugins),
    fn(fnPlugins),
]);

export { JSXPlugins, arrayPlugins, handler as default, fnPlugins, objectPlugins, promisePlugins };
