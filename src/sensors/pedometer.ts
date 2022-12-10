export class Pedometer {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STEP)
    }

    get steps(): number {
        return this.sensor.current
    }

    get targetSteps(): number {
        return this.sensor.target
    }

    onStepsChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}