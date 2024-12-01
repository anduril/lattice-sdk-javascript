// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/entitymanager/v1/supplies.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_classification_pub } from "./classification.pub_pb";
import { file_anduril_entitymanager_v1_options_pub } from "./options.pub_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/supplies.pub.proto.
 */
export const file_anduril_entitymanager_v1_supplies_pub = /*@__PURE__*/
  fileDesc("CithbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvc3VwcGxpZXMucHViLnByb3RvEhhhbmR1cmlsLmVudGl0eW1hbmFnZXIudjEieQoIU3VwcGxpZXMSOgoJbXVuaXRpb25zGAEgAygLMiIuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLk11bml0aW9uQgPIPgESMQoEZnVlbBgCIAMoCzIeLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5GdWVsQgPIPgEi+AEKCE11bml0aW9uEhMKC211bml0aW9uX2lkGAEgASgJEgwKBG5hbWUYAiABKAkSSAoSZG9kX2NvbmRpdGlvbl9jb2RlGAMgASgOMiouYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkRPRENvbmRpdGlvbkNvZGVIABIWCg5xdWFudGl0eV91bml0cxgEIAEoDRJFChNkYXRhX2NsYXNzaWZpY2F0aW9uGAUgASgLMiguYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkNsYXNzaWZpY2F0aW9uEhMKC2RhdGFfc291cmNlGAYgASgJQgsKCWNvbmRpdGlvbiKjAgoERnVlbBIUCgdmdWVsX2lkGAEgASgJQgPQPgESDAoEbmFtZRgCIAEoCRIxCg1yZXBvcnRlZF9kYXRlGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIWCg5hbW91bnRfZ2FsbG9ucxgEIAEoDRInCh9tYXhfYXV0aG9yaXplZF9jYXBhY2l0eV9nYWxsb25zGAUgASgNEicKH29wZXJhdGlvbmFsX3JlcXVpcmVtZW50X2dhbGxvbnMYBiABKA0SRQoTZGF0YV9jbGFzc2lmaWNhdGlvbhgHIAEoCzIoLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5DbGFzc2lmaWNhdGlvbhITCgtkYXRhX3NvdXJjZRgIIAEoCSq6BAoQRE9EQ29uZGl0aW9uQ29kZRIeChpET0RfQ09ORElUSU9OX0NPREVfSU5WQUxJRBAAEhgKFERPRF9DT05ESVRJT05fQ09ERV9BEAESGAoURE9EX0NPTkRJVElPTl9DT0RFX0IQAhIYChRET0RfQ09ORElUSU9OX0NPREVfQxADEhgKFERPRF9DT05ESVRJT05fQ09ERV9EEAQSGAoURE9EX0NPTkRJVElPTl9DT0RFX0UQBRIYChRET0RfQ09ORElUSU9OX0NPREVfRhAGEhgKFERPRF9DT05ESVRJT05fQ09ERV9HEAcSGAoURE9EX0NPTkRJVElPTl9DT0RFX0gQCBIYChRET0RfQ09ORElUSU9OX0NPREVfURAJEhgKFERPRF9DT05ESVRJT05fQ09ERV9TEAoSGAoURE9EX0NPTkRJVElPTl9DT0RFX0oQCxIYChRET0RfQ09ORElUSU9OX0NPREVfSxAMEhgKFERPRF9DT05ESVRJT05fQ09ERV9MEA0SGAoURE9EX0NPTkRJVElPTl9DT0RFX00QDhIYChRET0RfQ09ORElUSU9OX0NPREVfThAPEhgKFERPRF9DT05ESVRJT05fQ09ERV9QEBASGAoURE9EX0NPTkRJVElPTl9DT0RFX1IQERIYChRET0RfQ09ORElUSU9OX0NPREVfVBASEhgKFERPRF9DT05ESVRJT05fQ09ERV9WEBMSGAoURE9EX0NPTkRJVElPTl9DT0RFX1gQFEKBAgocY29tLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MUIQU3VwcGxpZXNQdWJQcm90b1ABWk1naGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL2VudGl0eW1hbmFnZXIvdjE7ZW50aXR5bWFuYWdlcqICA0FFWKoCGEFuZHVyaWwuRW50aXR5bWFuYWdlci5WMcoCGEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMeICJEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMVxHUEJNZXRhZGF0YeoCGkFuZHVyaWw6OkVudGl0eW1hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_entitymanager_v1_classification_pub, file_anduril_entitymanager_v1_options_pub, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.entitymanager.v1.Supplies.
 * Use `create(SuppliesSchema)` to create a new message.
 */
export const SuppliesSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_supplies_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.Munition.
 * Use `create(MunitionSchema)` to create a new message.
 */
export const MunitionSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_supplies_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.Fuel.
 * Use `create(FuelSchema)` to create a new message.
 */
export const FuelSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_supplies_pub, 2);

/**
 * Describes the enum anduril.entitymanager.v1.DODConditionCode.
 */
export const DODConditionCodeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_supplies_pub, 0);

/**
 * DOD Condition Codes as documented: DLM 4000.25, Volume 2, April 09, 2022 Change 14. located at https://www.dla.mil/Defense-Data-Standards/Publications/Appendices/
 * Please refer to the DLM reference for more details about each condition code
 *
 * @generated from enum anduril.entitymanager.v1.DODConditionCode
 */
export const DODConditionCode = /*@__PURE__*/
  tsEnum(DODConditionCodeSchema);

