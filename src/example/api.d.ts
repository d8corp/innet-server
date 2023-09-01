interface Bin {
  filename: string
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
  extension?: string
}
declare namespace Components {
    namespace Schemas {
        export interface AddressSchema {
            id: number
            active: null
            /**
             * City description
             */
            city: "msk" | "sml"
            location: /**
             * GPS Coordinates
             * example:
             * [
             *   40.741895,
             *   -73.989308
             * ]
             */
            LocationSchema
        }
        export interface EditPartnerSchema {
            /**
             * example:
             * CANTent.
             */
            name?: string
            gift?: boolean
            /**
             * A square icon of the partner
             */
            icon?: Bin
            addresses?: number[]
        }
        /**
         * GPS Coordinates
         * example:
         * [
         *   40.741895,
         *   -73.989308
         * ]
         */
        export type LocationSchema = any[]
        export interface PartnerSchema {
            /**
             * example:
             * cantent
             */
            id: string
            /**
             * example:
             * CANTent.
             */
            name: string
            gift: boolean
            addresses?: AddressSchema[]
        }
    }
}
declare namespace Paths {
    namespace Partners {
        namespace Get {
            namespace Parameters {
                export type Search = string
            }
            export interface QueryParameters {
                search?: Parameters.Search
            }
            namespace Responses {
                /**
                 * test1
                 */
                export interface Default {
                    page: number // int32
                    /**
                     * example:
                     * 10
                     */
                    pageSize: number
                    count: number
                    partners: Components.Schemas.PartnerSchema[]
                }
            }
        }
    }
    namespace Partners$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */
            }
            namespace Responses {
                export type Default = Components.Schemas.PartnerSchema
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = string
            }
            export interface PathParameters {
                id: Parameters.Id
            }
            export type RequestBody = Components.Schemas.EditPartnerSchema
            namespace Responses {
                export type $220 = Components.Schemas.PartnerSchema
            }
        }
    }
}
