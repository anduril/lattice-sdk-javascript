// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/communicationsmanager/v1/blobs.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Statement } from "../../blobs/v1/filter.pub_pb";

/**
 * Describes the file anduril/communicationsmanager/v1/blobs.pub.proto.
 */
export declare const file_anduril_communicationsmanager_v1_blobs_pub: GenFile;

/**
 * @generated from message anduril.communicationsmanager.v1.BlobsIntegrationDetails
 */
export declare type BlobsIntegrationDetails = Message<"anduril.communicationsmanager.v1.BlobsIntegrationDetails"> & {
  /**
   * data types registered to the blobs integration.
   *
   * @generated from field: repeated string data_types = 1;
   */
  dataTypes: string[];
};

/**
 * Describes the message anduril.communicationsmanager.v1.BlobsIntegrationDetails.
 * Use `create(BlobsIntegrationDetailsSchema)` to create a new message.
 */
export declare const BlobsIntegrationDetailsSchema: GenMessage<BlobsIntegrationDetails>;

/**
 * Message to contain blob integration rules
 *
 * @generated from message anduril.communicationsmanager.v1.BlobIntegrationRuleDetails
 */
export declare type BlobIntegrationRuleDetails = Message<"anduril.communicationsmanager.v1.BlobIntegrationRuleDetails"> & {
  /**
   * The filter to be applied to the integration
   *
   * @generated from field: repeated anduril.blobs.v1.Statement filters = 1;
   */
  filters: Statement[];
};

/**
 * Describes the message anduril.communicationsmanager.v1.BlobIntegrationRuleDetails.
 * Use `create(BlobIntegrationRuleDetailsSchema)` to create a new message.
 */
export declare const BlobIntegrationRuleDetailsSchema: GenMessage<BlobIntegrationRuleDetails>;

