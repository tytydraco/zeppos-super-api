import { Cancellable } from "../cancellable"

export class Energy {
    private sensor = hmSensor.createSensor(hmSensor.id.CALORIE)

    getCalories(): number {
        return this.sensor.current
    }

    getTargetCalories(): number {
        return this.sensor.target
    }

    onCaloriesChange(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}