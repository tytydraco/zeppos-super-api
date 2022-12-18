import { Clock } from "./clock"

export class Sleep {
    private sensor = hmSensor.createSensor(hmSensor.id.SLEEP)

    refresh() {
        this.sensor.updateInfo()
    }

    getSleepStages(): Array<Sleep.SleepStage> {
        const sleepStageData: Array<any> = this.sensor.getSleepStageData()

        /* From the start of today. */
        const clock = new Clock()
        const startOfToday = new Date(clock.getDate().getTime())
        startOfToday.setHours(0, 0, 0, 0)

        return sleepStageData.map((data) => ({
            stage: data.model,
            startMinutesFromMidnight: data.start,
            endMinutesFromMidnight: data.end,
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
        const clock = new Clock()
        const startOfToday = new Date(clock.getDate().getTime())
        startOfToday.setHours(0, 0, 0, 0)

        return {
            score: basicInfo.score,
            deepSleepMinutes: basicInfo.deepMin,
            startMinutesFromMidnight: basicInfo.startTime,
            endMinutesFromMidnight: basicInfo.endTime,
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
        startMinutesFromMidnight: number,
        endMinutesFromMidnight: number,
    }

    export interface RecentInfo {
        score: number,
        deepSleepMinutes: number,
        startMinutesFromMidnight: number,
        endMinutesFromMidnight: number,
    }
}