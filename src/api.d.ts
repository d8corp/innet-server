declare namespace Components {
    namespace Schemas {
        export interface Address {
            id: number;
            active: null;
            /**
             * City description
             */
            city: "msk" | "sml";
            location: any;
        }
        export interface Partner {
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
            addresses?: Address[];
        }
    }
}
declare namespace Paths {
    namespace Partners {
        namespace Get {
            namespace Responses {
                export interface Default {
                    page: number; // int64
                    /**
                     * example:
                     * 10
                     */
                    pageSize: number;
                    count: number;
                    partners: Components.Schemas.Partner[];
                }
            }
        }
    }
    namespace Partners$Id {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.Partner;
            }
        }
        namespace Patch {
            namespace Responses {
                export type Default = Components.Schemas.Partner;
            }
        }
    }
}
