const secretKey = Symbol('once');
function getCacheObject(target) {
    // @ts-expect-error: FIXME
    return target[secretKey] || (target[secretKey] = {});
}
function once(target, context) {
    return context.kind === 'field'
        ? function (fn) {
            let cache = secretKey;
            return function () {
                if (cache !== secretKey)
                    return cache;
                // @ts-expect-error: FIXME
                return (cache = ('apply' in fn ? fn.apply(this, arguments) : fn(...arguments)));
            };
        }
        : function once() {
            // @ts-expect-error: FIXME
            const map = getCacheObject(this);
            if (map[context.name]) {
                return map[context.name];
            }
            // @ts-expect-error: FIXME
            return (map[context.name] = target.apply(this, arguments));
        };
}

export { once };
