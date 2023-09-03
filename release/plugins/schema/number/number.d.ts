import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
export interface NumberProps extends ValuesSchemaProps<number> {
    /** Validate the number value by minimum. */
    min?: number;
    /** Validate the number value by maximum. */
    max?: number;
}
export declare const number: HandlerPlugin;