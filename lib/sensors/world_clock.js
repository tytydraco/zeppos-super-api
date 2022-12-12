export class WorldClock {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK);
        this.initialize();
    }
    getCount() {
        return this.sensor.getWorldClockCount();
    }
    getInfo(index) {
        const worldClockInfo = this.sensor.getWorldClockCountInfo(index);
        return {
            cityName: worldClockInfo.city,
            cityCode: worldClockInfo.cityCode,
            hour: worldClockInfo.hour,
            minute: worldClockInfo.minute,
            timeZoneHour: worldClockInfo.timeZoneHour,
            timeZoneMinute: worldClockInfo.timeZoneMinute,
        };
    }
    initialize() {
        this.sensor.init();
    }
    destroy() {
        this.sensor.uninit();
    }
}
