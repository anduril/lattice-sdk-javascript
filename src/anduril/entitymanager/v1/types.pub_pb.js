// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/types.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file anduril/entitymanager/v1/types.pub.proto.
 */
export const file_anduril_entitymanager_v1_types_pub = /*@__PURE__*/
  fileDesc("CihhbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvdHlwZXMucHViLnByb3RvEhhhbmR1cmlsLmVudGl0eW1hbmFnZXIudjEiNwoLVUludDMyUmFuZ2USEwoLbG93ZXJfYm91bmQYASABKA0SEwoLdXBwZXJfYm91bmQYAiABKA0iNgoKRmxvYXRSYW5nZRITCgtsb3dlcl9ib3VuZBgBIAEoAhITCgt1cHBlcl9ib3VuZBgCIAEoAiqYBQoJQWx0SWRUeXBlEhcKE0FMVF9JRF9UWVBFX0lOVkFMSUQQABIaChZBTFRfSURfVFlQRV9UUkFDS19JRF8yEAESGgoWQUxUX0lEX1RZUEVfVFJBQ0tfSURfMRAMEhYKEkFMVF9JRF9UWVBFX1NQSV9JRBACEh8KG0FMVF9JRF9UWVBFX05JVEZfRklMRV9USVRMRRADEiMKH0FMVF9JRF9UWVBFX1RSQUNLX1JFUE9fQUxFUlRfSUQQBBIYChRBTFRfSURfVFlQRV9BU1NFVF9JRBAFEiMKH0FMVF9JRF9UWVBFX0xJTksxNl9UUkFDS19OVU1CRVIQBhIZChVBTFRfSURfVFlQRV9MSU5LMTZfSlUQBxIfChtBTFRfSURfVFlQRV9OQ0NUX01FU1NBR0VfSUQQCBIYChRBTFRfSURfVFlQRV9DQUxMU0lHThAJEhcKE0FMVF9JRF9UWVBFX01NU0lfSUQQChIXChNBTFRfSURfVFlQRV9WTUZfVVJOEAsSFgoSQUxUX0lEX1RZUEVfSU1PX0lEEA0SIQodQUxUX0lEX1RZUEVfVk1GX1RBUkdFVF9OVU1CRVIQDhIdChlBTFRfSURfVFlQRV9TRVJJQUxfTlVNQkVSEA8SHwobQUxUX0lEX1RZUEVfUkVHSVNUUkFUSU9OX0lEEBASFwoTQUxUX0lEX1RZUEVfSUJTX0dJRBAREhYKEkFMVF9JRF9UWVBFX0RPREFBQxASEhMKD0FMVF9JRF9UWVBFX1VJQxATEhwKGEFMVF9JRF9UWVBFX05PUkFEX0NBVF9JRBAUEhsKF0FMVF9JRF9UWVBFX1VOT09TQV9OQU1FEBcSGQoVQUxUX0lEX1RZUEVfVU5PT1NBX0lEEBgqogEKCFRlbXBsYXRlEhQKEFRFTVBMQVRFX0lOVkFMSUQQABISCg5URU1QTEFURV9UUkFDSxABEiUKIVRFTVBMQVRFX1NFTlNPUl9QT0lOVF9PRl9JTlRFUkVTVBACEhIKDlRFTVBMQVRFX0FTU0VUEAMSEAoMVEVNUExBVEVfR0VPEAQSHwobVEVNUExBVEVfU0lHTkFMX09GX0lOVEVSRVNUEAUqyAEKDk92ZXJyaWRlU3RhdHVzEhsKF09WRVJSSURFX1NUQVRVU19JTlZBTElEEAASGwoXT1ZFUlJJREVfU1RBVFVTX0FQUExJRUQQARIbChdPVkVSUklERV9TVEFUVVNfUEVORElORxACEhsKF09WRVJSSURFX1NUQVRVU19USU1FT1VUEAMSHAoYT1ZFUlJJREVfU1RBVFVTX1JFSkVDVEVEEAQSJAogT1ZFUlJJREVfU1RBVFVTX0RFTEVUSU9OX1BFTkRJTkcQBSpgCgxPdmVycmlkZVR5cGUSGQoVT1ZFUlJJREVfVFlQRV9JTlZBTElEEAASFgoST1ZFUlJJREVfVFlQRV9MSVZFEAESHQoZT1ZFUlJJREVfVFlQRV9QT1NUX0VYUElSWRACQv4BChxjb20uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxQg1UeXBlc1B1YlByb3RvUAFaTWdoZS5hbmR1cmlsLmRldi9hbmR1cmlsL2FuZHVyaWxhcGlzLWdvL2FuZHVyaWwvZW50aXR5bWFuYWdlci92MTtlbnRpdHltYW5hZ2VyogIDQUVYqgIYQW5kdXJpbC5FbnRpdHltYW5hZ2VyLlYxygIYQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYx4gIkQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYxXEdQQk1ldGFkYXRh6gIaQW5kdXJpbDo6RW50aXR5bWFuYWdlcjo6VjFiBnByb3RvMw");

/**
 * Describes the message anduril.entitymanager.v1.UInt32Range.
 * Use `create(UInt32RangeSchema)` to create a new message.
 */
export const UInt32RangeSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_types_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.FloatRange.
 * Use `create(FloatRangeSchema)` to create a new message.
 */
export const FloatRangeSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_types_pub, 1);

/**
 * Describes the enum anduril.entitymanager.v1.AltIdType.
 */
export const AltIdTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_types_pub, 0);

/**
 * The type of alternate id.
 *
 * @generated from enum anduril.entitymanager.v1.AltIdType
 */
export const AltIdType = /*@__PURE__*/
  tsEnum(AltIdTypeSchema);

/**
 * Describes the enum anduril.entitymanager.v1.Template.
 */
export const TemplateSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_types_pub, 1);

/**
 * Set of possible templates used when creating an entity.
 * This impacts minimum required component sets and can be used by edge systems that need to distinguish.
 *
 * @generated from enum anduril.entitymanager.v1.Template
 */
export const Template = /*@__PURE__*/
  tsEnum(TemplateSchema);

/**
 * Describes the enum anduril.entitymanager.v1.OverrideStatus.
 */
export const OverrideStatusSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_types_pub, 2);

/**
 * The state of an override.
 *
 * @generated from enum anduril.entitymanager.v1.OverrideStatus
 */
export const OverrideStatus = /*@__PURE__*/
  tsEnum(OverrideStatusSchema);

/**
 * Describes the enum anduril.entitymanager.v1.OverrideType.
 */
export const OverrideTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_types_pub, 3);

/**
 * @generated from enum anduril.entitymanager.v1.OverrideType
 */
export const OverrideType = /*@__PURE__*/
  tsEnum(OverrideTypeSchema);

