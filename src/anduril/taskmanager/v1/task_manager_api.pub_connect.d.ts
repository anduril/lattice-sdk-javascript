// @generated by protoc-gen-connect-es v1.4.0
// @generated from file anduril/taskmanager/v1/task_manager_api.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateTaskRequest, CreateTaskResponse, GetTaskRequest, GetTaskResponse, StreamTasksRequest, StreamTasksResponse, UpdateStatusRequest, UpdateStatusResponse, UpdateTaskRequest, UpdateTaskResponse } from "./task_manager_api.pub_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Task Manager is a service that performs state management associated with Tasks, and also the execution of Tasks
 *  on their designated agents.
 *
 * @generated from service anduril.taskmanager.v1.TaskManagerAPI
 */
export declare const TaskManagerAPI: {
  readonly typeName: "anduril.taskmanager.v1.TaskManagerAPI",
  readonly methods: {
    /**
     * Create a new Task.
     *
     * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.CreateTask
     */
    readonly createTask: {
      readonly name: "CreateTask",
      readonly I: typeof CreateTaskRequest,
      readonly O: typeof CreateTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get an existing Task.
     *
     * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.GetTask
     */
    readonly getTask: {
      readonly name: "GetTask",
      readonly I: typeof GetTaskRequest,
      readonly O: typeof GetTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update definition of a Task, only works on Tasks that are not DONE or CANCEL_REQUESTED. Notes:
     *  * send the current task_version in Task, API will increment definition_version, and reset status_version to 1.
     *  * previous definition_version will have status set to REPLACED.
     *  * depending on assignee, replacing the definition will either update if capable on backend,
     *     or cancel previous and issue new.
     *
     * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.UpdateTask
     */
    readonly updateTask: {
      readonly name: "UpdateTask",
      readonly I: typeof UpdateTaskRequest,
      readonly O: typeof UpdateTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update the status of a Task.
     *
     * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.UpdateStatus
     */
    readonly updateStatus: {
      readonly name: "UpdateStatus",
      readonly I: typeof UpdateStatusRequest,
      readonly O: typeof UpdateStatusResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Stream all existing live (not yet done) Tasks and any new updates.
     *
     * @generated from rpc anduril.taskmanager.v1.TaskManagerAPI.StreamTasks
     */
    readonly streamTasks: {
      readonly name: "StreamTasks",
      readonly I: typeof StreamTasksRequest,
      readonly O: typeof StreamTasksResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

