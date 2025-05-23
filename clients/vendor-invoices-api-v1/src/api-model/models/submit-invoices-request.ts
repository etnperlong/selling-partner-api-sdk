/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Invoice } from './invoice';

/**
 * The request schema for the submitInvoices operation.
 * @export
 * @interface SubmitInvoicesRequest
 */
export interface SubmitInvoicesRequest {
    /**
     * An array of Invoice objects representing the invoices or credit notes to be submitted.
     * @type {Array<Invoice>}
     * @memberof SubmitInvoicesRequest
     */
    'invoices'?: Array<Invoice>;
}

