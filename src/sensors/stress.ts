import { Callback, Listener } from "../callback"

export class Stress {
    private sensor = hmSensor.createSensor(hmSensor.id.STRESS)

    getStress(): number {
        return this.sensor.current
    }

    /* TODO: check if ms? Convert to date? */
    getMostRecentTime(): Date {
        return new Date(this.sensor.time)
    }

    onStressChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}