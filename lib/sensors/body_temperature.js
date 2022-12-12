export class BodyTemperature {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.BODY_TEMP);
    }
    getTemperature() {
        return this.sensor.current;
    }
    getMostRecentTime() {
        const date = new Date();
        date.setMilliseconds(date.getMilliseconds() - (this.sensor.timeinterval * 1000));
        return date;
    }
}
