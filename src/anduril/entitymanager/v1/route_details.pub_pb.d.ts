// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/route_details.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message anduril.entitymanager.v1.RouteDetails
 */
export declare class RouteDetails extends Message<RouteDetails> {
  /**
   * Free form text giving the name of the entity's destination
   *
   * @generated from field: string destination_name = 1;
   */
  destinationName: string;

  /**
   * Estimated time of arrival at destination
   *
   * @generated from field: google.protobuf.Timestamp estimated_arrival_time = 2;
   */
  estimatedArrivalTime?: Timestamp;

  constructor(data?: PartialMessage<RouteDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.RouteDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteDetails;

  static equals(a: RouteDetails | PlainMessage<RouteDetails> | undefined, b: RouteDetails | PlainMessage<RouteDetails> | undefined): boolean;
}

