export class BodyTemperature {
    private sensor = hmSensor.createSensor(hmSensor.id.BODY_TEMP)

    getTemperature(): number {
        return this.sensor.current
    }

    getMostRecentTime(): Date {
        const date = new Date()
        date.setMilliseconds(date.getMilliseconds() - (this.sensor.timeinterval * 1000))
        return date
    }
}