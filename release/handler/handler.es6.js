import { createHandler } from 'innet';
import { context, slot, slots, jsxPlugins, jsxComponent } from '@innet/jsx';
import { arraySync, async, promise, array as array$1, nullish, object as object$1, fn } from '@innet/utils';
import '../plugins/index.es6.js';
import { api } from '../plugins/main/api/api.es6.js';
import { array } from '../plugins/schema/array/array.es6.js';
import { binary } from '../plugins/schema/binary/binary.es6.js';
import { blacklist } from '../plugins/utils/blacklist/blacklist.es6.js';
import { body } from '../plugins/main/body/body.es6.js';
import { boolean } from '../plugins/schema/boolean/boolean.es6.js';
import { cms } from '../plugins/request/cms/cms.es6.js';
import { contact } from '../plugins/main/contact/contact.es6.js';
import { cookie } from '../plugins/request/cookie/cookie.es6.js';
import { date } from '../plugins/schema/date/date.es6.js';
import { dev } from '../plugins/utils/dev/dev.es6.js';
import { dts } from '../plugins/utils/dts/dts.es6.js';
import { endpoint } from '../plugins/main/endpoint/endpoint.es6.js';
import { error } from '../plugins/request/error/error.es6.js';
import { field } from '../plugins/schema/field/field.es6.js';
import { file } from '../plugins/request/file/file.es6.js';
import { header } from '../plugins/request/header/header.es6.js';
import { host } from '../plugins/main/host/host.es6.js';
import { integer } from '../plugins/schema/integer/integer.es6.js';
import { license } from '../plugins/main/license/license.es6.js';
import { nullPlugin } from '../plugins/schema/null/null.es6.js';
import { number } from '../plugins/schema/number/number.es6.js';
import { object } from '../plugins/schema/object/object.es6.js';
import { param } from '../plugins/main/param/param.es6.js';
import { preset } from '../plugins/main/preset/preset.es6.js';
import { prod } from '../plugins/utils/prod/prod.es6.js';
import { protection } from '../plugins/utils/protection/protection.es6.js';
import { proxy } from '../plugins/request/proxy/proxy.es6.js';
import { redirect } from '../plugins/request/redirect/redirect.es6.js';
import { request } from '../plugins/main/request/request.es6.js';
import { response } from '../plugins/main/response/response.es6.js';
import { server } from '../plugins/main/server/server.es6.js';
import { swagger } from '../plugins/utils/swagger/swagger.es6.js';
import { string } from '../plugins/schema/string/string.es6.js';
import { success } from '../plugins/request/success/success.es6.js';
import { tag } from '../plugins/main/tag/tag.es6.js';
import { tuple } from '../plugins/schema/tuple/tuple.es6.js';
import { uuid } from '../plugins/schema/uuid/uuid.es6.js';
import { variable } from '../plugins/main/variable/variable.es6.js';
import { whitelist } from '../plugins/utils/whitelist/whitelist.es6.js';
import { serverFn } from '../plugins/handler/serverFn/serverFn.es6.js';

const arrayPlugins = [
    arraySync,
];
const JSXPlugins = {
    api,
    array,
    binary,
    blacklist,
    body,
    boolean,
    cms,
    contact,
    context,
    cookie,
    date,
    dev,
    dts,
    endpoint,
    error,
    field,
    file,
    header,
    host,
    integer,
    license,
    null: nullPlugin,
    number,
    object,
    param,
    preset,
    prod,
    protection,
    proxy,
    redirect,
    request,
    response,
    slot,
    slots,
    server,
    swagger,
    string,
    success,
    tag,
    tuple,
    uuid,
    variable,
    whitelist,
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
    array$1(arrayPlugins),
    nullish([]),
    object$1(objectPlugins),
    fn(fnPlugins),
]);

export { JSXPlugins, arrayPlugins, fnPlugins, handler, objectPlugins, promisePlugins };
