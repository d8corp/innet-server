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
     *
     * @example
     * ```tsx
     * <tag name='Users' description='Endpoints for **user management**'>
     *   <endpoint method='get' path='/users' />
     * </tag>
     * ```
     * */
    description?: string;
    /**
     * Optional group name for organizing multiple tags into logical sections in the documentation.
     *
     * @example
     * ```tsx
     * <tag name='Users' group='Management'>
     *   <endpoint method='get' path='/users' />
     *   <endpoint method='get' path='/users/{userId}' />
     * </tag>
     * ```
     */
    group?: string;
    /**
     * The name of the tag used to group endpoints.
     *
     * @example
     * ```tsx
     * <tag name='Users'>
     *   <endpoint method='get' path='/users' />
     *   <endpoint method='get' path='/users/{userId}' />
     * </tag>
     * ```
     */
    name: string;
}
export declare const tag: HandlerPlugin;
