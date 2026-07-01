import { type HandlerPlugin } from 'innet';
export interface DtsProps {
    /**
     * Global namespace name for generated types.
     *
     * @default 'Api'
     *
     * @example
     * ```tsx
     * <dts namespace='API' />
     * ```
     */
    namespace?: string;
    /**
     * Output path for the generated TypeScript definitions file.
     *
     * @default 'src/api.d.ts'
     *
     * @example
     * ```tsx
     * <dts path='src/types.d.ts' />
     * ```
     */
    path?: string;
}
export declare const dts: HandlerPlugin;
