// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/prototype.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { Any, proto3 } = require("@bufbuild/protobuf");

/**
 * @generated from message anduril.entitymanager.v1.PrototypeExtensions
 */
const PrototypeExtensions = proto3.makeMessageType(
  "anduril.entitymanager.v1.PrototypeExtensions",
  () => [
    { no: 1, name: "extensions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Any} },
  ],
);


exports.PrototypeExtensions = PrototypeExtensions;
