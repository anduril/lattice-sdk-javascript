// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/tasks/ads/thirdparty/v1/formation.pub.proto (package anduril.tasks.ads.thirdparty.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Objective } from "../../../v2/objective.pub_pb.js";

/**
 * Describes the file anduril/tasks/ads/thirdparty/v1/formation.pub.proto.
 */
export declare const file_anduril_tasks_ads_thirdparty_v1_formation_pub: GenFile;

/**
 * Maps to a Line formation of assets with a speed. This is a simple line with two LLAs.
 *
 * @generated from message anduril.tasks.ads.thirdparty.v1.LineFormation
 */
export declare type LineFormation = Message<"anduril.tasks.ads.thirdparty.v1.LineFormation"> & {
  /**
   * Line start
   *
   * @generated from field: anduril.tasks.v2.Objective line_start = 1;
   */
  lineStart?: Objective;

  /**
   * Line end
   *
   * @generated from field: anduril.tasks.v2.Objective line_end = 2;
   */
  lineEnd?: Objective;

  /**
   * Speed in Meters/Second to get in Line Formation
   *
   * @generated from field: google.protobuf.DoubleValue surface_speed_ms = 3;
   */
  surfaceSpeedMs?: number;
};

/**
 * Describes the message anduril.tasks.ads.thirdparty.v1.LineFormation.
 * Use `create(LineFormationSchema)` to create a new message.
 */
export declare const LineFormationSchema: GenMessage<LineFormation>;

