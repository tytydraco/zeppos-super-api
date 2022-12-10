export class Wearing {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.WEAR)
    }

    get status(): Wearing.Status {
        return this.sensor.current
    }

    onStatusChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
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