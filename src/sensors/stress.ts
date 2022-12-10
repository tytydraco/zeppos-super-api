export class Stress {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STRESS)
    }

    get stress(): number {
        return this.sensor.current
    }

    /* TODO: check if ms? Convert to date? */
    get mostRecentTime(): Date {
        return new Date(this.sensor.time)
    }

    onStressChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}