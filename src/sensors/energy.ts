export class Energy {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.CALORIE)
    }

    get calories(): number {
        return this.sensor.current
    }

    get targetCalories(): number {
        return this.sensor.target
    }

    onCaloriesChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}