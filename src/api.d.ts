declare namespace Components {
    namespace Schemas {
        export interface AddressSchema {
            id: number;
            active: null;
            /**
             * City description
             */
            city: "msk" | "sml";
            location: any;
        }
        export interface PartnerSchema {
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
            addresses?: AddressSchema[];
        }
    }
}
declare namespace Paths {
    namespace Partners {
        namespace Get {
            namespace Parameters {
                export type Id = string | string[];
            }
            export interface QueryParameters {
                id?: Parameters.Id;
            }
            namespace Responses {
                export interface Default {
                    page: number; // int32
                    /**
                     * example:
                     * 10
                     */
                    pageSize: number;
                    count: number;
                    partners: Components.Schemas.PartnerSchema[];
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
                export type Default = Components.Schemas.PartnerSchema;
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
                export type Default = Components.Schemas.PartnerSchema;
            }
        }
    }
}
