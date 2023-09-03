'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function dateFormat(date) {
    if (date === undefined)
        return;
    if (date === 'now')
        return new Date();
    if (['string', 'number'].includes(typeof date))
        return new Date(date);
    return date;
}

exports.dateFormat = dateFormat;