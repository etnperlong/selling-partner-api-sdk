/* tslint:disable */
/* eslint-disable */
/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AccessPointType } from './access-point-type';
// May contain unused imports in some cases
// @ts-ignore
import type { AccessibilityAttributes } from './accessibility-attributes';
// May contain unused imports in some cases
// @ts-ignore
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { ExceptionOperatingHours } from './exception-operating-hours';
// May contain unused imports in some cases
// @ts-ignore
import type { OperatingHours } from './operating-hours';

/**
 * Access point details
 * @export
 * @interface AccessPoint
 */
export interface AccessPoint {
    /**
     * Unique identifier for the access point
     * @type {string}
     * @memberof AccessPoint
     */
    'accessPointId'?: string;
    /**
     * Name of entity (store/hub etc) where this access point is located
     * @type {string}
     * @memberof AccessPoint
     */
    'name'?: string;
    /**
     * Timezone of access point
     * @type {string}
     * @memberof AccessPoint
     */
    'timezone'?: string;
    /**
     * 
     * @type {AccessPointType}
     * @memberof AccessPoint
     */
    'type'?: AccessPointType;
    /**
     * 
     * @type {AccessibilityAttributes}
     * @memberof AccessPoint
     */
    'accessibilityAttributes'?: AccessibilityAttributes;
    /**
     * 
     * @type {Address}
     * @memberof AccessPoint
     */
    'address'?: Address;
    /**
     * Exception operating hours for Access Point
     * @type {Array<ExceptionOperatingHours>}
     * @memberof AccessPoint
     */
    'exceptionOperatingHours'?: Array<ExceptionOperatingHours>;
    /**
     * Assistance type enum for Access point i.e. STAFF_ASSISTED or SELF_ASSISTED
     * @type {string}
     * @memberof AccessPoint
     */
    'assistanceType'?: AccessPointAssistanceTypeEnum;
    /**
     * The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper\'s end.
     * @type {string}
     * @memberof AccessPoint
     */
    'score'?: string;
    /**
     * Map of day of the week to operating hours of that day
     * @type {{ [key: string]: OperatingHours; }}
     * @memberof AccessPoint
     */
    'standardOperatingHours'?: { [key: string]: OperatingHours; };
}

export const AccessPointAssistanceTypeEnum = {
    StaffAssisted: 'STAFF_ASSISTED',
    SelfAssisted: 'SELF_ASSISTED'
} as const;

export type AccessPointAssistanceTypeEnum = typeof AccessPointAssistanceTypeEnum[keyof typeof AccessPointAssistanceTypeEnum];


