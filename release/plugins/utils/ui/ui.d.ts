import { type HandlerPlugin } from 'innet';
export declare const uiPresets: {
    rapidoc: string;
    redoc: string;
    scalar: string;
    swagger: string;
};
export interface UiProps {
    /**
     * Custom HTML template for the documentation viewer.
     * Use built-in presets or provide custom HTML.
     *
     * @default Swagger UI HTML template
     *
     * @example
     * ```tsx
     * import { uiPresets } from '@innet/server'
     *
     * export default (
     *   <api>
     *     <ui html={uiPresets.scalar} />
     *   </api>
     * )
     * ```
     */
    html?: string;
    /**
     * Additional parameters to pass to the documentation viewer.
     * Parameters vary by viewer type.
     *
     * @default empty object
     *
     * @example
     * ```tsx
     * <ui
     *   html={uiPresets.scalar}
     *   params={{
     *     theme: 'moon',
     *     layout: 'classic'
     *   }}
     * />
     * ```
     */
    params?: Record<string, any>;
    /**
     * The URL path where the documentation UI will be served.
     *
     * @default INNET_UI_PATH or '/ui'
     *
     * @example
     * ```tsx
     * <ui path='/docs' />
     * ```
     */
    path?: string;
}
export declare const ui: HandlerPlugin;
