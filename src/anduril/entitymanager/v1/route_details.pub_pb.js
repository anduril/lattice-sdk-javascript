// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/route_details.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3, Timestamp } = require("@bufbuild/protobuf");

/**
 * @generated from message anduril.entitymanager.v1.RouteDetails
 */
const RouteDetails = proto3.makeMessageType(
  "anduril.entitymanager.v1.RouteDetails",
  () => [
    { no: 1, name: "destination_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "estimated_arrival_time", kind: "message", T: Timestamp },
  ],
);


exports.RouteDetails = RouteDetails;