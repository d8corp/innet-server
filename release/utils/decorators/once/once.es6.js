const secretKey = Symbol('once');
function getCacheObject(target) {
    return target[secretKey] || (target[secretKey] = {});
}
function once(target, context) {
    return context.kind === 'field'
        ? function (fn) {
            let cache = secretKey;
            return function () {
                if (cache !== secretKey)
                    return cache;
                return (cache = ('apply' in fn ? fn.apply(this, arguments) : fn(...arguments)));
            };
        }
        : function once() {
            const map = getCacheObject(this);
            if (context.name in map) {
                return map[context.name];
            }
            return (map[context.name] = target.apply(this, arguments));
        };
}

export { once };
