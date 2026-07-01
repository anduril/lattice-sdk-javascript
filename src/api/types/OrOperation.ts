//  This file was auto-generated from our API Definition.

import * as Lattice from "../index.js";

/**
 * The OrOperation represents the boolean OR operation, which is to be applied to the list of
 *  children statement(s) or predicate(s).
 */
export interface OrOperation {
    predicateSet?: Lattice.PredicateSet | undefined;
    statementSet?: Lattice.StatementSet | undefined;
}
