declare namespace Paths {
    namespace Partners {
        namespace Get {
            namespace Parameters {
                export type Test = Date; // date-time
            }
            export interface QueryParameters {
                test?: Parameters.Test /* date-time */;
            }
            namespace Responses {
                /**
                 * test1
                 */
                export interface Default {
                    page: number; // int32
                    /**
                     * example:
                     * 10
                     */
                    pageSize: number;
                    count: number;
                    partners: {
                        /**
                         * example:
                         * cantent
                         */
                        id: string;
                        /**
                         * example:
                         * CANTent.
                         */
                        name: string;
                        gift: boolean;
                        addresses?: {
                            id: number;
                            active: null;
                            /**
                             * City description
                             */
                            city: "msk" | "sml";
                            /**
                             * GPS Coordinates
                             * example:
                             * [
                             *   40.741895,
                             *   -73.989308
                             * ]
                             */
                            location: any[];
                        }[];
                    }[];
                }
            }
        }
    }
    namespace Partners$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            namespace Responses {
                export interface Default {
                    /**
                     * example:
                     * cantent
                     */
                    id: string;
                    /**
                     * example:
                     * CANTent.
                     */
                    name: string;
                    gift: boolean;
                    addresses?: {
                        id: number;
                        active: null;
                        /**
                         * City description
                         */
                        city: "msk" | "sml";
                        /**
                         * GPS Coordinates
                         * example:
                         * [
                         *   40.741895,
                         *   -73.989308
                         * ]
                         */
                        location: any[];
                    }[];
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = string;
            }
            export interface PathParameters {
                id: Parameters.Id;
            }
            export interface RequestBody {
                /**
                 * example:
                 * CANTent.
                 */
                name: string;
                gift: boolean;
                addresses?: number[];
            }
            namespace Responses {
                export interface $220 {
                    /**
                     * example:
                     * cantent
                     */
                    id: string;
                    /**
                     * example:
                     * CANTent.
                     */
                    name: string;
                    gift: boolean;
                    addresses?: {
                        id: number;
                        active: null;
                        /**
                         * City description
                         */
                        city: "msk" | "sml";
                        /**
                         * GPS Coordinates
                         * example:
                         * [
                         *   40.741895,
                         *   -73.989308
                         * ]
                         */
                        location: any[];
                    }[];
                }
            }
        }
    }
}
