export class Sleep {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.SLEEP);
    }
    refresh() {
        this.sensor.updateInfo();
    }
    getDateAfterMinutes(date, minutes) {
        const newDate = new Date(date.getTime());
        newDate.setMinutes(newDate.getMinutes() + minutes);
        return newDate;
    }
    getSleepStages() {
        const sleepStageData = this.sensor.getSleepStageData();
        /* From the start of today. */
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        return sleepStageData.map((data) => ({
            stage: data.model,
            startTime: this.getDateAfterMinutes(startOfToday, data.start),
            endTime: this.getDateAfterMinutes(startOfToday, data.end),
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
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        return {
            score: basicInfo.score,
            deepSleepMinutes: basicInfo.deepMin,
            startTime: this.getDateAfterMinutes(startOfToday, basicInfo.startTime),
            endTime: this.getDateAfterMinutes(startOfToday, basicInfo.endTime),
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
