// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/options.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Extension } from "@bufbuild/protobuf";
import { FieldOptions } from "@bufbuild/protobuf";

/**
 * @generated from extension: bool overridable = 1001;
 */
export declare const overridable: Extension<FieldOptions, boolean>;

/**
 * When flagged on a field in a repeated component, provides an indication that the
 * the repeated component should be treated as a set. No components sharing
 * identical 'componentIdentifier' field should appear in the set
 *
 * @generated from extension: bool componentIdentifier = 1002;
 */
export declare const componentIdentifier: Extension<FieldOptions, boolean>;

