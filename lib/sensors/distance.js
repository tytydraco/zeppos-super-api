export class Distance {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.DISTANCE);
    }
    getDistance() {
        return this.sensor.current;
    }
    onDistanceChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
