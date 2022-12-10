export class BodyTemperature {
    private sensor = hmSensor.createSensor(hmSensor.id.BODY_TEMP)

    getTemperature(): number {
        return this.sensor.current
    }

    /* TODO: check if ms? Convert to date? */
    getMostRecentTime(): Date {
        const date = new Date()
        date.setMilliseconds(date.getMilliseconds() - this.sensor.timeinterval)
        return date
    }
}