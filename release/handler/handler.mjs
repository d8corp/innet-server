import { createHandler } from 'innet';
import { jsxPlugins, jsxComponent } from '@innet/jsx';
import { arraySync, async, promise, array as array$1, nullish, object as object$1, fn } from '@innet/utils';
import '../plugins/index.mjs';
import { any } from '../plugins/schema/any/any.mjs';
import { api } from '../plugins/main/api/api.mjs';
import { array } from '../plugins/schema/array/array.mjs';
import { binary } from '../plugins/schema/binary/binary.mjs';
import { blacklist } from '../plugins/utils/blacklist/blacklist.mjs';
import { body } from '../plugins/main/body/body.mjs';
import { boolean } from '../plugins/schema/boolean/boolean.mjs';
import { cms } from '../plugins/request/cms/cms.mjs';
import { contact } from '../plugins/main/contact/contact.mjs';
import { cookie } from '../plugins/request/cookie/cookie.mjs';
import { date } from '../plugins/schema/date/date.mjs';
import { dts } from '../plugins/utils/dts/dts.mjs';
import { endpoint } from '../plugins/main/endpoint/endpoint.mjs';
import { env } from '../plugins/utils/env/env.mjs';
import { error } from '../plugins/request/error/error.mjs';
import { field } from '../plugins/schema/field/field.mjs';
import { file } from '../plugins/request/file/file.mjs';
import { header } from '../plugins/request/header/header.mjs';
import { host } from '../plugins/main/host/host.mjs';
import { integer } from '../plugins/schema/integer/integer.mjs';
import { license } from '../plugins/main/license/license.mjs';
import { nullPlugin } from '../plugins/schema/null/null.mjs';
import { number } from '../plugins/schema/number/number.mjs';
import { object } from '../plugins/schema/object/object.mjs';
import { param } from '../plugins/main/param/param.mjs';
import { preset } from '../plugins/main/preset/preset.mjs';
import { protection } from '../plugins/utils/protection/protection.mjs';
import { proxy } from '../plugins/request/proxy/proxy.mjs';
import { redirect } from '../plugins/request/redirect/redirect.mjs';
import { response } from '../plugins/main/response/response.mjs';
import { returnPlugin } from '../plugins/main/return/return.mjs';
import { server } from '../plugins/main/server/server.mjs';
import { string } from '../plugins/schema/string/string.mjs';
import { success } from '../plugins/request/success/success.mjs';
import { tag } from '../plugins/main/tag/tag.mjs';
import { tuple } from '../plugins/schema/tuple/tuple.mjs';
import { ui } from '../plugins/utils/ui/ui.mjs';
import { uuid } from '../plugins/schema/uuid/uuid.mjs';
import { variable } from '../plugins/main/variable/variable.mjs';
import { whitelist } from '../plugins/utils/whitelist/whitelist.mjs';
import { serverFn } from '../plugins/handler/serverFn/serverFn.mjs';

const arrayPlugins = [
    arraySync,
];
const JSXPlugins = {
    any,
    api,
    array,
    binary,
    blacklist,
    body,
    boolean,
    cms,
    contact,
    cookie,
    date,
    dts,
    endpoint,
    env,
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
    protection,
    proxy,
    redirect,
    response,
    return: returnPlugin,
    server,
    string,
    success,
    tag,
    tuple,
    ui,
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
