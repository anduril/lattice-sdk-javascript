//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface TaskStreamRequest {
    /** The time interval, in milliseconds, that determines the frequency at which to send heartbeat events. Defaults to 30000 (30 seconds). */
    heartbeatIntervalMs?: number;
    /**
     * The time interval, in milliseconds, after an update for a given task before another one will be sent for the same task.
     * If set, value must be >= 250.
     */
    rateLimit?: number;
    /**
     * Optional flag to only include tasks created or updated after the stream is initiated, and not any previous preexisting tasks.
     * If unset or false, the stream will include any new tasks and task updates, as well as all preexisting tasks.
     */
    excludePreexistingTasks?: boolean;
    /** Optional filter that only returns tasks with specific types. If not provided, all task types will be streamed. */
    taskType?: TaskStreamRequest.TaskType;
    /** If provided, returns tasks which have been updated since the given time. */
    updateStartTime?: Lattice.Timestamp;
    /**
     * A filter for tasks with a specific parent task ID.
     * Note: This filter is mutually exclusive with all other filter fields (`updateStartTime`, `assignee`, `statusFilter`, `taskType`).
     * Either provide `parentTaskId` or any combination of the other filters, but not both.
     */
    parentTaskId?: string;
    /** A filter for tasks assigned to a specific principal. */
    assignee?: Lattice.Principal;
    /** A filter for task statuses (inclusive or exclusive). */
    statusFilter?: TaskStreamRequest.StatusFilter;
}

export namespace TaskStreamRequest {
    /**
     * Optional filter that only returns tasks with specific types. If not provided, all task types will be streamed.
     */
    export type TaskType =
        | {
              taskTypeUrls: string[];
          }
        | {
              taskTypePrefix: string;
          };

    /**
     * A filter for task statuses (inclusive or exclusive).
     */
    export interface StatusFilter {
        /** The statuses to filter by. */
        statuses?: StatusFilter.Statuses.Item[] | undefined;
        /** The type of filter to apply. */
        filterType?: StatusFilter.FilterType | undefined;
    }

    export namespace StatusFilter {
        export type Statuses = Statuses.Item[];

        export namespace Statuses {
            export const Item = {
                StatusInvalid: "STATUS_INVALID",
                StatusCreated: "STATUS_CREATED",
                StatusScheduledInManager: "STATUS_SCHEDULED_IN_MANAGER",
                StatusSent: "STATUS_SENT",
                StatusMachineReceipt: "STATUS_MACHINE_RECEIPT",
                StatusAck: "STATUS_ACK",
                StatusWilco: "STATUS_WILCO",
                StatusExecuting: "STATUS_EXECUTING",
                StatusWaitingForUpdate: "STATUS_WAITING_FOR_UPDATE",
                StatusDoneOk: "STATUS_DONE_OK",
                StatusDoneNotOk: "STATUS_DONE_NOT_OK",
                StatusReplaced: "STATUS_REPLACED",
                StatusCancelRequested: "STATUS_CANCEL_REQUESTED",
                StatusCompleteRequested: "STATUS_COMPLETE_REQUESTED",
                StatusVersionRejected: "STATUS_VERSION_REJECTED",
            } as const;
            export type Item = (typeof Item)[keyof typeof Item];
        }

        /** The type of filter to apply. */
        export const FilterType = {
            FilterTypeInvalid: "FILTER_TYPE_INVALID",
            FilterTypeInclusive: "FILTER_TYPE_INCLUSIVE",
            FilterTypeExclusive: "FILTER_TYPE_EXCLUSIVE",
        } as const;
        export type FilterType = (typeof FilterType)[keyof typeof FilterType];
    }
}
