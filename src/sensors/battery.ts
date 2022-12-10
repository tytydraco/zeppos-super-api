import { Callback, Listener } from "../callback"

export class Battery {
    private sensor = hmSensor.createSensor(hmSensor.id.BATTERY)

    getLevel(): number {
        return this.sensor.current
    }

    onLevelChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}