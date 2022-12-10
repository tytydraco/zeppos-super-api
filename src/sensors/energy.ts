import { Callback, Listener } from "./callback"

export class Energy {
    private sensor = hmSensor.createSensor(hmSensor.id.CALORIE)

    getCalories(): number {
        return this.sensor.current
    }

    getTargetCalories(): number {
        return this.sensor.target
    }

    onCaloriesChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}