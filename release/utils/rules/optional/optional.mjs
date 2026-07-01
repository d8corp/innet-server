function optional(rule) {
    return (value, data) => {
        if (value === undefined)
            return;
        return rule(value, data);
    };
}

export { optional };
