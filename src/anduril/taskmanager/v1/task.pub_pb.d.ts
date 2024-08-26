// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/taskmanager/v1/task.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Entity } from "../../entitymanager/v1/entity.pub_pb.js";

/**
 * The Status of a Task definition through its lifecycle. Each Definition Version can have its own Status.
 * For example, Definition v1 could go CREATED -> SENT -> WILCO -> REPLACED, with v2 then potentially in sent Status.
 *
 * @generated from enum anduril.taskmanager.v1.Status
 */
export declare enum Status {
  /**
   * @generated from enum value: STATUS_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Initial creation Status.
   *
   * @generated from enum value: STATUS_CREATED = 1;
   */
  CREATED = 1,

  /**
   * Scheduled within Task Manager to be sent at a future time.
   *
   * @generated from enum value: STATUS_SCHEDULED_IN_MANAGER = 2;
   */
  SCHEDULED_IN_MANAGER = 2,

  /**
   * Sent to another system (Asset), no receipt yet.
   *
   * @generated from enum value: STATUS_SENT = 3;
   */
  SENT = 3,

  /**
   * In case of a human operated asset assignee, the machine was reachable and responded, but operator did not ACK yet.
   *
   * @generated from enum value: STATUS_MACHINE_RECEIPT = 4;
   */
  MACHINE_RECEIPT = 4,

  /**
   * Assignee (either human or system in case of autonomous robot) has acknowledged receipt of Task.
   *
   * @generated from enum value: STATUS_ACK = 5;
   */
  ACK = 5,

  /**
   * Assignee confirmed they "will comply" / intend to execute Task.
   *
   * @generated from enum value: STATUS_WILCO = 6;
   */
  WILCO = 6,

  /**
   * Task was started and is actively executing.
   *
   * @generated from enum value: STATUS_EXECUTING = 7;
   */
  EXECUTING = 7,

  /**
   * Task is on hold, waiting for additional updates/information before proceeding.
   *
   * @generated from enum value: STATUS_WAITING_FOR_UPDATE = 8;
   */
  WAITING_FOR_UPDATE = 8,

  /**
   * Task was completed successfully.
   *
   * @generated from enum value: STATUS_DONE_OK = 9;
   */
  DONE_OK = 9,

  /**
   * Task has reached a terminal state but did not complete successfully, see error code/message.
   *
   * @generated from enum value: STATUS_DONE_NOT_OK = 10;
   */
  DONE_NOT_OK = 10,

  /**
   * This definition version was replaced.
   *
   * @generated from enum value: STATUS_REPLACED = 11;
   */
  REPLACED = 11,

  /**
   * A Task was requested to be cancelled but not yet confirmed, will eventually move to DONE_NOT_OK.
   *
   * @generated from enum value: STATUS_CANCEL_REQUESTED = 12;
   */
  CANCEL_REQUESTED = 12,

  /**
   * A Task was requested to be completed successfully but not yet confirmed, will eventually move to DONE_NOT_OK / DONE_OK.
   *
   * @generated from enum value: STATUS_COMPLETE_REQUESTED = 13;
   */
  COMPLETE_REQUESTED = 13,

  /**
   * This definition version was rejected, intended to be used when an Agent does not accept a new version of a task
   * and continues using previous version
   *
   * @generated from enum value: STATUS_VERSION_REJECTED = 14;
   */
  VERSION_REJECTED = 14,
}

/**
 * Error code associated with a Task error.
 *
 * @generated from enum anduril.taskmanager.v1.ErrorCode
 */
export declare enum ErrorCode {
  /**
   * @generated from enum value: ERROR_CODE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Task was cancelled by requester.
   *
   * @generated from enum value: ERROR_CODE_CANCELLED = 1;
   */
  CANCELLED = 1,

  /**
   * Task was rejected by assignee, see message for details.
   *
   * @generated from enum value: ERROR_CODE_REJECTED = 2;
   */
  REJECTED = 2,

  /**
   * Task Manager gave up waiting for a receipt/ack from assignee.
   *
   * @generated from enum value: ERROR_CODE_TIMEOUT = 3;
   */
  TIMEOUT = 3,

  /**
   * Task attempted to execute, but failed.
   *
   * @generated from enum value: ERROR_CODE_FAILED = 4;
   */
  FAILED = 4,
}

/**
 * The type of Task event.
 *
 * @generated from enum anduril.taskmanager.v1.EventType
 */
export declare enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Task was created.
   *
   * @generated from enum value: EVENT_TYPE_CREATED = 1;
   */
  CREATED = 1,

  /**
   * Task was updated.
   *
   * @generated from enum value: EVENT_TYPE_UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * Task already existed, but sent on a new stream connection.
   *
   * @generated from enum value: EVENT_TYPE_PREEXISTING = 3;
   */
  PREEXISTING = 3,
}

/**
 * View of a Task through its lifecycle.
 * For example, a definition v1 of a task may be running on an agent, indicated by TASK_VIEW_AGENT,
 * while the definition v2 may not have been received yet, indicated by TASK_VIEW_MANAGER.
 *
 * @generated from enum anduril.taskmanager.v1.TaskView
 */
export declare enum TaskView {
  /**
   * @generated from enum value: TASK_VIEW_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Represents the most recent version of the Task known to Task Manager
   *
   * @generated from enum value: TASK_VIEW_MANAGER = 1;
   */
  MANAGER = 1,

  /**
   * Represents the most recent version of the Task acknowledged or updated by an Agent
   *
   * @generated from enum value: TASK_VIEW_AGENT = 2;
   */
  AGENT = 2,
}

/**
 * A Task is something an agent can be asked to do within a battle space, typically against a given objective.
 *
 * @generated from message anduril.taskmanager.v1.Task
 */
export declare class Task extends Message<Task> {
  /**
   * Version of this Task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskVersion version = 1;
   */
  version?: TaskVersion;

  /**
   * Human readable display name for this Task, should be short (<100 chars).
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Full Task parameterization, must be a message under anduril/tasks/v*\/
   *
   * @generated from field: google.protobuf.Any specification = 3;
   */
  specification?: Any;

  /**
   * Records who created this Task. This field will not change after the Task has been created.
   *
   * @generated from field: anduril.taskmanager.v1.Principal created_by = 16;
   */
  createdBy?: Principal;

  /**
   * Records who updated this Task last.
   *
   * @generated from field: anduril.taskmanager.v1.Principal last_updated_by = 4;
   */
  lastUpdatedBy?: Principal;

  /**
   * Records the time of last update.
   *
   * @generated from field: google.protobuf.Timestamp last_update_time = 9;
   */
  lastUpdateTime?: Timestamp;

  /**
   * The status of this Task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskStatus status = 5;
   */
  status?: TaskStatus;

  /**
   * If the Task has been scheduled to execute, what time it should execute at.
   *
   * @generated from field: google.protobuf.Timestamp scheduled_time = 6;
   */
  scheduledTime?: Timestamp;

  /**
   * Any related Tasks associated with this, typically includes an assignee for this Task and/or a parent.
   *
   * @generated from field: anduril.taskmanager.v1.Relations relations = 8;
   */
  relations?: Relations;

  /**
   * Longer, free form human readable description of this Task
   *
   * @generated from field: string description = 10;
   */
  description: string;

  /**
   * If set, execution of this Task is managed elsewhere, not by Task Manager.
   * In other words, Task manager will not attempt to update the assigned agent with execution instructions.
   *
   * @generated from field: bool is_executed_elsewhere = 11;
   */
  isExecutedElsewhere: boolean;

  /**
   * Time of Task creation.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 13;
   */
  createTime?: Timestamp;

  /**
   * If populated, designates this to be a replicated Task.
   *
   * @generated from field: anduril.taskmanager.v1.Replication replication = 14;
   */
  replication?: Replication;

  /**
   * If populated, indicates an initial set of entities that can be used to execute an entity aware task
   * For example, an entity Objective, an entity Keep In Zone, etc.
   * These will not be updated during execution. If a taskable agent needs continuous updates on the entities from the
   * COP, can call entity-manager, or use an AlternateId escape hatch.
   *
   * @generated from field: repeated anduril.taskmanager.v1.TaskEntity initial_entities = 15;
   */
  initialEntities: TaskEntity[];

  /**
   * The networked owner of this Task. Populated on creation to be the asset on which the Task Manager is running. DO NOT
   * UNDER ANY CIRCUMSTANCES change or modify this field. It is used to ensure that linear writes occur on the node responsible
   * for replication of task data to other nodes running Task Manager.
   *
   * @generated from field: anduril.taskmanager.v1.Owner owner = 12;
   */
  owner?: Owner;

  constructor(data?: PartialMessage<Task>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Task";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Task;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Task;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Task;

  static equals(a: Task | PlainMessage<Task> | undefined, b: Task | PlainMessage<Task> | undefined): boolean;
}

/**
 * TaskStatus is contains information regarding the status of a Task at any given time. Can include related information
 *  such as any progress towards Task completion, or any associated results if Task completed.
 *
 * @generated from message anduril.taskmanager.v1.TaskStatus
 */
export declare class TaskStatus extends Message<TaskStatus> {
  /**
   * Status of the Task.
   *
   * @generated from field: anduril.taskmanager.v1.Status status = 1;
   */
  status: Status;

  /**
   * Any errors associated with the Task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskError task_error = 2;
   */
  taskError?: TaskError;

  /**
   * Any incremental progress on the Task, should be from the tasks/v*\/progress folder.
   *
   * @generated from field: google.protobuf.Any progress = 4;
   */
  progress?: Any;

  /**
   * Any final result of the Task, should be from tasks/v*\/result folder.
   *
   * @generated from field: google.protobuf.Any result = 5;
   */
  result?: Any;

  /**
   * Time the Task began execution, may not be known even for executing Tasks.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 6;
   */
  startTime?: Timestamp;

  /**
   * Any estimate for how the Task will progress, should be from tasks/v*\/estimates folder.
   *
   * @generated from field: google.protobuf.Any estimate = 7;
   */
  estimate?: Any;

  /**
   * Any allocated agents of the Task.
   *
   * @generated from field: anduril.taskmanager.v1.Allocation allocation = 8;
   */
  allocation?: Allocation;

  constructor(data?: PartialMessage<TaskStatus>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.TaskStatus";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskStatus;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskStatus;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskStatus;

  static equals(a: TaskStatus | PlainMessage<TaskStatus> | undefined, b: TaskStatus | PlainMessage<TaskStatus> | undefined): boolean;
}

/**
 * TaskError contains an error code and message typically associated to a Task.
 *
 * @generated from message anduril.taskmanager.v1.TaskError
 */
export declare class TaskError extends Message<TaskError> {
  /**
   * Error code for Task error.
   *
   * @generated from field: anduril.taskmanager.v1.ErrorCode code = 1;
   */
  code: ErrorCode;

  /**
   * Descriptive human-readable string regarding this error.
   *
   * @generated from field: string message = 2;
   */
  message: string;

  /**
   * Any additional details regarding this error.
   *
   * @generated from field: google.protobuf.Any error_details = 3;
   */
  errorDetails?: Any;

  constructor(data?: PartialMessage<TaskError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.TaskError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskError;

  static equals(a: TaskError | PlainMessage<TaskError> | undefined, b: TaskError | PlainMessage<TaskError> | undefined): boolean;
}

/**
 * A Principal is an entity that has authority over this Task.
 *
 * @generated from message anduril.taskmanager.v1.Principal
 */
export declare class Principal extends Message<Principal> {
  /**
   * A Principal can be either a human user, or a system.
   *
   * @generated from oneof anduril.taskmanager.v1.Principal.agent
   */
  agent: {
    /**
     * @generated from field: anduril.taskmanager.v1.System system = 1;
     */
    value: System;
    case: "system";
  } | {
    /**
     * @generated from field: anduril.taskmanager.v1.User user = 2;
     */
    value: User;
    case: "user";
  } | {
    /**
     * @generated from field: anduril.taskmanager.v1.Team team = 4;
     */
    value: Team;
    case: "team";
  } | { case: undefined; value?: undefined };

  /**
   * The Principal _this_ Principal is acting on behalf of. For example, if there is a Flux node connected to a non-Flux node,
   * and that Flux node wants to act "on behalf of" that non-Flux node, _this_ Principal would represent the Flux node, and
   * this "on_behalf_of" Principal would represent the non-Flux node.
   *
   * Likely only populated once in the nesting (i.e. the "on_behalf_of" Principal would not have another "on_behalf_of" in most cases).
   *
   * @generated from field: anduril.taskmanager.v1.Principal on_behalf_of = 3;
   */
  onBehalfOf?: Principal;

  constructor(data?: PartialMessage<Principal>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Principal";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Principal;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Principal;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Principal;

  static equals(a: Principal | PlainMessage<Principal> | undefined, b: Principal | PlainMessage<Principal> | undefined): boolean;
}

/**
 * System Principal representing some autonomous system.
 *
 * @generated from message anduril.taskmanager.v1.System
 */
export declare class System extends Message<System> {
  /**
   * Name of the service associated with this System.
   *
   * @generated from field: string service_name = 1;
   */
  serviceName: string;

  /**
   * The Entity ID of the System.
   *
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  /**
   * The Asset ID of the System.
   *
   * @generated from field: string asset_id = 3;
   */
  assetId: string;

  /**
   * Whether the System Principal (for example, an Asset) can own scheduling.
   * This means we bypass manager-owned scheduling and defer to the system
   * Principal to handle scheduling and give us status updates for the Task.
   * Regardless of the value defined by the client, the Task Manager will
   * determine and set this value appropriately.
   *
   * @generated from field: bool manages_own_scheduling = 4;
   */
  managesOwnScheduling: boolean;

  constructor(data?: PartialMessage<System>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.System";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): System;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): System;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): System;

  static equals(a: System | PlainMessage<System> | undefined, b: System | PlainMessage<System> | undefined): boolean;
}

/**
 * A User Principal representing a human.
 *
 * @generated from message anduril.taskmanager.v1.User
 */
export declare class User extends Message<User> {
  /**
   * The User ID associated with this User.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.User";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}

/**
 * Relations describes the relationships of this Task, such as assignment, or if the Task has any parents.
 *
 * @generated from message anduril.taskmanager.v1.Relations
 */
export declare class Relations extends Message<Relations> {
  /**
   * Who or what, if anyone, this Task is currently assigned to.
   *
   * @generated from field: anduril.taskmanager.v1.Principal assignee = 1;
   */
  assignee?: Principal;

  /**
   * If this Task is a "sub-Task", what is its parent, none if empty.
   *
   * @generated from field: string parent_task_id = 2;
   */
  parentTaskId: string;

  constructor(data?: PartialMessage<Relations>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Relations";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relations;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relations;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relations;

  static equals(a: Relations | PlainMessage<Relations> | undefined, b: Relations | PlainMessage<Relations> | undefined): boolean;
}

/**
 * Holds Tasks and its associated Events, e.g. CREATED.
 *
 * @generated from message anduril.taskmanager.v1.TaskEvent
 */
export declare class TaskEvent extends Message<TaskEvent> {
  /**
   * Type of Event.
   *
   * @generated from field: anduril.taskmanager.v1.EventType event_type = 1;
   */
  eventType: EventType;

  /**
   * Task associated with this TaskEvent.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 2;
   */
  task?: Task;

  /**
   * View associated with this task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskView task_view = 3;
   */
  taskView: TaskView;

  /**
   * ===== Time Series Updates =====
   *
   * Timestamp for time-series to index.
   *
   * @generated from field: google.protobuf.Timestamp time = 4;
   */
  time?: Timestamp;

  constructor(data?: PartialMessage<TaskEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.TaskEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskEvent;

  static equals(a: TaskEvent | PlainMessage<TaskEvent> | undefined, b: TaskEvent | PlainMessage<TaskEvent> | undefined): boolean;
}

/**
 * Version of a Task.
 *
 * @generated from message anduril.taskmanager.v1.TaskVersion
 */
export declare class TaskVersion extends Message<TaskVersion> {
  /**
   * The unique ID for this Task.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;

  /**
   * Increments on definition (i.e. not TaskStatus) change. 0 is unset, starts at 1 on creation.
   *
   * @generated from field: uint32 definition_version = 2;
   */
  definitionVersion: number;

  /**
   * Increments on changes to TaskStatus. 0 is unset, starts at 1 on creation.
   *
   * @generated from field: uint32 status_version = 3;
   */
  statusVersion: number;

  constructor(data?: PartialMessage<TaskVersion>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.TaskVersion";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskVersion;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskVersion;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskVersion;

  static equals(a: TaskVersion | PlainMessage<TaskVersion> | undefined, b: TaskVersion | PlainMessage<TaskVersion> | undefined): boolean;
}

/**
 * a Task status update that could come in via RPC or Flux.
 *
 * @generated from message anduril.taskmanager.v1.StatusUpdate
 */
export declare class StatusUpdate extends Message<StatusUpdate> {
  /**
   * Version of the Task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskVersion version = 1;
   */
  version?: TaskVersion;

  /**
   * Status of the Task.
   *
   * @generated from field: anduril.taskmanager.v1.TaskStatus status = 2;
   */
  status?: TaskStatus;

  /**
   * Author of the StatusUpdate message. Used to set the LastUpdatedBy field of the Task.
   *
   * @generated from field: anduril.taskmanager.v1.Principal author = 3;
   */
  author?: Principal;

  /**
   * Typically provided if a user is manually managing a Task, or if an asset owns scheduling.
   *
   * @generated from field: google.protobuf.Timestamp scheduled_time = 4;
   */
  scheduledTime?: Timestamp;

  constructor(data?: PartialMessage<StatusUpdate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.StatusUpdate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusUpdate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusUpdate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusUpdate;

  static equals(a: StatusUpdate | PlainMessage<StatusUpdate> | undefined, b: StatusUpdate | PlainMessage<StatusUpdate> | undefined): boolean;
}

/**
 * Flux message representing a Task create or update.
 *
 * @generated from message anduril.taskmanager.v1.DefinitionUpdate
 */
export declare class DefinitionUpdate extends Message<DefinitionUpdate> {
  /**
   * New task definition being created or updated.
   * The last_updated_by and specification fields inside the task object must be defined.
   * Definition version must also be incremented by the publisher on updates.
   * We do not look at the fields create_time or last_update_time in this object,
   * they are instead set by task-manager.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;

  constructor(data?: PartialMessage<DefinitionUpdate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.DefinitionUpdate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefinitionUpdate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefinitionUpdate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefinitionUpdate;

  static equals(a: DefinitionUpdate | PlainMessage<DefinitionUpdate> | undefined, b: DefinitionUpdate | PlainMessage<DefinitionUpdate> | undefined): boolean;
}

/**
 * Owner designates the networked flux node responsible for linear writes of a Task data.
 *
 * @generated from message anduril.taskmanager.v1.Owner
 */
export declare class Owner extends Message<Owner> {
  /**
   * Flux Asset ID of the owner.
   *
   * @generated from field: string asset_id = 1;
   */
  assetId: string;

  /**
   * Entity ID of the owner.
   *
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  constructor(data?: PartialMessage<Owner>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Owner";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Owner;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Owner;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Owner;

  static equals(a: Owner | PlainMessage<Owner> | undefined, b: Owner | PlainMessage<Owner> | undefined): boolean;
}

/**
 * Any metadata associated with the replication of a Task.
 *
 * @generated from message anduril.taskmanager.v1.Replication
 */
export declare class Replication extends Message<Replication> {
  /**
   * Time by which this Task should be assumed to be stale.
   *
   * @generated from field: google.protobuf.Timestamp stale_time = 1;
   */
  staleTime?: Timestamp;

  constructor(data?: PartialMessage<Replication>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Replication";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Replication;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Replication;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Replication;

  static equals(a: Replication | PlainMessage<Replication> | undefined, b: Replication | PlainMessage<Replication> | undefined): boolean;
}

/**
 * Allocation contains a list of agents allocated to a Task.
 *
 * @generated from message anduril.taskmanager.v1.Allocation
 */
export declare class Allocation extends Message<Allocation> {
  /**
   * Agents actively being utilized in a Task.
   *
   * @generated from field: repeated anduril.taskmanager.v1.Agent active_agents = 1;
   */
  activeAgents: Agent[];

  constructor(data?: PartialMessage<Allocation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Allocation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Allocation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Allocation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Allocation;

  static equals(a: Allocation | PlainMessage<Allocation> | undefined, b: Allocation | PlainMessage<Allocation> | undefined): boolean;
}

/**
 * Represents a team of agents
 *
 * @generated from message anduril.taskmanager.v1.Team
 */
export declare class Team extends Message<Team> {
  /**
   * Entity ID of the team
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: repeated anduril.taskmanager.v1.Agent members = 2;
   */
  members: Agent[];

  constructor(data?: PartialMessage<Team>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Team";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team;

  static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean;
}

/**
 * Represents an Agent on the Battlespace.
 *
 * @generated from message anduril.taskmanager.v1.Agent
 */
export declare class Agent extends Message<Agent> {
  /**
   * Asset ID of the agent.
   *
   * @generated from field: string asset_id = 1;
   */
  assetId: string;

  /**
   * Entity ID of the agent.
   *
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  constructor(data?: PartialMessage<Agent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.Agent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Agent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Agent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Agent;

  static equals(a: Agent | PlainMessage<Agent> | undefined, b: Agent | PlainMessage<Agent> | undefined): boolean;
}

/**
 * Wrapper of an entity passed in Tasking, used to hold an additional information, and as a future extension point.
 *
 * @generated from message anduril.taskmanager.v1.TaskEntity
 */
export declare class TaskEntity extends Message<TaskEntity> {
  /**
   * The wrapped entity-manager entity.
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  /**
   * Indicates that this entity was generated from a snapshot of a live entity.
   *
   * @generated from field: bool snapshot = 2;
   */
  snapshot: boolean;

  constructor(data?: PartialMessage<TaskEntity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.taskmanager.v1.TaskEntity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskEntity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskEntity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskEntity;

  static equals(a: TaskEntity | PlainMessage<TaskEntity> | undefined, b: TaskEntity | PlainMessage<TaskEntity> | undefined): boolean;
}

