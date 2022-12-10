export class Distance {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.DISTANCE)
    }

    get distance(): number {
        return this.sensor.current
    }

    onDistanceChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}