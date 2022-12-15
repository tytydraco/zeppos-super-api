import { Cancellable } from "../cancellable"

export class Battery {
    private sensor = hmSensor.createSensor(hmSensor.id.BATTERY)

    getLevel(): number {
        return this.sensor.current
    }

    onLevelChange(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}