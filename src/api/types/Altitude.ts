//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface Altitude {
    haeWgs84?: Lattice.AltitudeAboveWgs84Ellipsoid | undefined;
    asf?: Lattice.AltitudeAboveSeaFloor | undefined;
    bss?: Lattice.AltitudeBelowSeaSurface | undefined;
    pressureSdp?: Lattice.AltitudeAboveStandardDatumPlanePressure | undefined;
    pressureAmsl?: Lattice.AltitudeAboveMeanSeaLevelPressure | undefined;
    egm96Amsl?: Lattice.AltitudeAboveMeanSeaLevelEgm96 | undefined;
    agl?: Lattice.AltitudeAboveGroundLevel | undefined;
}
