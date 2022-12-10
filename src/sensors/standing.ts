import { Callback, Listener } from "../callback"

export class Standing {
    private sensor = hmSensor.createSensor(hmSensor.id.STAND)

    getHoursStanding(): number {
        return this.sensor.current
    }

    getTargetHoursStanding(): number {
        return this.sensor.target
    }

    onHoursStandingChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}