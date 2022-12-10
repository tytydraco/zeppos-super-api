export class PersonalActivity {
    private sensor = hmSensor.createSensor(hmSensor.id.PAI)

    getDailyValue(): number {
        return this.sensor.dailypai
    }

    getTotalValue(): number {
        return this.sensor.totalpai
    }

    getWeeklyValues(): Array<number> {
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