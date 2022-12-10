import { Callback, Listener } from "./callback"

export class BloodOxygen {
    private sensor = hmSensor.createSensor(hmSensor.id.SPO2)

    getBloodOxygen(): number {
        return this.sensor.current
    }

    getHourlyBloodOxygen(): Array<number> {
        return this.sensor.hourAvgofDay
    }

    getMostRecentTime(): Date {
        return new Date(this.sensor.time)
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

    onBloodOxygenChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
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