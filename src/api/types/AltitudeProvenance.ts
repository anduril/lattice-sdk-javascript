//  This file was auto-generated from our API Definition.

export interface AltitudeProvenance {
    sourceType?: AltitudeProvenance.SourceType | undefined;
}

export namespace AltitudeProvenance {
    export const SourceType = {
        AltitudeProvenanceTypeInvalid: "ALTITUDE_PROVENANCE_TYPE_INVALID",
        AltitudeProvenanceTypeRadarAltimeter: "ALTITUDE_PROVENANCE_TYPE_RADAR_ALTIMETER",
        AltitudeProvenanceTypeLaserAltimeter: "ALTITUDE_PROVENANCE_TYPE_LASER_ALTIMETER",
        AltitudeProvenanceTypeBarometer: "ALTITUDE_PROVENANCE_TYPE_BAROMETER",
        AltitudeProvenanceTypeTerrainConversion: "ALTITUDE_PROVENANCE_TYPE_TERRAIN_CONVERSION",
        AltitudeProvenanceTypeGnss: "ALTITUDE_PROVENANCE_TYPE_GNSS",
        AltitudeProvenanceTypeSonar: "ALTITUDE_PROVENANCE_TYPE_SONAR",
        AltitudeProvenanceTypeUserInput: "ALTITUDE_PROVENANCE_TYPE_USER_INPUT",
        AltitudeProvenanceTypeIns: "ALTITUDE_PROVENANCE_TYPE_INS",
    } as const;
    export type SourceType = (typeof SourceType)[keyof typeof SourceType];
}
