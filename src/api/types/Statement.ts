//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A Statement is the building block of the entity filter. The outermost statement is conceptually
 *  the root node of an "expression tree" which allows for the construction of complete boolean
 *  logic statements. Statements are formed by grouping sets of children statement(s) or predicate(s)
 *  according to the boolean operation which is to be applied.
 *
 *  For example, the criteria "take an action if an entity is hostile and an air vehicle" can be
 *  represented as: Statement1: { AndOperation: { Predicate1, Predicate2 } }. Where Statement1
 *  is the root of the expression tree, with an AND operation that is applied to children
 *  predicates. The predicates themselves encode "entity is hostile" and "entity is air vehicle."
 */
export interface Statement {
    and?: Lattice.AndOperation | undefined;
    or?: Lattice.OrOperation | undefined;
    not?: Lattice.NotOperation | undefined;
    list?: Lattice.ListOperation | undefined;
    predicate?: Lattice.Predicate | undefined;
}
