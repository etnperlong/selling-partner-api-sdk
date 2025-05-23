/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Package } from './package';

/**
 * A list of packages.
 * @export
 * @interface Packages
 */
export interface Packages {
    /**
     * A list of packages.
     * @type {Array<Package>}
     * @memberof Packages
     */
    'packages': Array<Package>;
}

