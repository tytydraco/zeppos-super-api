export declare class Sleep {
    private sensor;
    refresh(): void;
    getSleepStages(): Array<Sleep.SleepStage>;
    getHeartRateByMinutes(): Array<number>;
    getTotalTime(): number;
    getRecentInfo(): Sleep.RecentInfo;
}
export declare namespace Sleep {
    enum Stage {
        Awake = 7,
        RapidEyeMovement = 8,
        Light = 4,
        Deep = 5
    }
    interface SleepStage {
        stage: Stage;
        startMinutesFromMidnight: number;
        endMinutesFromMidnight: number;
    }
    interface RecentInfo {
        score: number;
        deepSleepMinutes: number;
        startMinutesFromMidnight: number;
        endMinutesFromMidnight: number;
    }
}
