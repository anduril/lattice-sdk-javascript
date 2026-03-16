//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A component that describes a geo-entity.
 */
export interface GeoDetails {
    type?: GeoDetails.Type | undefined;
    controlArea?: Lattice.ControlAreaDetails | undefined;
    acm?: Lattice.AcmDetails | undefined;
}

export namespace GeoDetails {
    export const Type = {
        GeoTypeInvalid: "GEO_TYPE_INVALID",
        GeoTypeGeneral: "GEO_TYPE_GENERAL",
        GeoTypeHazard: "GEO_TYPE_HAZARD",
        GeoTypeEmergency: "GEO_TYPE_EMERGENCY",
        GeoTypeEngagementZone: "GEO_TYPE_ENGAGEMENT_ZONE",
        GeoTypeControlArea: "GEO_TYPE_CONTROL_AREA",
        GeoTypeBullseye: "GEO_TYPE_BULLSEYE",
        GeoTypeAcm: "GEO_TYPE_ACM",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
