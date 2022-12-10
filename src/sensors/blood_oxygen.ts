export class BloodOxygen {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.SPO2)
    }

    get bloodOxygen(): number {
        return this.sensor.current
    }

    get hourlyBloodOxygen(): Array<number> {
        return this.sensor.hourAvgofDay
    }

    get mostRecentTime(): Date {
        return new Date(this.sensor.time)
    }

    get mostRecentStatus(): BloodOxygen.Status {
        return this.sensor.retcode
    }

    startMeasuring() {
        this.sensor.start()
    }

    stopMeasuring() {
        this.sensor.stop()
    }

    onBloodOxygenChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}

export namespace BloodOxygen {
    export enum Status {
        Invalid,
        Continue,
        Success,
        Failure,
        NotWearing,
        Timeout,
        InvalidWearing,
        InvalidSignal,
        LowBloodOxygen,
        HighBloodOxygen,
        InvalidMeasurement,
    }
}