export declare class Sleep {
    private sensor;
    refresh(): void;
    private getDateAfterMinutes;
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
        startTime: Date;
        endTime: Date;
    }
    interface RecentInfo {
        score: number;
        deepSleepMinutes: number;
        startTime: Date;
        endTime: Date;
    }
}
