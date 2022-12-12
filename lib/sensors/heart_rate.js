export class HeartRate {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.HEART);
    }
    getBpm() {
        return this.sensor.current;
    }
    getLastBpm() {
        return this.sensor.last;
    }
    getTodaysBpm() {
        return this.sensor.today;
    }
    onBpmChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CURRENT, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CURRENT, callback);
            }
        };
    }
    onLastBpmChange(callback) {
        this.sensor.addEventListener(hmSensor.event.LAST, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.LAST, callback);
            }
        };
    }
}
