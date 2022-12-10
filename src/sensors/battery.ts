export class Battery {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.BATTERY)
    }

    get level(): number {
        return this.sensor.current
    }

    onLevelChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}