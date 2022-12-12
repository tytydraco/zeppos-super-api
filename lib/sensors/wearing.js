export class Wearing {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.WEAR);
    }
    getStatus() {
        return this.sensor.current;
    }
    onStatusChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
(function (Wearing) {
    let Status;
    (function (Status) {
        Status[Status["NotWearing"] = 0] = "NotWearing";
        Status[Status["Wearing"] = 1] = "Wearing";
        Status[Status["InMotion"] = 2] = "InMotion";
        Status[Status["Unsure"] = 3] = "Unsure";
    })(Status = Wearing.Status || (Wearing.Status = {}));
})(Wearing || (Wearing = {}));
