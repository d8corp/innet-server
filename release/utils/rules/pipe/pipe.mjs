function pipe(...rules) {
    return (value, data) => {
        return rules.reduce((value, rule) => rule(value, data), value);
    };
}

export { pipe };
