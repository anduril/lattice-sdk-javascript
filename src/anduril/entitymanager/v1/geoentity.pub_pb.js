// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/geoentity.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_location_pub } from "./location.pub_pb.js";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/geoentity.pub.proto.
 */
export const file_anduril_entitymanager_v1_geoentity_pub = /*@__PURE__*/
  fileDesc("CixhbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvZ2VvZW50aXR5LnB1Yi5wcm90bxIYYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxIpoBCgpHZW9EZXRhaWxzEi8KBHR5cGUYASABKA4yIS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuR2VvVHlwZUoECAIQA0oECAMQBEoECAQQBUoECAUQBkoECAYQB0oECAcQCFIJZW1lcmdlbmN5Ug52aXN1YWxfZGV0YWlsc1IEZnNjbVIMY29udHJvbF9hcmVhUgNhY21SA21jbSKqAgoIR2VvU2hhcGUSMwoFcG9pbnQYASABKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuR2VvUG9pbnRIABIxCgRsaW5lGAIgASgLMiEuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb0xpbmVIABI3Cgdwb2x5Z29uGAMgASgLMiQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb1BvbHlnb25IABI3CgdlbGxpcHNlGAQgASgLMiQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb0VsbGlwc2VIABI7CgllbGxpcHNvaWQYBSABKAsyJi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuR2VvRWxsaXBzb2lkSABCBwoFc2hhcGUiQAoIR2VvUG9pbnQSNAoIcG9zaXRpb24YASABKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUG9zaXRpb24iQAoHR2VvTGluZRI1Cglwb3NpdGlvbnMYASADKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUG9zaXRpb24iVwoKR2VvUG9seWdvbhIzCgVyaW5ncxgBIAMoCzIkLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5MaW5lYXJSaW5nEhQKDGlzX3JlY3RhbmdsZRgCIAEoCCLjAQoKR2VvRWxsaXBzZRI3ChFzZW1pX21ham9yX2F4aXNfbRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZRI3ChFzZW1pX21pbm9yX2F4aXNfbRgDIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZRIzCg1vcmllbnRhdGlvbl9kGAQgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEi4KCGhlaWdodF9tGAUgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlIqgBCgxHZW9FbGxpcHNvaWQSNAoOZm9yd2FyZF9heGlzX20YASABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSMQoLc2lkZV9heGlzX20YAiABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSLwoJdXBfYXhpc19tGAMgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlIlMKCkxpbmVhclJpbmcSPwoJcG9zaXRpb25zGAIgAygLMiwuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb1BvbHlnb25Qb3NpdGlvbkoECAEQAiJ5ChJHZW9Qb2x5Z29uUG9zaXRpb24SNAoIcG9zaXRpb24YASABKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUG9zaXRpb24SLQoIaGVpZ2h0X20YAiABKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZSrEAQoHR2VvVHlwZRIUChBHRU9fVFlQRV9JTlZBTElEEAASFAoQR0VPX1RZUEVfR0VORVJBTBABEhMKD0dFT19UWVBFX0hBWkFSRBACEhYKEkdFT19UWVBFX0VNRVJHRU5DWRADEhwKGEdFT19UWVBFX0VOR0FHRU1FTlRfWk9ORRAFEhkKFUdFT19UWVBFX0NPTlRST0xfQVJFQRAGEhUKEUdFT19UWVBFX0JVTExTRVlFEAciBAgEEAQiBAgIEAgiBAgJEAlCggIKHGNvbS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjFCEUdlb2VudGl0eVB1YlByb3RvUAFaTWdoZS5hbmR1cmlsLmRldi9hbmR1cmlsL2FuZHVyaWxhcGlzLWdvL2FuZHVyaWwvZW50aXR5bWFuYWdlci92MTtlbnRpdHltYW5hZ2VyogIDQUVYqgIYQW5kdXJpbC5FbnRpdHltYW5hZ2VyLlYxygIYQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYx4gIkQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYxXEdQQk1ldGFkYXRh6gIaQW5kdXJpbDo6RW50aXR5bWFuYWdlcjo6VjFiBnByb3RvMw", [file_anduril_entitymanager_v1_location_pub, file_google_protobuf_wrappers]);

/**
 * Describes the message anduril.entitymanager.v1.GeoDetails.
 * Use `create(GeoDetailsSchema)` to create a new message.
 */
export const GeoDetailsSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.GeoShape.
 * Use `create(GeoShapeSchema)` to create a new message.
 */
export const GeoShapeSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.GeoPoint.
 * Use `create(GeoPointSchema)` to create a new message.
 */
export const GeoPointSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 2);

/**
 * Describes the message anduril.entitymanager.v1.GeoLine.
 * Use `create(GeoLineSchema)` to create a new message.
 */
export const GeoLineSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 3);

/**
 * Describes the message anduril.entitymanager.v1.GeoPolygon.
 * Use `create(GeoPolygonSchema)` to create a new message.
 */
export const GeoPolygonSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 4);

/**
 * Describes the message anduril.entitymanager.v1.GeoEllipse.
 * Use `create(GeoEllipseSchema)` to create a new message.
 */
export const GeoEllipseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 5);

/**
 * Describes the message anduril.entitymanager.v1.GeoEllipsoid.
 * Use `create(GeoEllipsoidSchema)` to create a new message.
 */
export const GeoEllipsoidSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 6);

/**
 * Describes the message anduril.entitymanager.v1.LinearRing.
 * Use `create(LinearRingSchema)` to create a new message.
 */
export const LinearRingSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 7);

/**
 * Describes the message anduril.entitymanager.v1.GeoPolygonPosition.
 * Use `create(GeoPolygonPositionSchema)` to create a new message.
 */
export const GeoPolygonPositionSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_geoentity_pub, 8);

/**
 * Describes the enum anduril.entitymanager.v1.GeoType.
 */
export const GeoTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_geoentity_pub, 0);

/**
 * The type of geo entity.
 *
 * @generated from enum anduril.entitymanager.v1.GeoType
 */
export const GeoType = /*@__PURE__*/
  tsEnum(GeoTypeSchema);

