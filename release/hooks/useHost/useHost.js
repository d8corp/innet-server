'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const hostContext = new jsx.Context();
function useHost() {
    const host = jsx.useContext(hostContext);
    if (!host) {
        throw Error('Use `useHost` in <host>');
    }
    return host;
}

exports.hostContext = hostContext;
exports.useHost = useHost;
