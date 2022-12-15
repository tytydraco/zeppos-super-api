import { Cancellable } from "../cancellable"

export class BloodOxygen {
    private sensor = hmSensor.createSensor(hmSensor.id.SPO2)

    getBloodOxygen(): number {
        return this.sensor.current
    }

    getHourlyBloodOxygen(): Array<number> {
        return this.sensor.hourAvgofDay
    }

    getMostRecentTime(): Date {
        return new Date(this.sensor.time * 1000)
    }

    getMostRecentStatus(): BloodOxygen.Status {
        return this.sensor.retcode
    }

    startMeasuring() {
        this.sensor.start()
    }

    stopMeasuring() {
        this.sensor.stop()
    }

    onBloodOxygenChange(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}

export namespace BloodOxygen {
    export enum Status {
        Success = 2,
        Continue = 1,

        Failure = 3,
        Invalid = 0,
        InvalidWearing = 6,
        InvalidSignal = 7,
        InvalidMeasurement = 10,
        NotWearing = 4,
        Timeout = 5,

        LowBloodOxygen = 8,
        HighBloodOxygen = 9,
    }
}