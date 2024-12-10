// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/taskmanager/v1/task_manager_grpcapi.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Any, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Principal, Relations, Status, StatusUpdate, Task, TaskEntity, TaskView } from "./task.pub_pb.js";
import type { CancelRequest, CompleteRequest, ExecuteRequest } from "./task_api.pub_pb.js";

/**
 * Describes the file anduril/taskmanager/v1/task_manager_grpcapi.pub.proto.
 */
export declare const file_anduril_taskmanager_v1_task_manager_grpcapi_pub: GenFile;

/**
 * Request to create a Task.
 *
 * @generated from message anduril.taskmanager.v1.CreateTaskRequest
 */
export declare type CreateTaskRequest = Message<"anduril.taskmanager.v1.CreateTaskRequest"> & {
  /**
   * Human-readable display name for this Task, should be short (<100 chars).
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * Full task parameterization, must be a message under anduril/tasks/v*\/.
   *
   * @generated from field: google.protobuf.Any specification = 2;
   */
  specification?: Any;

  /**
   * Who or what is creating this Task. For example, if a user created this Task via a UI, it would
   *  contain the "user" Principal type with the user ID of that user. Or if a service is calling the
   *  CreateTask endpoint, then a "service" Principal type is to be provided.
   *
   * @generated from field: anduril.taskmanager.v1.Principal author = 3;
   */
  author?: Principal;

  /**
   * Any relationships associated with this Task, such as a parent Task or an assignee this Task is designated to
   *  for execution.
   *
   * @generated from field: anduril.taskmanager.v1.Relations relations = 5;
   */
  relations?: Relations;

  /**
   * Longer, free-form, human-readable description of this Task.
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * If set, then task-manager will not trigger execution of this task on an agent. Useful for when ingesting
   * tasks from an external system that is triggering execution of tasks on agents.
   *
   * @generated from field: bool is_executed_elsewhere = 7;
   */
  isExecutedElsewhere: boolean;

  /**
   * If non-empty, will set the requested Task ID, otherwise will generate a new random GUID.
   *  Will reject if supplied Task ID does not match `[A-Za-z0-9_-.]{5,36}`.
   *
   * @generated from field: string task_id = 8;
   */
  taskId: string;

  /**
   * Indicates an initial set of entities that can be used to execute an entity aware task.
   * For example, an entity Objective, an entity Keep In Zone, etc.
   *
   * @generated from field: repeated anduril.taskmanager.v1.TaskEntity initial_entities = 9;
   */
  initialEntities: TaskEntity[];
};

/**
 * Describes the message anduril.taskmanager.v1.CreateTaskRequest.
 * Use `create(CreateTaskRequestSchema)` to create a new message.
 */
export declare const CreateTaskRequestSchema: GenMessage<CreateTaskRequest>;

/**
 * Response to a Create Task request.
 *
 * @generated from message anduril.taskmanager.v1.CreateTaskResponse
 */
export declare type CreateTaskResponse = Message<"anduril.taskmanager.v1.CreateTaskResponse"> & {
  /**
   * Task that was created.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;
};

/**
 * Describes the message anduril.taskmanager.v1.CreateTaskResponse.
 * Use `create(CreateTaskResponseSchema)` to create a new message.
 */
export declare const CreateTaskResponseSchema: GenMessage<CreateTaskResponse>;

/**
 * Request to get a Task.
 *
 * @generated from message anduril.taskmanager.v1.GetTaskRequest
 */
export declare type GetTaskRequest = Message<"anduril.taskmanager.v1.GetTaskRequest"> & {
  /**
   * ID of Task to get.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;

  /**
   * Optional - if > 0, will get specific definition_version, otherwise latest (highest) definition_version is used.
   *
   * @generated from field: uint32 definition_version = 2;
   */
  definitionVersion: number;

  /**
   * Optional - select which view of the task to fetch. If not set, defaults to TASK_VIEW_MANAGER.
   *
   * @generated from field: anduril.taskmanager.v1.TaskView task_view = 3;
   */
  taskView: TaskView;
};

/**
 * Describes the message anduril.taskmanager.v1.GetTaskRequest.
 * Use `create(GetTaskRequestSchema)` to create a new message.
 */
export declare const GetTaskRequestSchema: GenMessage<GetTaskRequest>;

/**
 * Response to a Get Task request.
 *
 * @generated from message anduril.taskmanager.v1.GetTaskResponse
 */
export declare type GetTaskResponse = Message<"anduril.taskmanager.v1.GetTaskResponse"> & {
  /**
   * Task that was returned.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;
};

/**
 * Describes the message anduril.taskmanager.v1.GetTaskResponse.
 * Use `create(GetTaskResponseSchema)` to create a new message.
 */
export declare const GetTaskResponseSchema: GenMessage<GetTaskResponse>;

/**
 * Request to query for Tasks. Returns the each latest Task by Status ID and Version ID by default with no filters.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest
 */
export declare type QueryTasksRequest = Message<"anduril.taskmanager.v1.QueryTasksRequest"> & {
  /**
   * If present matches Tasks with this parent Task ID.
   * Note: this is mutually exclusive with all other query parameters, i.e., either provide parent Task ID, or
   *  any of the remaining parameters, but not both.
   *
   * @generated from field: string parent_task_id = 1;
   */
  parentTaskId: string;

  /**
   * If set, returns results starting from the given page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Filters on provided status types in the filter.
   *
   * @generated from field: anduril.taskmanager.v1.QueryTasksRequest.StatusFilter status_filter = 4;
   */
  statusFilter?: QueryTasksRequest_StatusFilter;

  /**
   * If provided, only provides Tasks updated within the time range.
   *
   * @generated from field: anduril.taskmanager.v1.QueryTasksRequest.TimeRange update_time_range = 5;
   */
  updateTimeRange?: QueryTasksRequest_TimeRange;

  /**
   * Optional filter for view of a Task.
   * If not set, defaults to TASK_VIEW_MANAGER.
   *
   * @generated from field: anduril.taskmanager.v1.TaskView view = 6;
   */
  view: TaskView;
};

/**
 * Describes the message anduril.taskmanager.v1.QueryTasksRequest.
 * Use `create(QueryTasksRequestSchema)` to create a new message.
 */
export declare const QueryTasksRequestSchema: GenMessage<QueryTasksRequest>;

/**
 * A time range query for Tasks.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest.TimeRange
 */
export declare type QueryTasksRequest_TimeRange = Message<"anduril.taskmanager.v1.QueryTasksRequest.TimeRange"> & {
  /**
   * If provided, returns Tasks only updated after this time.
   *
   * @generated from field: google.protobuf.Timestamp update_start_time = 1;
   */
  updateStartTime?: Timestamp;

  /**
   * If provided, returns Tasks only updated before this time.
   *
   * @generated from field: google.protobuf.Timestamp update_end_time = 2;
   */
  updateEndTime?: Timestamp;
};

/**
 * Describes the message anduril.taskmanager.v1.QueryTasksRequest.TimeRange.
 * Use `create(QueryTasksRequest_TimeRangeSchema)` to create a new message.
 */
export declare const QueryTasksRequest_TimeRangeSchema: GenMessage<QueryTasksRequest_TimeRange>;

/**
 * A filter for statuses.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest.StatusFilter
 */
export declare type QueryTasksRequest_StatusFilter = Message<"anduril.taskmanager.v1.QueryTasksRequest.StatusFilter"> & {
  /**
   * Statuses to be part of the filter.
   *
   * @generated from field: repeated anduril.taskmanager.v1.Status status = 1;
   */
  status: Status[];

  /**
   * The type of filter to apply.
   *
   * @generated from field: anduril.taskmanager.v1.QueryTasksRequest.FilterType filter_type = 2;
   */
  filterType: QueryTasksRequest_FilterType;
};

/**
 * Describes the message anduril.taskmanager.v1.QueryTasksRequest.StatusFilter.
 * Use `create(QueryTasksRequest_StatusFilterSchema)` to create a new message.
 */
export declare const QueryTasksRequest_StatusFilterSchema: GenMessage<QueryTasksRequest_StatusFilter>;

/**
 * The type of filter.
 *
 * @generated from enum anduril.taskmanager.v1.QueryTasksRequest.FilterType
 */
export enum QueryTasksRequest_FilterType {
  /**
   * @generated from enum value: FILTER_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: FILTER_TYPE_INCLUSIVE = 1;
   */
  INCLUSIVE = 1,

  /**
   * @generated from enum value: FILTER_TYPE_EXCLUSIVE = 2;
   */
  EXCLUSIVE = 2,
}

/**
 * Describes the enum anduril.taskmanager.v1.QueryTasksRequest.FilterType.
 */
export declare const QueryTasksRequest_FilterTypeSchema: GenEnum<QueryTasksRequest_FilterType>;

/**
 * Response to a Query Task request.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksResponse
 */
export declare type QueryTasksResponse = Message<"anduril.taskmanager.v1.QueryTasksResponse"> & {
  /**
   * Tasks matching the Query Task request.
   *
   * @generated from field: repeated anduril.taskmanager.v1.Task tasks = 1;
   */
  tasks: Task[];

  /**
   * Page token to the next page of Tasks.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;
};

/**
 * Describes the message anduril.taskmanager.v1.QueryTasksResponse.
 * Use `create(QueryTasksResponseSchema)` to create a new message.
 */
export declare const QueryTasksResponseSchema: GenMessage<QueryTasksResponse>;

/**
 * Request to update a Task's status.
 *
 * @generated from message anduril.taskmanager.v1.UpdateStatusRequest
 */
export declare type UpdateStatusRequest = Message<"anduril.taskmanager.v1.UpdateStatusRequest"> & {
  /**
   * The updated status.
   *
   * @generated from field: anduril.taskmanager.v1.StatusUpdate status_update = 1;
   */
  statusUpdate?: StatusUpdate;
};

/**
 * Describes the message anduril.taskmanager.v1.UpdateStatusRequest.
 * Use `create(UpdateStatusRequestSchema)` to create a new message.
 */
export declare const UpdateStatusRequestSchema: GenMessage<UpdateStatusRequest>;

/**
 * Response to an Update Status request.
 *
 * @generated from message anduril.taskmanager.v1.UpdateStatusResponse
 */
export declare type UpdateStatusResponse = Message<"anduril.taskmanager.v1.UpdateStatusResponse"> & {
  /**
   * The updated Task.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;
};

/**
 * Describes the message anduril.taskmanager.v1.UpdateStatusResponse.
 * Use `create(UpdateStatusResponseSchema)` to create a new message.
 */
export declare const UpdateStatusResponseSchema: GenMessage<UpdateStatusResponse>;

/**
 * Request for streaming Tasks ready for agent execution.
 *
 * @generated from message anduril.taskmanager.v1.ListenAsAgentRequest
 */
export declare type ListenAsAgentRequest = Message<"anduril.taskmanager.v1.ListenAsAgentRequest"> & {
  /**
   * Selector criteria to determine which Agent Tasks the agent receives
   *
   * @generated from oneof anduril.taskmanager.v1.ListenAsAgentRequest.agent_selector
   */
  agentSelector: {
    /**
     * The requesting agent will only receive Agent Tasks in the stream that have any of these specified entity ids as the task's assignee
     *
     * @generated from field: anduril.taskmanager.v1.EntityIds entity_ids = 1;
     */
    value: EntityIds;
    case: "entityIds";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.taskmanager.v1.ListenAsAgentRequest.
 * Use `create(ListenAsAgentRequestSchema)` to create a new message.
 */
export declare const ListenAsAgentRequestSchema: GenMessage<ListenAsAgentRequest>;

/**
 * Response for streaming Tasks ready for agent execution.
 *
 * @generated from message anduril.taskmanager.v1.ListenAsAgentResponse
 */
export declare type ListenAsAgentResponse = Message<"anduril.taskmanager.v1.ListenAsAgentResponse"> & {
  /**
   * Action for agent to execute
   *
   * @generated from oneof anduril.taskmanager.v1.ListenAsAgentResponse.request
   */
  request: {
    /**
     * @generated from field: anduril.taskmanager.v1.ExecuteRequest execute_request = 1;
     */
    value: ExecuteRequest;
    case: "executeRequest";
  } | {
    /**
     * @generated from field: anduril.taskmanager.v1.CancelRequest cancel_request = 2;
     */
    value: CancelRequest;
    case: "cancelRequest";
  } | {
    /**
     * @generated from field: anduril.taskmanager.v1.CompleteRequest complete_request = 3;
     */
    value: CompleteRequest;
    case: "completeRequest";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.taskmanager.v1.ListenAsAgentResponse.
 * Use `create(ListenAsAgentResponseSchema)` to create a new message.
 */
export declare const ListenAsAgentResponseSchema: GenMessage<ListenAsAgentResponse>;

/**
 * Rate limiting / down-sampling parameters.
 *
 * @generated from message anduril.taskmanager.v1.RateLimit
 */
export declare type RateLimit = Message<"anduril.taskmanager.v1.RateLimit"> & {
  /**
   * Specifies a minimum duration in milliseconds after an update for a given task before another one
   * will be sent for the same task.
   * A value of 0 is treated as unset. If set, value must be >= 250.
   * Example: if set to 1000, and 4 events occur (ms since start) at T0, T500, T900, T2100, then
   * event from T0 will be sent at T0, T500 will be dropped, T900 will be sent at minimum of T1000,
   * and T2100 will be sent on time (2100)
   * This will only limit updates, other events will be sent immediately, with a delete clearing anything held
   *
   * @generated from field: uint32 update_per_task_limit_ms = 1;
   */
  updatePerTaskLimitMs: number;
};

/**
 * Describes the message anduril.taskmanager.v1.RateLimit.
 * Use `create(RateLimitSchema)` to create a new message.
 */
export declare const RateLimitSchema: GenMessage<RateLimit>;

/**
 * @generated from message anduril.taskmanager.v1.Heartbeat
 */
export declare type Heartbeat = Message<"anduril.taskmanager.v1.Heartbeat"> & {
  /**
   * The time at which the Heartbeat was sent.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;
};

/**
 * Describes the message anduril.taskmanager.v1.Heartbeat.
 * Use `create(HeartbeatSchema)` to create a new message.
 */
export declare const HeartbeatSchema: GenMessage<Heartbeat>;

/**
 * Entity IDs wrapper.
 *
 * @generated from message anduril.taskmanager.v1.EntityIds
 */
export declare type EntityIds = Message<"anduril.taskmanager.v1.EntityIds"> & {
  /**
   * @generated from field: repeated string entity_ids = 1;
   */
  entityIds: string[];
};

/**
 * Describes the message anduril.taskmanager.v1.EntityIds.
 * Use `create(EntityIdsSchema)` to create a new message.
 */
export declare const EntityIdsSchema: GenMessage<EntityIds>;

/**
 * Task Manager is a service that performs state management associated with Tasks, and also the execution of Tasks
 * on their designated agents.
 *
 * @generated from service anduril.taskmanager.v1.TaskManagerAPI
 */
export declare const TaskManagerAPI: GenService<{
  /**
   * Create a new Task.
   *
   * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.CreateTask
   */
  createTask: {
    methodKind: "unary";
    input: typeof CreateTaskRequestSchema;
    output: typeof CreateTaskResponseSchema;
  },
  /**
   * Get an existing Task.
   *
   * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.GetTask
   */
  getTask: {
    methodKind: "unary";
    input: typeof GetTaskRequestSchema;
    output: typeof GetTaskResponseSchema;
  },
  /**
   * Find Tasks that match request criteria.
   *
   * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.QueryTasks
   */
  queryTasks: {
    methodKind: "unary";
    input: typeof QueryTasksRequestSchema;
    output: typeof QueryTasksResponseSchema;
  },
  /**
   * Update the status of a Task.
   *
   * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.UpdateStatus
   */
  updateStatus: {
    methodKind: "unary";
    input: typeof UpdateStatusRequestSchema;
    output: typeof UpdateStatusResponseSchema;
  },
  /**
   * Stream Tasks ready for RPC Agent execution that match agent selector (ex: entity_ids).
   * Intended for use by Taskable Agents that need to receive Tasks ready for execution by RPC.
   *
   * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.ListenAsAgent
   */
  listenAsAgent: {
    methodKind: "server_streaming";
    input: typeof ListenAsAgentRequestSchema;
    output: typeof ListenAsAgentResponseSchema;
  },
}>;
