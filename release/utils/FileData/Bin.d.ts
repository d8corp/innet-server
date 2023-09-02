export interface BinOptions {
    /**
     * A field name of FormData request
     */
    fieldName: string;
    /**
     * Full origin file name
     */
    originalFilename: string;
    /**
     * Full path to the file on server, you MUST use it only on server side for the safe
     */
    path: string;
    /**
     * MIME-type of the file
     */
    type: string;
    disposition: string;
    /**
     * The file size
     */
    size: number;
}
export declare class Bin implements BinOptions {
    /**
     * A file name, without extension
     */
    filename: string;
    /**
     * The extension of the origin file from originalFilename
     */
    extension?: string;
    type: string;
    disposition: string;
    fieldName: string;
    originalFilename: string;
    path: string;
    size: number;
    constructor(options: BinOptions);
    toJSON(): {
        $: string;
        originalFilename: string;
        type: string;
        disposition: string;
        size: number;
    };
}
