export class Vibration {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.VIBRATE);
    }
    getPattern() {
        return this.sensor.scene;
    }
    setPattern(pattern) {
        this.sensor.scene = pattern;
    }
    start(pattern) {
        if (pattern != null)
            this.setPattern(pattern);
        this.sensor.start();
    }
    stop() {
        this.sensor.stop();
    }
}
(function (Vibration) {
    let Pattern;
    (function (Pattern) {
        Pattern[Pattern["LightShort"] = 23] = "LightShort";
        Pattern[Pattern["MediumShort"] = 24] = "MediumShort";
        Pattern[Pattern["HighShort"] = 25] = "HighShort";
        Pattern[Pattern["HighLong"] = 27] = "HighLong";
        Pattern[Pattern["HighMedium"] = 28] = "HighMedium";
        Pattern[Pattern["Notification"] = 0] = "Notification";
        Pattern[Pattern["PhoneCall"] = 1] = "PhoneCall";
        Pattern[Pattern["AlarmClock"] = 5] = "AlarmClock";
        Pattern[Pattern["Urgent"] = 9] = "Urgent";
    })(Pattern = Vibration.Pattern || (Vibration.Pattern = {}));
})(Vibration || (Vibration = {}));
