function JSONString(target) {
    return JSON.stringify(target, (key, value) => {
        if (typeof value === 'bigint') {
            return String(value);
        }
        return value;
    });
}

export { JSONString };
