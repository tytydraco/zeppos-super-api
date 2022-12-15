export class Pedometer {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STEP);
    }
    getSteps() {
        return this.sensor.current;
    }
    getTargetSteps() {
        return this.sensor.target;
    }
    onStepsChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
