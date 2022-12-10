export class PersonalActivity {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.PAI)
    }

    get dailyValue(): number {
        return this.sensor.dailypai
    }

    get totalValue(): number {
        return this.sensor.totalpai
    }

    get weeklyValues(): Array<number> {
        return [
            this.sensor.prepai0,
            this.sensor.prepai1,
            this.sensor.prepai2,
            this.sensor.prepai3,
            this.sensor.prepai4,
            this.sensor.prepai5,
            this.sensor.prepai6,
        ]
    }
}