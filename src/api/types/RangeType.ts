//  This file was auto-generated from our API Definition.

import * as Lattice from "../index.js";

/**
 * The RangeType represents a numeric range.
 *  Whether endpoints are included are based on the comparator used.
 *  Both endpoints must be of the same numeric type.
 */
export interface RangeType {
    start?: Lattice.NumericType | undefined;
    end?: Lattice.NumericType | undefined;
}
