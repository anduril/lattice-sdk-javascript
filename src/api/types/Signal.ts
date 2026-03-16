//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A component that describes an entity's signal characteristics.
 */
export interface Signal {
    frequencyCenter?: Lattice.Frequency | undefined;
    frequencyRange?: Lattice.FrequencyRange | undefined;
    /** Indicates the bandwidth of a signal (Hz). */
    bandwidthHz?: number | undefined;
    /** Indicates the signal to noise (SNR) of this signal. */
    signalToNoiseRatio?: number | undefined;
    lineOfBearing?: Lattice.LineOfBearing | undefined;
    fixed?: Lattice.Fixed | undefined;
    /** Emitter notations associated with this entity. */
    emitterNotations?: Lattice.EmitterNotation[] | undefined;
    /** length in time of a single pulse */
    pulseWidthS?: number | undefined;
    /** length in time between the start of two pulses */
    pulseRepetitionInterval?: Lattice.PulseRepetitionInterval | undefined;
    /** describes how a signal is observing the environment */
    scanCharacteristics?: Lattice.ScanCharacteristics | undefined;
}
