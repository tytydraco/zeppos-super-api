import { Callback, Listener } from "./callback"

export class HeartRate {
    private sensor = hmSensor.createSensor(hmSensor.id.HEART)

    getBpm(): number {
        return this.sensor.current
    }

    getLastBpm(): number {
        return this.sensor.last
    }

    getTodaysBpm(): Array<number> {
        return this.sensor.today
    }

    /* TODO: destroy and a way to destroy all */
    onBpmChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CURRENT, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CURRENT, callback)
            }
        }
    }

    onLastBpmChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.LAST, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.LAST, callback)
            }
        }
    }
}