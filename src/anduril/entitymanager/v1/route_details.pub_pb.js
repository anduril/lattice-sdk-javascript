// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/route_details.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message anduril.entitymanager.v1.RouteDetails
 */
export const RouteDetails = proto3.makeMessageType(
  "anduril.entitymanager.v1.RouteDetails",
  () => [
    { no: 1, name: "destination_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "estimated_arrival_time", kind: "message", T: Timestamp },
  ],
);

