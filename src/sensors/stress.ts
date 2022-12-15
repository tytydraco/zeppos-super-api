import { Cancellable } from "../cancellable"

export class Stress {
    private sensor = hmSensor.createSensor(hmSensor.id.STRESS)

    getStress(): number {
        return this.sensor.current
    }

    getMostRecentTime(): Date {
        return new Date(this.sensor.time * 1000)
    }

    onStressChange(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}