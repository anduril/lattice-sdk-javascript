// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/type/geometry.pub.proto (package anduril.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { LLA } from "./coords.pub_pb.js";

/**
 * A 2d grid with binary values for each grid cell.
 *
 * @generated from message anduril.type.Grid
 */
export declare class Grid extends Message<Grid> {
  /**
   * The bottom left extent of the 2d grid. This represents the
   * farthest corner on the grid cell, not the center of the
   * grid cell.
   *
   * @generated from field: anduril.type.LLA bottom_left_pos = 1;
   */
  bottomLeftPos?: LLA;

  /**
   * The top right extent of the 2d grid. This represents the
   * farthest corner on the grid cell, not the center of the
   * grid cell.
   *
   * @generated from field: anduril.type.LLA top_right_pos = 2;
   */
  topRightPos?: LLA;

  /**
   * The width of the grid in number of cells.
   *
   * @generated from field: uint32 grid_width = 3;
   */
  gridWidth: number;

  /**
   * The height of the grid in number of cells.
   *
   * @generated from field: uint32 grid_height = 4;
   */
  gridHeight: number;

  /**
   * Stores the cell values. Each byte contains 8 bits representing
   * binary values of cells. Cells are unravelled in row-major order,
   * with the first cell located at the top-left corner of the grid.
   * In a single byte, the smallest bit represents the left most cell.
   *
   * @generated from field: bytes cell_values = 5;
   */
  cellValues: Uint8Array;

  constructor(data?: PartialMessage<Grid>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.type.Grid";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Grid;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Grid;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Grid;

  static equals(a: Grid | PlainMessage<Grid> | undefined, b: Grid | PlainMessage<Grid> | undefined): boolean;
}
