import { type HandlerPlugin } from 'innet';
import { type EndpointsMethods } from '../../../types';
export interface EndpointProps {
    /**
     * A method of the endpoint.
     * */
    method: EndpointsMethods;
    /**
     * A relative path to an individual endpoint.
     * The property MUST begin with a forward slash (/).
     * Path templating is allowed.
     * When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts.
     * Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.
     * */
    path: string;
    /**
     * An optional, string summary, intended to apply to all operations in this path.
     * */
    summary?: string;
    /**
     * An optional, string description, intended to apply to all operations in this path.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     * */
    description?: string;
    /**
     * Declares this operation to be deprecated.
     * Consumers SHOULD refrain from usage of the declared operation.
     * Default value is false.
     * */
    deprecated?: boolean;
    /**
     * Declares this operation to make an endpoint private.
     * That means the endpoint should not be described and will not be shown in the Open API documentation.
     * */
    private?: boolean;
}
export declare const endpoint: HandlerPlugin;
