//  This file was auto-generated from our API Definition.

/**
 * DeliveryError contains an error code and message associated with task delivery.
 */
export interface DeliveryError {
    /** Error code for Delivery error. */
    code?: DeliveryError.Code | undefined;
    /** Descriptive human-readable string regarding this delivery error. */
    message?: string | undefined;
}

export namespace DeliveryError {
    /** Error code for Delivery error. */
    export const Code = {
        DeliveryErrorCodeInvalid: "DELIVERY_ERROR_CODE_INVALID",
        DeliveryErrorCodeUnavailable: "DELIVERY_ERROR_CODE_UNAVAILABLE",
        DeliveryErrorCodeTimeout: "DELIVERY_ERROR_CODE_TIMEOUT",
        DeliveryErrorCodeRejected: "DELIVERY_ERROR_CODE_REJECTED",
        DeliveryErrorCodeNotAcknowledged: "DELIVERY_ERROR_CODE_NOT_ACKNOWLEDGED",
    } as const;
    export type Code = (typeof Code)[keyof typeof Code];
}
