// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/power.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/entitymanager/v1/power.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_power_pub: GenFile;

/**
 * Represents the state of power sources connected to this entity.
 *
 * @generated from message anduril.entitymanager.v1.PowerState
 */
export declare type PowerState = Message<"anduril.entitymanager.v1.PowerState"> & {
  /**
   * This is a map where the key is a unique id of the power source and the value is additional information about the
   * power source.
   *
   * @generated from field: map<string, anduril.entitymanager.v1.PowerSource> source_id_to_state = 5;
   */
  sourceIdToState: { [key: string]: PowerSource };
};

/**
 * Describes the message anduril.entitymanager.v1.PowerState.
 * Use `create(PowerStateSchema)` to create a new message.
 */
export declare const PowerStateSchema: GenMessage<PowerState>;

/**
 * Represents the state of a single power source that is connected to this entity.
 *
 * @generated from message anduril.entitymanager.v1.PowerSource
 */
export declare type PowerSource = Message<"anduril.entitymanager.v1.PowerSource"> & {
  /**
   * Status of the power source.
   *
   * @generated from field: anduril.entitymanager.v1.PowerStatus power_status = 1;
   */
  powerStatus: PowerStatus;

  /**
   * Used to determine the type of power source.
   *
   * @generated from field: anduril.entitymanager.v1.PowerType power_type = 2;
   */
  powerType: PowerType;

  /**
   * Power level of the system. If absent, the power level is assumed to be unknown.
   *
   * @generated from field: anduril.entitymanager.v1.PowerLevel power_level = 3;
   */
  powerLevel?: PowerLevel;

  /**
   * Set of human-readable messages with status of the power system. Typically this would be used in an error state
   * to provide additional error information. This can also be used for informational messages.
   *
   * @generated from field: repeated string messages = 4;
   */
  messages: string[];

  /**
   * Whether the power source is offloadable. If the value is missing (as opposed to false) then the entity does not
   * report whether the power source is offloadable.
   *
   * @generated from field: google.protobuf.BoolValue offloadable = 5;
   */
  offloadable?: boolean;
};

/**
 * Describes the message anduril.entitymanager.v1.PowerSource.
 * Use `create(PowerSourceSchema)` to create a new message.
 */
export declare const PowerSourceSchema: GenMessage<PowerSource>;

/**
 * Represents the power level of a system.
 *
 * @generated from message anduril.entitymanager.v1.PowerLevel
 */
export declare type PowerLevel = Message<"anduril.entitymanager.v1.PowerLevel"> & {
  /**
   * Total power capacity of the system.
   *
   * @generated from field: float capacity = 1;
   */
  capacity: number;

  /**
   * Remaining power capacity of the system.
   *
   * @generated from field: float remaining = 2;
   */
  remaining: number;

  /**
   * Percent of power remaining.
   *
   * @generated from field: float percent_remaining = 3;
   */
  percentRemaining: number;

  /**
   * Voltage of the power source subsystem, as reported by the power source. If the source does not report this value
   * this field will be null.
   *
   * @generated from field: google.protobuf.DoubleValue voltage = 4;
   */
  voltage?: number;

  /**
   * Current in amps of the power source subsystem, as reported by the power source. If the source does not
   * report this value this field will be null.
   *
   * @generated from field: google.protobuf.DoubleValue current_amps = 5;
   */
  currentAmps?: number;

  /**
   * Estimated minutes until empty. Calculated with consumption at the moment, as reported by the power source. If the source does not
   * report this value this field will be null.
   *
   * @generated from field: google.protobuf.DoubleValue run_time_to_empty_mins = 6;
   */
  runTimeToEmptyMins?: number;

  /**
   * Fuel consumption rate in liters per second.
   *
   * @generated from field: google.protobuf.DoubleValue consumption_rate_l_per_s = 7;
   */
  consumptionRateLPerS?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.PowerLevel.
 * Use `create(PowerLevelSchema)` to create a new message.
 */
export declare const PowerLevelSchema: GenMessage<PowerLevel>;

/**
 * @generated from enum anduril.entitymanager.v1.PowerStatus
 */
export enum PowerStatus {
  /**
   * @generated from enum value: POWER_STATUS_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Indeterminate condition of whether the power system is present or absent.
   *
   * @generated from enum value: POWER_STATUS_UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Power system is not configured/present. This is considered a normal/expected condition, as opposed to the
   * system is expected to be present but is missing.
   *
   * @generated from enum value: POWER_STATUS_NOT_PRESENT = 2;
   */
  NOT_PRESENT = 2,

  /**
   * Power system is present and operating normally.
   *
   * @generated from enum value: POWER_STATUS_OPERATING = 3;
   */
  OPERATING = 3,

  /**
   * Power system is present and is in an expected disabled state. For example, if the generator was shut off for
   * operational reasons.
   *
   * @generated from enum value: POWER_STATUS_DISABLED = 4;
   */
  DISABLED = 4,

  /**
   * Power system is non-functional.
   *
   * @generated from enum value: POWER_STATUS_ERROR = 5;
   */
  ERROR = 5,
}

/**
 * Describes the enum anduril.entitymanager.v1.PowerStatus.
 */
export declare const PowerStatusSchema: GenEnum<PowerStatus>;

/**
 * @generated from enum anduril.entitymanager.v1.PowerType
 */
export enum PowerType {
  /**
   * @generated from enum value: POWER_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: POWER_TYPE_UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * @generated from enum value: POWER_TYPE_GAS = 2;
   */
  GAS = 2,

  /**
   * @generated from enum value: POWER_TYPE_BATTERY = 3;
   */
  BATTERY = 3,
}

/**
 * Describes the enum anduril.entitymanager.v1.PowerType.
 */
export declare const PowerTypeSchema: GenEnum<PowerType>;

