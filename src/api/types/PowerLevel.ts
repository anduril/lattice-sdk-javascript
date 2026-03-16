//  This file was auto-generated from our API Definition.

/**
 * Represents the power level of a system.
 */
export interface PowerLevel {
    /** Total power capacity of the system. */
    capacity?: number | undefined;
    /** Remaining power capacity of the system. */
    remaining?: number | undefined;
    /** Percent of power remaining. */
    percentRemaining?: number | undefined;
    /**
     * Voltage of the power source subsystem, as reported by the power source. If the source does not report this value
     *  this field will be null.
     */
    voltage?: number | undefined;
    /**
     * Current in amps of the power source subsystem, as reported by the power source. If the source does not
     *  report this value this field will be null.
     */
    currentAmps?: number | undefined;
    /**
     * Estimated minutes until empty. Calculated with consumption at the moment, as reported by the power source. If the source does not
     *  report this value this field will be null.
     */
    runTimeToEmptyMins?: number | undefined;
    /** Fuel consumption rate in liters per second. */
    consumptionRateLPerS?: number | undefined;
}
