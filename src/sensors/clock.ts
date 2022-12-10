import { Locale } from "../settings/locale";
import { Cancellable } from "../cancellable";

export class Clock {
    private sensor = hmSensor.createSensor(hmSensor.id.TIME)

    getMillisecondsSinceEpoch(): number {
        return this.sensor.utc
    }

    getDay(): number {
        return this.sensor.day
    }

    getMonth(): number {
        return this.sensor.month
    }

    getYear(): number {
        return this.sensor.year
    }

    getDayOfTheWeek(): Clock.Weekday {
        return this.sensor.week
    }

    getHour(): number {
        return this.sensor.hour
    }

    getMinute(): number {
        return this.sensor.minute
    }

    getSecond(): number {
        return this.sensor.second
    }

    getLunarDay(): number {
        return this.sensor.lunar_day
    }

    getLunarMonth(): number {
        return this.sensor.lunar_month
    }

    getLunarYear(): number {
        return this.sensor.lunar_year
    }

    getLunarFestival(): string {
        return this.sensor.lunar_festival
    }

    getLunarSolarTerm(): string {
        return this.sensor.lunar_solar_term
    }

    getGregorianHoliday(): String {
        return this.sensor.solar_festival
    }

    getTimeFormat(): Locale.TimeFormat {
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

    onEndOfMinute(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.MINUTEEND, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.MINUTEEND, callback)
            }
        }
    }

    onEndOfDay(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.DAYCHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.DAYCHANGE, callback)
            }
        }
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