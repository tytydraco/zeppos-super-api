export class Vibration {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.VIBRATE)
    }

    get pattern(): Vibration.Pattern {
        return this.sensor.scene
    }

    set pattern(pattern: Vibration.Pattern) {
        this.sensor.scene = pattern
    }

    start(pattern?: Vibration.Pattern) {
        if (pattern != null)
            this.pattern = pattern

        this.sensor.start()
    }

    stop() {
        this.sensor.stop()
    }
}

export namespace Vibration {
    export enum Pattern {
        LightShort = 23,
        MediumShort = 24,
        HighShort = 25,

        HighLong = 27,
        HighMedium = 28,

        Notification = 0,
        PhoneCall = 1,
        AlarmClock = 5,
        Urgent = 9,
    }
}