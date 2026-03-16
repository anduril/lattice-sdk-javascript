//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../index.js";

/**
 * @example
 *     {
 *         taskId: "taskId"
 *     }
 */
export interface TaskCancellation {
    /** The ID of task to cancel */
    taskId: string;
    /** Who or what is requesting to cancel this task. */
    author?: Lattice.Principal;
}
