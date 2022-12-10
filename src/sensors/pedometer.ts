import { Callback, Listener } from "./callback"

export class Pedometer {
    private sensor = hmSensor.createSensor(hmSensor.id.STEP)

    getSteps(): number {
        return this.sensor.current
    }

    getTargetSteps(): number {
        return this.sensor.target
    }

    onStepsChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}