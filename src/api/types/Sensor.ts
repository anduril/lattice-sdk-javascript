//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Individual sensor configuration.
 */
export interface Sensor {
    /** This generally is used to indicate a specific type at a more detailed granularity. E.g. COMInt or LWIR */
    sensorId?: string | undefined;
    operationalState?: Sensor.OperationalState | undefined;
    /** The type of sensor */
    sensorType?: Sensor.SensorType | undefined;
    /** A human readable description of the sensor */
    sensorDescription?: string | undefined;
    /** RF configuration details of the sensor */
    rfConfiguraton?: Lattice.RfConfiguration | undefined;
    /** Time of the latest detection from the sensor */
    lastDetectionTimestamp?: string | undefined;
    /** Multiple fields of view for a single sensor component */
    fieldsOfView?: Lattice.FieldOfView[] | undefined;
}

export namespace Sensor {
    export const OperationalState = {
        OperationalStateInvalid: "OPERATIONAL_STATE_INVALID",
        OperationalStateOff: "OPERATIONAL_STATE_OFF",
        OperationalStateNonOperational: "OPERATIONAL_STATE_NON_OPERATIONAL",
        OperationalStateDegraded: "OPERATIONAL_STATE_DEGRADED",
        OperationalStateOperational: "OPERATIONAL_STATE_OPERATIONAL",
        OperationalStateDenied: "OPERATIONAL_STATE_DENIED",
    } as const;
    export type OperationalState = (typeof OperationalState)[keyof typeof OperationalState];
    /** The type of sensor */
    export const SensorType = {
        SensorTypeInvalid: "SENSOR_TYPE_INVALID",
        SensorTypeRadar: "SENSOR_TYPE_RADAR",
        SensorTypeCamera: "SENSOR_TYPE_CAMERA",
        SensorTypeTransponder: "SENSOR_TYPE_TRANSPONDER",
        SensorTypeRf: "SENSOR_TYPE_RF",
        SensorTypeGps: "SENSOR_TYPE_GPS",
        SensorTypePtuPos: "SENSOR_TYPE_PTU_POS",
        SensorTypePerimeter: "SENSOR_TYPE_PERIMETER",
        SensorTypeSonar: "SENSOR_TYPE_SONAR",
    } as const;
    export type SensorType = (typeof SensorType)[keyof typeof SensorType];
}
