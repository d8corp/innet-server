import { type HandlerPlugin } from 'innet';
export interface TagProps {
    /** The name of the tag. */
    name: string;
    /**
     * A description for the tag.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     * */
    description?: string;
}
export declare const tag: HandlerPlugin;
