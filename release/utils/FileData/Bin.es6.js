class Bin {
    constructor(options) {
        Object.assign(this, options);
        const splitFilename = options.originalFilename.split('.');
        this.extension = splitFilename.pop();
        this.filename = splitFilename.join('.');
    }
    toJSON() {
        return {
            $: 'binary',
            originalFilename: this.originalFilename,
            type: this.type,
            disposition: this.disposition,
            size: this.size,
        };
    }
}

export { Bin };
