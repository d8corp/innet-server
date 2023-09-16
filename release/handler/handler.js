'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var utils = require('@innet/utils');
require('../plugins/index.js');
var any = require('../plugins/schema/any/any.js');
var api = require('../plugins/main/api/api.js');
var array = require('../plugins/schema/array/array.js');
var binary = require('../plugins/schema/binary/binary.js');
var blacklist = require('../plugins/utils/blacklist/blacklist.js');
var body = require('../plugins/main/body/body.js');
var boolean = require('../plugins/schema/boolean/boolean.js');
var cms = require('../plugins/request/cms/cms.js');
var contact = require('../plugins/main/contact/contact.js');
var cookie = require('../plugins/request/cookie/cookie.js');
var date = require('../plugins/schema/date/date.js');
var dts = require('../plugins/utils/dts/dts.js');
var endpoint = require('../plugins/main/endpoint/endpoint.js');
var env = require('../plugins/utils/env/env.js');
var error = require('../plugins/request/error/error.js');
var field = require('../plugins/schema/field/field.js');
var file = require('../plugins/request/file/file.js');
var header = require('../plugins/request/header/header.js');
var host = require('../plugins/main/host/host.js');
var integer = require('../plugins/schema/integer/integer.js');
var license = require('../plugins/main/license/license.js');
var _null = require('../plugins/schema/null/null.js');
var number = require('../plugins/schema/number/number.js');
var object = require('../plugins/schema/object/object.js');
var param = require('../plugins/main/param/param.js');
var preset = require('../plugins/main/preset/preset.js');
var protection = require('../plugins/utils/protection/protection.js');
var proxy = require('../plugins/request/proxy/proxy.js');
var redirect = require('../plugins/request/redirect/redirect.js');
var request = require('../plugins/main/request/request.js');
var response = require('../plugins/main/response/response.js');
var server = require('../plugins/main/server/server.js');
var swagger = require('../plugins/utils/swagger/swagger.js');
var string = require('../plugins/schema/string/string.js');
var success = require('../plugins/request/success/success.js');
var tag = require('../plugins/main/tag/tag.js');
var tuple = require('../plugins/schema/tuple/tuple.js');
var uuid = require('../plugins/schema/uuid/uuid.js');
var variable = require('../plugins/main/variable/variable.js');
var whitelist = require('../plugins/utils/whitelist/whitelist.js');
var serverFn = require('../plugins/handler/serverFn/serverFn.js');

const arrayPlugins = [
    utils.arraySync,
];
const JSXPlugins = {
    any: any.any,
    api: api.api,
    array: array.array,
    binary: binary.binary,
    blacklist: blacklist.blacklist,
    body: body.body,
    boolean: boolean.boolean,
    cms: cms.cms,
    contact: contact.contact,
    context: jsx.context,
    cookie: cookie.cookie,
    date: date.date,
    dts: dts.dts,
    endpoint: endpoint.endpoint,
    env: env.env,
    error: error.error,
    field: field.field,
    file: file.file,
    header: header.header,
    host: host.host,
    integer: integer.integer,
    license: license.license,
    null: _null.nullPlugin,
    number: number.number,
    object: object.object,
    param: param.param,
    preset: preset.preset,
    protection: protection.protection,
    proxy: proxy.proxy,
    redirect: redirect.redirect,
    request: request.request,
    response: response.response,
    slot: jsx.slot,
    slots: jsx.slots,
    server: server.server,
    swagger: swagger.swagger,
    string: string.string,
    success: success.success,
    tag: tag.tag,
    tuple: tuple.tuple,
    uuid: uuid.uuid,
    variable: variable.variable,
    whitelist: whitelist.whitelist,
};
const fnPlugins = [
    serverFn.serverFn,
];
const objectPlugins = [
    jsx.jsxPlugins(JSXPlugins),
    jsx.jsxComponent,
];
const promisePlugins = [
    utils.async,
];
const handler = innet.createHandler([
    utils.promise(promisePlugins),
    utils.array(arrayPlugins),
    utils.nullish([]),
    utils.object(objectPlugins),
    utils.fn(fnPlugins),
]);

exports.JSXPlugins = JSXPlugins;
exports.arrayPlugins = arrayPlugins;
exports.fnPlugins = fnPlugins;
exports.handler = handler;
exports.objectPlugins = objectPlugins;
exports.promisePlugins = promisePlugins;
