//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A message describing any transponder codes associated with Mode 1, 2, 3, 4, 5, S, C interrogations.
 */
export interface TransponderCodes {
    /** The mode 1 code assigned to military assets. */
    mode1?: number | undefined;
    /** The Mode 2 code assigned to military assets. */
    mode2?: number | undefined;
    /** The Mode 3 code assigned by ATC to the asset. */
    mode3?: number | undefined;
    /** The validity of the response from the Mode 4 interrogation. */
    mode4InterrogationResponse?: TransponderCodes.Mode4InterrogationResponse | undefined;
    /** The Mode 5 transponder codes. */
    mode5?: Lattice.Mode5 | undefined;
    /** The Mode S transponder codes. */
    modeS?: Lattice.ModeS | undefined;
    /**
     * The Mode C altitude reported by the transponder in feet. Mode C provides pressure altitude
     *  in 100-foot increments up to 10,000 feet MSL. A zero value indicates No Statement.
     */
    modeCAltitudeFt?: number | undefined;
}

export namespace TransponderCodes {
    /** The validity of the response from the Mode 4 interrogation. */
    export const Mode4InterrogationResponse = {
        InterrogationResponseInvalid: "INTERROGATION_RESPONSE_INVALID",
        InterrogationResponseCorrect: "INTERROGATION_RESPONSE_CORRECT",
        InterrogationResponseIncorrect: "INTERROGATION_RESPONSE_INCORRECT",
        InterrogationResponseNoResponse: "INTERROGATION_RESPONSE_NO_RESPONSE",
    } as const;
    export type Mode4InterrogationResponse =
        (typeof Mode4InterrogationResponse)[keyof typeof Mode4InterrogationResponse];
}
