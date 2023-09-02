'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useBodyFile = require('../../../hooks/useBodyFile/useBodyFile.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var bin = require('../../../utils/rules/bin/bin.js');
var minBin = require('../../../utils/rules/minBin/minBin.js');
var maxBin = require('../../../utils/rules/maxBin/maxBin.js');
var binaryAccept = require('../../../utils/rules/binaryAccept/binaryAccept.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const binary = () => {
    useBlock.useBlock('path');
    useBodyFile.useBodyFile();
    const props = jsx.useProps();
    const schema = useSchemaType.useSchemaType('string', props);
    if (schema) {
        schema.format = 'binary';
    }
    const rules = [];
    rules.push(bin.bin);
    if (props === null || props === void 0 ? void 0 : props.min) {
        rules.push(minBin.minBin(props.min));
    }
    if (props === null || props === void 0 ? void 0 : props.max) {
        rules.push(maxBin.maxBin(props.max));
    }
    if (props === null || props === void 0 ? void 0 : props.accept) {
        rules.push(binaryAccept.binaryAccept(props.accept));
    }
    const parentRule = useParentRule.useParentRule();
    useRule.useRule(parentRule(pipe.pipe(...rules)));
};

exports.binary = binary;
