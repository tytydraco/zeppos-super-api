export class Battery {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.BATTERY);
    }
    getLevel() {
        return this.sensor.current;
    }
    onLevelChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
