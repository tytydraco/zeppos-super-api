export declare class WorldClock {
    private sensor;
    constructor();
    getCount(): number;
    getInfo(index: number): WorldClock.Info;
    initialize(): void;
    destroy(): void;
}
export declare namespace WorldClock {
    interface Info {
        cityName: string;
        cityCode: string;
        hour: number;
        minute: number;
        timeZoneHour: number;
        timeZoneMinute: number;
    }
}
