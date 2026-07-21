//  This file was auto-generated from our API Definition.

/**
 * Location measurement in reference to the center of the earth using the ECEF
 *  coordinate system. This is in the WGS84 coordinate frame.
 */
export interface LocationGeocentricEcef {
    /**
     * The plane of the equator, passing through extending from 90°W longitude (negative)
     *  to 90°E longitude (positive).
     */
    xMeters?: number | undefined;
    /**
     * The plane of the equator, passing through the origin and extending from 180° longitude
     *  (negative) to the prime meridian.
     */
    yMeters?: number | undefined;
    /** The line between the North and South Poles, with positive values increasing northward. */
    zMeters?: number | undefined;
}
