export class Standing {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.STAND);
    }
    getHoursStanding() {
        return this.sensor.current;
    }
    getTargetHoursStanding() {
        return this.sensor.target;
    }
    onHoursStandingChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
