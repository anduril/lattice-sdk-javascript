//  This file was auto-generated from our API Definition.

/**
 * `ExecutionConstraints` provides scheduling details that informs the agent when to execute the task.
 */
export interface ExecutionConstraints {
    /** The timestamp after which the agent can execute the task */
    startAfter?: string | undefined;
    /** The timestamp before which the agent can execute the task. */
    completeBefore?: string | undefined;
}
