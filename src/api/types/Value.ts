//  This file was auto-generated from our API Definition.

import * as Lattice from "../index.js";

/**
 * The Value represents the information against which an entity field is evaluated. It is one of
 *  a fixed set of types, each of which correspond to specific comparators. See "ComparatorType"
 *  for the full list of Value <-> Comparator mappings.
 */
export interface Value {
    booleanType?: Lattice.BooleanType | undefined;
    numericType?: Lattice.NumericType | undefined;
    stringType?: Lattice.StringType | undefined;
    enumType?: Lattice.EnumType | undefined;
    timestampType?: Lattice.TimestampType | undefined;
    boundedShapeType?: Lattice.BoundedShapeType | undefined;
    positionType?: Lattice.PositionType | undefined;
    headingType?: Lattice.HeadingType | undefined;
    listType?: Lattice.ListType | undefined;
    rangeType?: Lattice.RangeType | undefined;
}
