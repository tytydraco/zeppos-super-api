export class BloodOxygen {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.SPO2);
    }
    getBloodOxygen() {
        return this.sensor.current;
    }
    getHourlyBloodOxygen() {
        return this.sensor.hourAvgofDay;
    }
    getMostRecentTime() {
        return new Date(this.sensor.time * 1000);
    }
    getMostRecentStatus() {
        return this.sensor.retcode;
    }
    startMeasuring() {
        this.sensor.start();
    }
    stopMeasuring() {
        this.sensor.stop();
    }
    onBloodOxygenChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
(function (BloodOxygen) {
    let Status;
    (function (Status) {
        Status[Status["Success"] = 2] = "Success";
        Status[Status["Continue"] = 1] = "Continue";
        Status[Status["Failure"] = 3] = "Failure";
        Status[Status["Invalid"] = 0] = "Invalid";
        Status[Status["InvalidWearing"] = 6] = "InvalidWearing";
        Status[Status["InvalidSignal"] = 7] = "InvalidSignal";
        Status[Status["InvalidMeasurement"] = 10] = "InvalidMeasurement";
        Status[Status["NotWearing"] = 4] = "NotWearing";
        Status[Status["Timeout"] = 5] = "Timeout";
        Status[Status["LowBloodOxygen"] = 8] = "LowBloodOxygen";
        Status[Status["HighBloodOxygen"] = 9] = "HighBloodOxygen";
    })(Status = BloodOxygen.Status || (BloodOxygen.Status = {}));
})(BloodOxygen || (BloodOxygen = {}));
