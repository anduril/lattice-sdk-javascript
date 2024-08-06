// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/v2/catalog.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Catalog of supported tasks.
 *
 * @generated from message anduril.tasks.v2.TaskCatalog
 */
export declare class TaskCatalog extends Message<TaskCatalog> {
  /**
   * @generated from field: repeated anduril.tasks.v2.TaskDefinition task_definitions = 1;
   */
  taskDefinitions: TaskDefinition[];

  /**
   * Asset is inhibited by VCE.
   * Asset can still receive tasks but not be able to act on them until inhibition status is lifted.
   *
   * @generated from field: bool is_asset_inhibited = 2;
   */
  isAssetInhibited: boolean;

  constructor(data?: PartialMessage<TaskCatalog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.TaskCatalog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskCatalog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskCatalog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskCatalog;

  static equals(a: TaskCatalog | PlainMessage<TaskCatalog> | undefined, b: TaskCatalog | PlainMessage<TaskCatalog> | undefined): boolean;
}

/**
 * Defines a supported task by the task specification URL of its "Any" type.
 *
 * @generated from message anduril.tasks.v2.TaskDefinition
 */
export declare class TaskDefinition extends Message<TaskDefinition> {
  /**
   * @generated from field: string task_specification_url = 1;
   */
  taskSpecificationUrl: string;

  /**
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  constructor(data?: PartialMessage<TaskDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.TaskDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskDefinition;

  static equals(a: TaskDefinition | PlainMessage<TaskDefinition> | undefined, b: TaskDefinition | PlainMessage<TaskDefinition> | undefined): boolean;
}

