//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The Predicate fully encodes the information required to make an evaluation of an entity field
 *  against a given static value, resulting in a boolean TRUE/FALSE result. The structure of a
 *  predicate will always follow: "{entity-value} {comparator} {fixed-value}" where the entity value
 *  is determined by the field path.
 *
 *  For example, a predicate would read as: "{entity.location.velocity_enu} {LESS_THAN} {500kph}"
 */
export interface Predicate {
    /**
     * The field_path determines which field on an entity is being referenced in this predicate. For
     *  example: correlated.primary_entity_id would be primary_entity_id in correlated component.
     */
    fieldPath?: string | undefined;
    /**
     * The value determines the fixed value against which the entity field is to be compared.
     *  In the case of COMPARATOR_MATCH_ALL, the value contents do not matter as long as the Value is a supported
     *  type.
     */
    value?: Lattice.Value | undefined;
    /**
     * The comparator determines the manner in which the entity field and static value are compared.
     *  Comparators may only be applied to certain values. For example, the WITHIN comparator cannot
     *  be used for a boolean value comparison.
     */
    comparator?: Predicate.Comparator | undefined;
}

export namespace Predicate {
    /**
     * The comparator determines the manner in which the entity field and static value are compared.
     *  Comparators may only be applied to certain values. For example, the WITHIN comparator cannot
     *  be used for a boolean value comparison.
     */
    export const Comparator = {
        ComparatorInvalid: "COMPARATOR_INVALID",
        ComparatorMatchAll: "COMPARATOR_MATCH_ALL",
        ComparatorEquality: "COMPARATOR_EQUALITY",
        ComparatorIn: "COMPARATOR_IN",
        ComparatorLessThan: "COMPARATOR_LESS_THAN",
        ComparatorGreaterThan: "COMPARATOR_GREATER_THAN",
        ComparatorLessThanEqualTo: "COMPARATOR_LESS_THAN_EQUAL_TO",
        ComparatorGreaterThanEqualTo: "COMPARATOR_GREATER_THAN_EQUAL_TO",
        ComparatorWithin: "COMPARATOR_WITHIN",
        ComparatorExists: "COMPARATOR_EXISTS",
        ComparatorCaseInsensitiveEquality: "COMPARATOR_CASE_INSENSITIVE_EQUALITY",
        ComparatorCaseInsensitiveEqualityIn: "COMPARATOR_CASE_INSENSITIVE_EQUALITY_IN",
        ComparatorRangeClosed: "COMPARATOR_RANGE_CLOSED",
    } as const;
    export type Comparator = (typeof Comparator)[keyof typeof Comparator];
}
