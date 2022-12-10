export class WorldClock {
    private sensor = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK)

    constructor() {
        this.initialize()
    }

    getCount(): number {
        return this.sensor.getWorldClockCount()
    }

    getInfo(index: number): WorldClock.Info {
        const worldClockInfo = this.sensor.getWorldClockCountInfo(index)
        return {
            cityName: worldClockInfo.city,
            cityCode: worldClockInfo.cityCode,
            hour: worldClockInfo.hour,
            minute: worldClockInfo.minute,
            timeZoneHour: worldClockInfo.timeZoneHour,
            timeZoneMinute: worldClockInfo.timeZoneMinute,
        }
    }

    initialize() {
        this.sensor.init()
    }

    destroy() {
        this.sensor.uninit()
    }
}

export namespace WorldClock {
    export interface Info {
        cityName: string,
        cityCode: string,
        hour: number,
        minute: number,
        timeZoneHour: number, /* TODO: figure out what these actually do */
        timeZoneMinute: number,
    }
}