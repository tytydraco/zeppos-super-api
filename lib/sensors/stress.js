export class Stress {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STRESS);
    }
    getStress() {
        return this.sensor.current;
    }
    getMostRecentTime() {
        return new Date(this.sensor.time * 1000);
    }
    onStressChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
