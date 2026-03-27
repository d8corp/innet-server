import { type HandlerPlugin } from 'innet';
export interface TagGroup {
    name: string;
    tags: string[];
}
export declare const TAG_GROUP_NAME = "x-tagGroups";
export interface TagProps {
    children?: any;
    /**
     * A description for the tag.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     * */
    description?: string;
    /** A name of the tag group. */
    group?: string;
    /** A name of the tag. */
    name: string;
}
export declare const tag: HandlerPlugin;
