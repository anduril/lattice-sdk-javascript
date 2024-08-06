// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/blobs/v1/filter.pub.proto (package anduril.blobs.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");

/**
 * If match and not_match are both populated, both must evaluate to true for Statement to evaluate to true.
 * If match is not populated, only not_match is used. If not_match is empty, only match is used.
 * If match is not populated and not_match is empty, Statement evaluates to true.
 *
 * @generated from message anduril.blobs.v1.Statement
 */
const Statement = proto3.makeMessageType(
  "anduril.blobs.v1.Statement",
  () => [
    { no: 1, name: "match", kind: "message", T: FieldMatcher },
    { no: 2, name: "not_match", kind: "message", T: FieldMatcher, repeated: true },
  ],
);

/**
 * All populated fields must be an exact match (logical AND).
 *
 * @generated from message anduril.blobs.v1.FieldMatcher
 */
const FieldMatcher = proto3.makeMessageType(
  "anduril.blobs.v1.FieldMatcher",
  () => [
    { no: 1, name: "integration_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "mime_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


exports.Statement = Statement;
exports.FieldMatcher = FieldMatcher;
