//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A Schedule associated with this entity
 */
export interface Schedule {
    /** expression that represents this schedule's "ON" state */
    windows?: Lattice.CronWindow[] | undefined;
    /** A unique identifier for this schedule. */
    scheduleId?: string | undefined;
    /** The schedule type */
    scheduleType?: Schedule.ScheduleType | undefined;
}

export namespace Schedule {
    /** The schedule type */
    export const ScheduleType = {
        ScheduleTypeInvalid: "SCHEDULE_TYPE_INVALID",
        ScheduleTypeZoneEnabled: "SCHEDULE_TYPE_ZONE_ENABLED",
        ScheduleTypeZoneTempEnabled: "SCHEDULE_TYPE_ZONE_TEMP_ENABLED",
    } as const;
    export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType];
}
