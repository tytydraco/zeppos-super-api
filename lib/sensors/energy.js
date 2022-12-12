export class Energy {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.CALORIE);
    }
    getCalories() {
        return this.sensor.current;
    }
    getTargetCalories() {
        return this.sensor.target;
    }
    onCaloriesChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
