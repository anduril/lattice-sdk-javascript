//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The NotOperation represents the boolean NOT operation, which can only be applied to a single
 *  child predicate or statement.
 */
export interface NotOperation {
    predicate?: Lattice.Predicate | undefined;
    statement?: Lattice.Statement | undefined;
}
