export class Standing {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STAND)
    }

    get hoursStanding(): number {
        return this.sensor.current
    }

    get targetHoursStanding(): number {
        return this.sensor.target
    }

    onHoursStandingChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}