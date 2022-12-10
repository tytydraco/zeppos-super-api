export class FatBurning {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.FAT_BURRING)
    }

    get fatBurningMinutes(): number {
        return this.sensor.current
    }

    get targetFatBurningMinutes(): number {
        return this.sensor.target
    }

    onFatBurningMinutesChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}