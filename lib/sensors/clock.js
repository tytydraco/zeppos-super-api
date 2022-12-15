import { Locale } from "../settings/locale";
export class Clock {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.TIME);
    }
    getMillisecondsSinceEpoch() {
        return this.sensor.utc;
    }
    getDay() {
        return this.sensor.day;
    }
    getMonth() {
        return this.sensor.month;
    }
    getYear() {
        return this.sensor.year;
    }
    getDayOfTheWeek() {
        return this.sensor.week;
    }
    getHour() {
        return this.sensor.hour;
    }
    getMinute() {
        return this.sensor.minute;
    }
    getSecond() {
        return this.sensor.second;
    }
    getLunarDay() {
        return this.sensor.lunar_day;
    }
    getLunarMonth() {
        return this.sensor.lunar_month;
    }
    getLunarYear() {
        return this.sensor.lunar_year;
    }
    getLunarFestival() {
        return this.sensor.lunar_festival;
    }
    getLunarSolarTerm() {
        return this.sensor.lunar_solar_term;
    }
    getGregorianHoliday() {
        return this.sensor.solar_festival;
    }
    getTimeFormat() {
        return this.sensor.is24Hour ? Locale.TimeFormat.TwentyFour : Locale.TimeFormat.Twelve;
    }
    getLunarCalendar() {
        const lunarMonthCalendar = this.sensor.getLunarMonthCalendar();
        return {
            monthDays: lunarMonthCalendar.day_count,
            content: lunarMonthCalendar.lunar_days_array,
        };
    }
    getHolidays() {
        return this.sensor.getShowFestival();
    }
    onEndOfMinute(callback) {
        this.sensor.addEventListener(hmSensor.event.MINUTEEND, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.MINUTEEND, callback);
            }
        };
    }
    onEndOfDay(callback) {
        this.sensor.addEventListener(hmSensor.event.DAYCHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.DAYCHANGE, callback);
            }
        };
    }
}
(function (Clock) {
    let Weekday;
    (function (Weekday) {
        Weekday[Weekday["Monday"] = 1] = "Monday";
        Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
        Weekday[Weekday["Thursday"] = 4] = "Thursday";
        Weekday[Weekday["Friday"] = 5] = "Friday";
        Weekday[Weekday["Saturday"] = 6] = "Saturday";
        Weekday[Weekday["Sunday"] = 7] = "Sunday";
    })(Weekday = Clock.Weekday || (Clock.Weekday = {}));
})(Clock || (Clock = {}));
