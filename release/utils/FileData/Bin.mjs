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
            disposition: this.disposition,
            originalFilename: this.originalFilename,
            size: this.size,
            type: this.type,
        };
    }
}

export { Bin };
