// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/type/color.pub.proto (package anduril.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { FloatValue, proto3 } = require("@bufbuild/protobuf");

/**
 * @generated from message anduril.type.Color
 */
const Color = proto3.makeMessageType(
  "anduril.type.Color",
  () => [
    { no: 1, name: "red", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "green", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "blue", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "alpha", kind: "message", T: FloatValue },
  ],
);


exports.Color = Color;
