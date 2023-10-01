export interface BinOptions {
    disposition: string;
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
     * The file size
     */
    size: number;
    /**
     * MIME-type of the file
     */
    type: string;
}
export declare class Bin implements BinOptions {
    disposition: string;
    /**
     * The extension of the origin file from originalFilename
     */
    extension?: string;
    fieldName: string;
    /**
     * A file name, without extension
     */
    filename: string;
    originalFilename: string;
    path: string;
    size: number;
    type: string;
    constructor(options: BinOptions);
    toJSON(): {
        $: string;
        disposition: string;
        originalFilename: string;
        size: number;
        type: string;
    };
}
