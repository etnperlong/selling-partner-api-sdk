/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';

/**
 * A credit given to a solution provider.
 * @export
 * @interface SolutionProviderCreditEvent
 */
export interface SolutionProviderCreditEvent {
    /**
     * The transaction type.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'ProviderTransactionType'?: string;
    /**
     * A seller-defined identifier for an order.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'SellerOrderId'?: string;
    /**
     * The identifier of the marketplace where the order was placed.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'MarketplaceId'?: string;
    /**
     * The two-letter country code of the country associated with the marketplace where the order was placed.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'MarketplaceCountryCode'?: string;
    /**
     * The Amazon-defined identifier of the seller.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'SellerId'?: string;
    /**
     * The store name where the payment event occurred.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'SellerStoreName'?: string;
    /**
     * The Amazon-defined identifier of the solution provider.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'ProviderId'?: string;
    /**
     * The store name where the payment event occurred.
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'ProviderStoreName'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof SolutionProviderCreditEvent
     */
    'TransactionAmount'?: Currency;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @type {string}
     * @memberof SolutionProviderCreditEvent
     */
    'TransactionCreationDate'?: string;
}

