import { Locale } from "../settings/locale";
import { Cancellable } from "../cancellable";
export declare class Clock {
    private sensor;
    getDate(): Date;
    getMillisecondsSinceEpoch(): number;
    getDay(): number;
    getMonth(): number;
    getYear(): number;
    getDayOfTheWeek(): Clock.Weekday;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    getLunarDay(): number;
    getLunarMonth(): number;
    getLunarYear(): number;
    getLunarFestival(): string;
    getLunarSolarTerm(): string;
    getGregorianHoliday(): String;
    getTimeFormat(): Locale.TimeFormat;
    getLunarCalendar(): Clock.LunarCalendar;
    getHolidays(): string;
    onEndOfMinute(callback: () => void): Cancellable;
    onEndOfDay(callback: () => void): Cancellable;
}
export declare namespace Clock {
    enum Weekday {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7
    }
    interface LunarCalendar {
        monthDays: number;
        content: Array<String>;
    }
}
