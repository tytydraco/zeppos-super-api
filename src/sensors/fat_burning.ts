import { Callback, Listener } from "../callback"

export class FatBurning {
    private sensor = hmSensor.createSensor(hmSensor.id.FAT_BURRING)

    getFatBurningMinutes(): number {
        return this.sensor.current
    }

    getTargetFatBurningMinutes(): number {
        return this.sensor.target
    }

    onFatBurningMinutesChange(callback: Callback): Listener {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}