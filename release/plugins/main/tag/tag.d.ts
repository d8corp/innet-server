import { type HandlerPlugin } from 'innet';
export interface TagProps {
    /**
     * A description for the tag.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     * */
    description?: string;
    /** The name of the tag. */
    name: string;
}
export declare const tag: HandlerPlugin;
