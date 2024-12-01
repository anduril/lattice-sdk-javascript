// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/dimensions.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/entitymanager/v1/dimensions.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_dimensions_pub: GenFile;

/**
 * @generated from message anduril.entitymanager.v1.Dimensions
 */
export declare type Dimensions = Message<"anduril.entitymanager.v1.Dimensions"> & {
  /**
   * Length of the entity in meters
   *
   * @generated from field: float length_m = 1;
   */
  lengthM: number;
};

/**
 * Describes the message anduril.entitymanager.v1.Dimensions.
 * Use `create(DimensionsSchema)` to create a new message.
 */
export declare const DimensionsSchema: GenMessage<Dimensions>;

