// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/tasks/v2/catalog.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/tasks/v2/catalog.pub.proto.
 */
export declare const file_anduril_tasks_v2_catalog_pub: GenFile;

/**
 * Catalog of supported tasks.
 *
 * @generated from message anduril.tasks.v2.TaskCatalog
 */
export declare type TaskCatalog = Message<"anduril.tasks.v2.TaskCatalog"> & {
  /**
   * @generated from field: repeated anduril.tasks.v2.TaskDefinition task_definitions = 1;
   */
  taskDefinitions: TaskDefinition[];
};

/**
 * Describes the message anduril.tasks.v2.TaskCatalog.
 * Use `create(TaskCatalogSchema)` to create a new message.
 */
export declare const TaskCatalogSchema: GenMessage<TaskCatalog>;

/**
 * Defines a supported task by the task specification URL of its "Any" type.
 *
 * @generated from message anduril.tasks.v2.TaskDefinition
 */
export declare type TaskDefinition = Message<"anduril.tasks.v2.TaskDefinition"> & {
  /**
   * Url path must be prefixed with `type.googleapis.com/`.
   *
   * @generated from field: string task_specification_url = 1;
   */
  taskSpecificationUrl: string;
};

/**
 * Describes the message anduril.tasks.v2.TaskDefinition.
 * Use `create(TaskDefinitionSchema)` to create a new message.
 */
export declare const TaskDefinitionSchema: GenMessage<TaskDefinition>;

