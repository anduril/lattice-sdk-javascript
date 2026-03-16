//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The request to cancel a task.
 *  Contains the task, and the assignee of the request to cancel the task.
 */
export interface CancelRequest {
    /** The unique task ID of the task to cancel. */
    taskId?: string | undefined;
    /**
     * The assignee of the Task. Useful for agent routing where an endpoint owns multiple agents,
     *  especially onBehalfOf assignees.
     */
    assignee?: Lattice.Principal | undefined;
    /** The principal that requested to cancel the task. */
    author?: Lattice.Principal | undefined;
}
