export class FatBurning {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.FAT_BURRING);
    }
    getFatBurningMinutes() {
        return this.sensor.current;
    }
    getTargetFatBurningMinutes() {
        return this.sensor.target;
    }
    onFatBurningMinutesChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
