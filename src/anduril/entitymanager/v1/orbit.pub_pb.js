// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/orbit.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");
const { OrbitMeanElements } = require("../../type/orbit.pub_pb.js");

/**
 * @generated from message anduril.entitymanager.v1.Orbit
 */
const Orbit = proto3.makeMessageType(
  "anduril.entitymanager.v1.Orbit",
  () => [
    { no: 1, name: "orbit_mean_elements", kind: "message", T: OrbitMeanElements },
  ],
);


exports.Orbit = Orbit;
