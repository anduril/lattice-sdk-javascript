//  This file was auto-generated from our API Definition.

import * as Lattice from "../index.js";

/**
 * The AndOperation represents the boolean AND operation, which is to be applied to the list of
 *  children statement(s) or predicate(s).
 */
export interface AndOperation {
    predicateSet?: Lattice.PredicateSet | undefined;
    statementSet?: Lattice.StatementSet | undefined;
}
