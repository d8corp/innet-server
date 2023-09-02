import { type HandlerPlugin } from 'innet';
export interface HostProps {
    /**
     * A URL to the target host.
     * This URL supports Server Variables and MAY be relative,
     * to indicate that the host location is relative to the location where the OpenAPI document is being served.
     * Variable substitutions will be made when a variable is named in {brackets}.
     * */
    url: string;
    /**
     * An optional string describing the host designated by the URL.
     * [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.
     * */
    description?: string;
}
export declare const host: HandlerPlugin;
