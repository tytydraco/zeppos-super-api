export class HeartRate {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.HEART)
    }

    get bpm(): number {
        return this.sensor.current
    }

    get lastBpm(): number {
        return this.sensor.last
    }

    get todaysBpm(): Array<number> {
        return this.sensor.today
    }

    /* TODO: destroy and a way to destroy all */
    onBpmChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CURRENT, callback)
    }

    onLastBpmChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.LAST, callback)
    }
}