import { Callback, Listener } from "./callback"

export class Distance {
    private sensor = hmSensor.createSensor(hmSensor.id.DISTANCE)

    getDistance(): number {
        return this.sensor.current
    }

    onDistanceChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}