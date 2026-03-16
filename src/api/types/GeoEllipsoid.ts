//  This file was auto-generated from our API Definition.

/**
 * An ellipsoid shaped geo-entity.
 *  Principal axis lengths are defined in entity body space
 *  This shape is NOT Geo-JSON compatible.
 */
export interface GeoEllipsoid {
    /** Defines the distance from the center point to the surface along the forward axis */
    forwardAxisM?: number | undefined;
    /** Defines the distance from the center point to the surface along the side axis */
    sideAxisM?: number | undefined;
    /** Defines the distance from the center point to the surface along the up axis */
    upAxisM?: number | undefined;
}
