//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The wrapper for a task's action requests: execute, cancel, or complete.
 */
export interface AgentTaskRequest {
    executeRequest?: Lattice.ExecuteRequest | undefined;
    cancelRequest?: Lattice.CancelRequest | undefined;
    completeRequest?: Lattice.CompleteRequest | undefined;
}
