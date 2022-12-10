import { Callback, Listener } from "../callback"

export class Wearing {
    private sensor = hmSensor.createSensor(hmSensor.id.WEAR)

    getStatus(): Wearing.Status {
        return this.sensor.current
    }

    onStatusChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}

export namespace Wearing {
    export enum Status {
        NotWearing = 0,
        Wearing = 1,
        InMotion = 2,
        Unsure = 3,
    }
}