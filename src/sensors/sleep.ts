export class Sleep {
    private sensor = hmSensor.createSensor(hmSensor.id.SLEEP)

    refresh() {
        this.sensor.updateInfo()
    }

    private getDateAfterMinutes(date: Date, minutes: number): Date {
        const newDate = new Date(date.getTime())
        newDate.setMinutes(newDate.getMinutes() + minutes)

        return newDate
    }

    getSleepStages(): Array<Sleep.SleepStage> {
        const sleepStageData: Array<any> = this.sensor.getSleepStageData()

        /* From the start of today. */
        const startOfToday = new Date()
        startOfToday.setHours(0, 0, 0, 0)

        return sleepStageData.map((data) => ({
            stage: data.model,
            startTime: this.getDateAfterMinutes(startOfToday, data.start),
            endTime: this.getDateAfterMinutes(startOfToday, data.end),
        }))
    }

    getHeartRateByMinutes(): Array<number> {
        return this.sensor.getSleepHrData()
    }

    getTotalTime(): number {
        return this.sensor.getTotalTime()
    }

    getRecentInfo(): Sleep.RecentInfo {
        const basicInfo = this.sensor.getBasicInfo()

        /* From the start of today. */
        const startOfToday = new Date()
        startOfToday.setHours(0, 0, 0, 0)

        return {
            score: basicInfo.score,
            deepSleepMinutes: basicInfo.deepMin,
            startTime: this.getDateAfterMinutes(startOfToday, basicInfo.startTime),
            endTime: this.getDateAfterMinutes(startOfToday, basicInfo.endTime),
        }
    }
}

export namespace Sleep {
    export enum Stage {
        Awake = 7,
        RapidEyeMovement = 8,
        Light = 4,
        Deep = 5,
    }

    export interface SleepStage {
        stage: Stage,
        startTime: Date,
        endTime: Date,
    }

    export interface RecentInfo {
        score: number,
        deepSleepMinutes: number,
        startTime: Date,
        endTime: Date,
    }
}