import { type Endpoint } from '../../types';
export declare function getEndpoint(path: string, parentEndpoint: Endpoint): Endpoint<unknown, unknown, "requestValidation" | "requestBodyContentType", import("../../types").InValidationErrorParam, import("../../types").ValidationErrorData> | undefined;
