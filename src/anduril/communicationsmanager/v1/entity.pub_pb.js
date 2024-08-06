// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/communicationsmanager/v1/entity.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Statement } from "../../entitymanager/v1/filter.pub_pb.js";

/**
 * @generated from message anduril.communicationsmanager.v1.EntityIntegrationDetails
 */
export const EntityIntegrationDetails = proto3.makeMessageType(
  "anduril.communicationsmanager.v1.EntityIntegrationDetails",
  () => [
    { no: 1, name: "vendors", kind: "message", T: EntityDataVendor, repeated: true },
  ],
);

/**
 * @generated from message anduril.communicationsmanager.v1.EntityDataVendor
 */
export const EntityDataVendor = proto3.makeMessageType(
  "anduril.communicationsmanager.v1.EntityDataVendor",
  () => [
    { no: 1, name: "vendor_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data_type", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Message to contain entity integration rules
 *
 * @generated from message anduril.communicationsmanager.v1.EntityIntegrationRuleDetails
 */
export const EntityIntegrationRuleDetails = proto3.makeMessageType(
  "anduril.communicationsmanager.v1.EntityIntegrationRuleDetails",
  () => [
    { no: 1, name: "filter", kind: "message", T: Statement },
  ],
);

