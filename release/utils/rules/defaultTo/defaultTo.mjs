function defaultTo(defaultValue) {
    return (value) => value !== undefined
        ? value
        : typeof defaultValue === 'function'
            ? defaultValue()
            : defaultValue;
}

export { defaultTo };
