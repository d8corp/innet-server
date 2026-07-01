import { type HandlerPlugin } from 'innet';
export interface LicenseProps {
    /**
     * An [SPDX](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) license expression for the API.
     * The `identifier` field is mutually exclusive of the `url` field.
     *
     * @example
     * ```tsx
     * <license
     *   name='GNU GPL v3.0'
     *   identifier='GPL-3.0-only'
     *   url='https://gnu.org'
     * />
     * ```
     * */
    identifier?: string;
    /**
     * The license name used for the API.
     *
     * @example
     * ```tsx
     * <license
     *   name='MIT'
     *   identifier='MIT'
     *   url='https://opensource.org/licenses/MIT'
     * />
     * ```
     * */
    name: string;
    /**
     * A URL to the license used for the API.
     * This MUST be in the form of a URL.
     * The `url` field is mutually exclusive of the `identifier` field.
     *
     * @example
     * ```tsx
     * <license
     *   name='Apache 2.0'
     *   identifier='Apache-2.0'
     *   url='https://apache.org'
     * />
     * ```
     * */
    url?: string;
}
export declare const license: HandlerPlugin;
