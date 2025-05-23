/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * The version of the OpenAPI document: 2024-06-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The request schema for the `initiatePayout` operation.
 * @export
 * @interface InitiatePayoutRequest
 */
export interface InitiatePayoutRequest {
    /**
     * The identifier of the Amazon marketplace. For the list of all marketplace IDs, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @type {string}
     * @memberof InitiatePayoutRequest
     */
    'marketplaceId': string;
    /**
     * The account type in the selected marketplace for which a payout must be initiated. For supported EU marketplaces, the only account type is `Standard Orders`.
     * @type {string}
     * @memberof InitiatePayoutRequest
     */
    'accountType': string;
}

