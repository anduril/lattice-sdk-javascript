// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/entitymanager/v1/options.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from extension: bool overridable = 1001;
 */
export const overridable = proto3.makeExtension<FieldOptions, boolean>(
  "anduril.entitymanager.v1.overridable", 
  FieldOptions, 
  { no: 1001, kind: "scalar", T: 8 /* ScalarType.BOOL */ },
);

/**
 * When flagged on a field in a repeated component, provides an indication that the
 * the repeated component should be treated as a set. No components sharing
 * identical 'componentIdentifier' field should appear in the set
 *
 * @generated from extension: bool componentIdentifier = 1002;
 */
export const componentIdentifier = proto3.makeExtension<FieldOptions, boolean>(
  "anduril.entitymanager.v1.componentIdentifier", 
  FieldOptions, 
  { no: 1002, kind: "scalar", T: 8 /* ScalarType.BOOL */ },
);
