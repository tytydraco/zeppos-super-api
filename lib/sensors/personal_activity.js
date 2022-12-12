export class PersonalActivity {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.PAI);
    }
    getDailyValue() {
        return this.sensor.dailypai;
    }
    getTotalValue() {
        return this.sensor.totalpai;
    }
    getWeeklyValues() {
        return [
            this.sensor.prepai0,
            this.sensor.prepai1,
            this.sensor.prepai2,
            this.sensor.prepai3,
            this.sensor.prepai4,
            this.sensor.prepai5,
            this.sensor.prepai6,
        ];
    }
}
