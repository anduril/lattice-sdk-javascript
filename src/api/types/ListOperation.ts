//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The ListOperation represents an operation against a proto list. If the list is of primitive proto
 *  type (e.g. int32), paths in all child predicates should be left empty. If the list is of message
 *  proto type (e.g. Sensor), paths in all child predicates should be relative to the list path.
 *
 *  For example, the criteria "take an action if an entity has any sensor with sensor_id='sensor' and
 *  OperationalState=STATE_OFF" would be modeled as:
 *  Predicate1: { path: "sensor_id", comparator: EQUAL_TO, value: "sensor" }
 *  Predicate2: { path: "operational_state", comparator: EQUAL_TO, value: STATE_OFF }
 *
 *  Statement2: { AndOperation: PredicateSet: { <Predicate1>, <Predicate2> } }
 *  ListOperation: { list_path: "sensors.sensors", list_comparator: ANY, statement: <Statement2> }
 *  Statement1: { ListOperation: <ListOperation> }
 *
 *  Note that in the above, the child predicates of the list operation have paths relative to the
 *  list_path because the list is comprised of message not primitive types.
 */
export interface ListOperation {
    /** The list_path specifies the repeated field on an entity to which this operation applies. */
    listPath?: string | undefined;
    /**
     * The list_comparator specifies how to compose the boolean results from the child statement
     *  for each member of the specified list.
     */
    listComparator?: ListOperation.ListComparator | undefined;
    /**
     * The statement is a new expression tree conceptually rooted at type of the list. It determines
     *  how each member of the list is evaluated.
     */
    statement?: Lattice.Statement | undefined;
}

export namespace ListOperation {
    /**
     * The list_comparator specifies how to compose the boolean results from the child statement
     *  for each member of the specified list.
     */
    export const ListComparator = {
        ListComparatorInvalid: "LIST_COMPARATOR_INVALID",
        ListComparatorAnyOf: "LIST_COMPARATOR_ANY_OF",
    } as const;
    export type ListComparator = (typeof ListComparator)[keyof typeof ListComparator];
}
