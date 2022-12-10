export class BodyTemperature {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.BODY_TEMP)
    }

    get temperature(): number {
        return this.sensor.current
    }

    /* TODO: check if ms? Convert to date? */
    get mostRecentTime(): Date {
        const date = new Date()
        date.setMilliseconds(date.getMilliseconds() - this.sensor.timeinterval)
        return date
    }
}