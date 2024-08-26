// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/jadc2/thirdparty/v1/power.pub.proto (package anduril.tasks.jadc2.thirdparty.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum anduril.tasks.jadc2.thirdparty.v1.PowerState
 */
export declare enum PowerState {
  /**
   * @generated from enum value: POWER_STATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: POWER_STATE_ON = 1;
   */
  ON = 1,

  /**
   * @generated from enum value: POWER_STATE_OFF = 2;
   */
  OFF = 2,
}

/**
 * Set the power state of a robot. It is up to the robot to interpret the power state and act accordingly.
 *
 * @generated from message anduril.tasks.jadc2.thirdparty.v1.SetPowerState
 */
export declare class SetPowerState extends Message<SetPowerState> {
  /**
   * @generated from field: anduril.tasks.jadc2.thirdparty.v1.PowerState power_state = 1;
   */
  powerState: PowerState;

  constructor(data?: PartialMessage<SetPowerState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.jadc2.thirdparty.v1.SetPowerState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPowerState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPowerState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPowerState;

  static equals(a: SetPowerState | PlainMessage<SetPowerState> | undefined, b: SetPowerState | PlainMessage<SetPowerState> | undefined): boolean;
}
