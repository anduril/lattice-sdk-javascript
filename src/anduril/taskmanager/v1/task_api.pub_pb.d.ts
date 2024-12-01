// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/taskmanager/v1/task_api.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Principal, Task } from "./task.pub_pb";

/**
 * Describes the file anduril/taskmanager/v1/task_api.pub.proto.
 */
export declare const file_anduril_taskmanager_v1_task_api_pub: GenFile;

/**
 * Request to execute a Task.
 *
 * @generated from message anduril.taskmanager.v1.ExecuteRequest
 */
export declare type ExecuteRequest = Message<"anduril.taskmanager.v1.ExecuteRequest"> & {
  /**
   * Task to execute.
   *
   * @generated from field: anduril.taskmanager.v1.Task task = 1;
   */
  task?: Task;
};

/**
 * Describes the message anduril.taskmanager.v1.ExecuteRequest.
 * Use `create(ExecuteRequestSchema)` to create a new message.
 */
export declare const ExecuteRequestSchema: GenMessage<ExecuteRequest>;

/**
 * Request to Cancel a Task.
 *
 * @generated from message anduril.taskmanager.v1.CancelRequest
 */
export declare type CancelRequest = Message<"anduril.taskmanager.v1.CancelRequest"> & {
  /**
   * ID of the Task to cancel.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;

  /**
   * The assignee of the Task. Useful for agent routing where an endpoint owns multiple agents,
   * especially onBehalfOf assignees.
   *
   * @generated from field: anduril.taskmanager.v1.Principal assignee = 2;
   */
  assignee?: Principal;
};

/**
 * Describes the message anduril.taskmanager.v1.CancelRequest.
 * Use `create(CancelRequestSchema)` to create a new message.
 */
export declare const CancelRequestSchema: GenMessage<CancelRequest>;

/**
 * Request to Complete a Task.
 *
 * @generated from message anduril.taskmanager.v1.CompleteRequest
 */
export declare type CompleteRequest = Message<"anduril.taskmanager.v1.CompleteRequest"> & {
  /**
   * ID of the task to complete.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;
};

/**
 * Describes the message anduril.taskmanager.v1.CompleteRequest.
 * Use `create(CompleteRequestSchema)` to create a new message.
 */
export declare const CompleteRequestSchema: GenMessage<CompleteRequest>;

