// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/taskmanager/v1/task_manager_grpcapi.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Principal, Relations, Status, StatusUpdate, Task, TaskEntity, TaskView } from "./task.pub_pb.js";
import type { CancelRequest, CompleteRequest, ExecuteRequest } from "./task_api.pub_pb.js";

/**
 * Request to create a Task.
 *
 * @generated from message anduril.taskmanager.v1.CreateTaskRequest
 */
export declare class CreateTaskRequest extends Message<CreateTaskRequest> {
  /**
   * Human readable display name for this Task, should be short (<100 chars).
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
   * Longer, free form human readable description of this Task.
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

  constructor(data?: PartialMessage<CreateTaskRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.CreateTaskRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTaskRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTaskRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTaskRequest;

  static equals(a: CreateTaskRequest | PlainMessage<CreateTaskRequest> | undefined, b: CreateTaskRequest | PlainMessage<CreateTaskRequest> | undefined): boolean;
}

/**
 * Response to a Create Task request.
 *
 * @generated from message anduril.taskmanager.v1.CreateTaskResponse
 */
export declare class CreateTaskResponse extends Message<CreateTaskResponse> {
  /**
   * Task that was created.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;

  constructor(data?: PartialMessage<CreateTaskResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.CreateTaskResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTaskResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTaskResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTaskResponse;

  static equals(a: CreateTaskResponse | PlainMessage<CreateTaskResponse> | undefined, b: CreateTaskResponse | PlainMessage<CreateTaskResponse> | undefined): boolean;
}

/**
 * Request to get a Task.
 *
 * @generated from message anduril.taskmanager.v1.GetTaskRequest
 */
export declare class GetTaskRequest extends Message<GetTaskRequest> {
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

  constructor(data?: PartialMessage<GetTaskRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.GetTaskRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTaskRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTaskRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTaskRequest;

  static equals(a: GetTaskRequest | PlainMessage<GetTaskRequest> | undefined, b: GetTaskRequest | PlainMessage<GetTaskRequest> | undefined): boolean;
}

/**
 * Response to a Get Task request.
 *
 * @generated from message anduril.taskmanager.v1.GetTaskResponse
 */
export declare class GetTaskResponse extends Message<GetTaskResponse> {
  /**
   * Task that received.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;

  constructor(data?: PartialMessage<GetTaskResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.GetTaskResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTaskResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTaskResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTaskResponse;

  static equals(a: GetTaskResponse | PlainMessage<GetTaskResponse> | undefined, b: GetTaskResponse | PlainMessage<GetTaskResponse> | undefined): boolean;
}

/**
 * Request to query for Tasks. Returns the each latest Task by Status ID and Version ID by default with no filters.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest
 */
export declare class QueryTasksRequest extends Message<QueryTasksRequest> {
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

  constructor(data?: PartialMessage<QueryTasksRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.QueryTasksRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTasksRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTasksRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTasksRequest;

  static equals(a: QueryTasksRequest | PlainMessage<QueryTasksRequest> | undefined, b: QueryTasksRequest | PlainMessage<QueryTasksRequest> | undefined): boolean;
}

/**
 * The type of filter.
 *
 * @generated from enum anduril.taskmanager.v1.QueryTasksRequest.FilterType
 */
export declare enum QueryTasksRequest_FilterType {
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
 * A time range query for Tasks.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest.TimeRange
 */
export declare class QueryTasksRequest_TimeRange extends Message<QueryTasksRequest_TimeRange> {
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

  constructor(data?: PartialMessage<QueryTasksRequest_TimeRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.QueryTasksRequest.TimeRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTasksRequest_TimeRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTasksRequest_TimeRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTasksRequest_TimeRange;

  static equals(a: QueryTasksRequest_TimeRange | PlainMessage<QueryTasksRequest_TimeRange> | undefined, b: QueryTasksRequest_TimeRange | PlainMessage<QueryTasksRequest_TimeRange> | undefined): boolean;
}

/**
 * A filter for statuses.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksRequest.StatusFilter
 */
export declare class QueryTasksRequest_StatusFilter extends Message<QueryTasksRequest_StatusFilter> {
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

  constructor(data?: PartialMessage<QueryTasksRequest_StatusFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.QueryTasksRequest.StatusFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTasksRequest_StatusFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTasksRequest_StatusFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTasksRequest_StatusFilter;

  static equals(a: QueryTasksRequest_StatusFilter | PlainMessage<QueryTasksRequest_StatusFilter> | undefined, b: QueryTasksRequest_StatusFilter | PlainMessage<QueryTasksRequest_StatusFilter> | undefined): boolean;
}

/**
 * Response to a Query Task request.
 *
 * @generated from message anduril.taskmanager.v1.QueryTasksResponse
 */
export declare class QueryTasksResponse extends Message<QueryTasksResponse> {
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

  constructor(data?: PartialMessage<QueryTasksResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.QueryTasksResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTasksResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTasksResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTasksResponse;

  static equals(a: QueryTasksResponse | PlainMessage<QueryTasksResponse> | undefined, b: QueryTasksResponse | PlainMessage<QueryTasksResponse> | undefined): boolean;
}

/**
 * Request to update a Task's status.
 *
 * @generated from message anduril.taskmanager.v1.UpdateStatusRequest
 */
export declare class UpdateStatusRequest extends Message<UpdateStatusRequest> {
  /**
   * The updated status.
   *
   * @generated from field: anduril.taskmanager.v1.StatusUpdate status_update = 1;
   */
  statusUpdate?: StatusUpdate;

  constructor(data?: PartialMessage<UpdateStatusRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.UpdateStatusRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateStatusRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateStatusRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateStatusRequest;

  static equals(a: UpdateStatusRequest | PlainMessage<UpdateStatusRequest> | undefined, b: UpdateStatusRequest | PlainMessage<UpdateStatusRequest> | undefined): boolean;
}

/**
 * Response to an Update Status request.
 *
 * @generated from message anduril.taskmanager.v1.UpdateStatusResponse
 */
export declare class UpdateStatusResponse extends Message<UpdateStatusResponse> {
  /**
   * The updated Task.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;

  constructor(data?: PartialMessage<UpdateStatusResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.UpdateStatusResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateStatusResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateStatusResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateStatusResponse;

  static equals(a: UpdateStatusResponse | PlainMessage<UpdateStatusResponse> | undefined, b: UpdateStatusResponse | PlainMessage<UpdateStatusResponse> | undefined): boolean;
}

/**
 * Request for streaming Tasks ready for agent execution.
 *
 * @generated from message anduril.taskmanager.v1.ListenAsAgentRequest
 */
export declare class ListenAsAgentRequest extends Message<ListenAsAgentRequest> {
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

  constructor(data?: PartialMessage<ListenAsAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.ListenAsAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenAsAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenAsAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenAsAgentRequest;

  static equals(a: ListenAsAgentRequest | PlainMessage<ListenAsAgentRequest> | undefined, b: ListenAsAgentRequest | PlainMessage<ListenAsAgentRequest> | undefined): boolean;
}

/**
 * Response for streaming Tasks ready for agent execution.
 *
 * @generated from message anduril.taskmanager.v1.ListenAsAgentResponse
 */
export declare class ListenAsAgentResponse extends Message<ListenAsAgentResponse> {
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

  constructor(data?: PartialMessage<ListenAsAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.ListenAsAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenAsAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenAsAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenAsAgentResponse;

  static equals(a: ListenAsAgentResponse | PlainMessage<ListenAsAgentResponse> | undefined, b: ListenAsAgentResponse | PlainMessage<ListenAsAgentResponse> | undefined): boolean;
}

/**
 * Rate limiting / down-sampling parameters.
 *
 * @generated from message anduril.taskmanager.v1.RateLimit
 */
export declare class RateLimit extends Message<RateLimit> {
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

  constructor(data?: PartialMessage<RateLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.RateLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateLimit;

  static equals(a: RateLimit | PlainMessage<RateLimit> | undefined, b: RateLimit | PlainMessage<RateLimit> | undefined): boolean;
}

/**
 * @generated from message anduril.taskmanager.v1.Heartbeat
 */
export declare class Heartbeat extends Message<Heartbeat> {
  /**
   * The time at which the Heartbeat was sent.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<Heartbeat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Heartbeat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Heartbeat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Heartbeat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Heartbeat;

  static equals(a: Heartbeat | PlainMessage<Heartbeat> | undefined, b: Heartbeat | PlainMessage<Heartbeat> | undefined): boolean;
}

/**
 * Entity IDs wrapper.
 *
 * @generated from message anduril.taskmanager.v1.EntityIds
 */
export declare class EntityIds extends Message<EntityIds> {
  /**
   * @generated from field: repeated string entity_ids = 1;
   */
  entityIds: string[];

  constructor(data?: PartialMessage<EntityIds>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.EntityIds";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityIds;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityIds;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityIds;

  static equals(a: EntityIds | PlainMessage<EntityIds> | undefined, b: EntityIds | PlainMessage<EntityIds> | undefined): boolean;
}
