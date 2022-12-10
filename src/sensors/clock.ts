import { Locale } from "../settings/locale";

export class Clock {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.TIME)
    }

    get millisecondsSinceEpoch(): number {
        return this.sensor.utc
    }

    get day(): number {
        return this.sensor.day
    }

    get month(): number {
        return this.sensor.month
    }

    get year(): number {
        return this.sensor.year
    }

    get dayOfTheWeek(): Clock.Weekday {
        return this.sensor.week
    }

    get hour(): number {
        return this.sensor.hour
    }

    get minute(): number {
        return this.sensor.minute
    }

    get second(): number {
        return this.sensor.second
    }

    get lunarDay(): number {
        return this.sensor.lunar_day
    }

    get lunarMonth(): number {
        return this.sensor.lunar_month
    }

    get lunarYear(): number {
        return this.sensor.lunar_year
    }

    get lunarFestival(): string {
        return this.sensor.lunar_festival
    }

    get lunarSolarTerm(): string {
        return this.sensor.lunar_solar_term
    }

    get gregorianHoliday(): String {
        return this.sensor.solar_festival
    }

    get timeFormat(): Locale.TimeFormat {
        return this.sensor.is24Hour ? Locale.TimeFormat.TwentyFour : Locale.TimeFormat.Twelve
    }

    getLunarCalendar(): Clock.LunarCalendar {
        const lunarMonthCalendar = this.sensor.getLunarMonthCalendar()
        return {
            monthDays: lunarMonthCalendar.day_count,
            content: lunarMonthCalendar.lunar_days_array,
        }
    }

    getHolidays(): string {
        return this.sensor.getShowFestival()
    }

    onEndOfMinute(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.MINUTEEND, callback)
    }

    onEndOfDay(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.DAYCHANGE, callback)
    }
}

export namespace Clock {
    export enum Weekday {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7,
    }

    export interface LunarCalendar {
        monthDays: number,
        content: Array<String>,
    }
}