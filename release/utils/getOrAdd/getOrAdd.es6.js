function getOrAdd(target, path, defaultValues) {
    const pathKeys = String(path).split('.').map(value => isNaN(Number(value)) ? value : Number(value));
    let currentTarget = target;
    for (let i = 0; i < pathKeys.length; i++) {
        const key = pathKeys[i];
        if (currentTarget[key] === undefined) {
            currentTarget[key] = defaultValues[i];
        }
        currentTarget = currentTarget[key];
    }
    return currentTarget;
}

export { getOrAdd };
