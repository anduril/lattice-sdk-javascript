//  This file was auto-generated from our API Definition.

export interface MeanKeplerianElements {
    /** UTC time of validity */
    epoch?: string | undefined;
    /** Preferred: semi major axis in kilometers */
    semiMajorAxisKm?: number | undefined;
    /** If using SGP/SGP4, provide the Keplerian Mean Motion in revolutions per day */
    meanMotion?: number | undefined;
    eccentricity?: number | undefined;
    /** Angle of inclination in deg */
    inclinationDeg?: number | undefined;
    /** Right ascension of the ascending node in deg */
    raOfAscNodeDeg?: number | undefined;
    /** Argument of pericenter in deg */
    argOfPericenterDeg?: number | undefined;
    /** Mean anomaly in deg */
    meanAnomalyDeg?: number | undefined;
    /** Optional: gravitational coefficient (Gravitational Constant x central mass) in kg^3 / s^2 */
    gm?: number | undefined;
}
