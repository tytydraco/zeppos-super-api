import { Clock } from "./clock";
export class Sleep {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.SLEEP);
    }
    refresh() {
        this.sensor.updateInfo();
    }
    getSleepStages() {
        const sleepStageData = this.sensor.getSleepStageData();
        /* From the start of today. */
        const clock = new Clock();
        const startOfToday = new Date(clock.getDate().getTime());
        startOfToday.setHours(0, 0, 0, 0);
        return sleepStageData.map((data) => ({
            stage: data.model,
            startMinutesFromMidnight: data.start,
            endMinutesFromMidnight: data.end,
        }));
    }
    getHeartRateByMinutes() {
        return this.sensor.getSleepHrData();
    }
    getTotalTime() {
        return this.sensor.getTotalTime();
    }
    getRecentInfo() {
        const basicInfo = this.sensor.getBasicInfo();
        /* From the start of today. */
        const clock = new Clock();
        const startOfToday = new Date(clock.getDate().getTime());
        startOfToday.setHours(0, 0, 0, 0);
        return {
            score: basicInfo.score,
            deepSleepMinutes: basicInfo.deepMin,
            startMinutesFromMidnight: basicInfo.startTime,
            endMinutesFromMidnight: basicInfo.endTime,
        };
    }
}
(function (Sleep) {
    let Stage;
    (function (Stage) {
        Stage[Stage["Awake"] = 7] = "Awake";
        Stage[Stage["RapidEyeMovement"] = 8] = "RapidEyeMovement";
        Stage[Stage["Light"] = 4] = "Light";
        Stage[Stage["Deep"] = 5] = "Deep";
    })(Stage = Sleep.Stage || (Sleep.Stage = {}));
})(Sleep || (Sleep = {}));
