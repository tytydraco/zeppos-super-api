import { Cancellable } from "../cancellable";
export declare class BloodOxygen {
    private sensor;
    getBloodOxygen(): number;
    getHourlyBloodOxygen(): Array<number>;
    getMostRecentTime(): Date;
    getMostRecentStatus(): BloodOxygen.Status;
    startMeasuring(): void;
    stopMeasuring(): void;
    onBloodOxygenChange(callback: () => void): Cancellable;
}
export declare namespace BloodOxygen {
    enum Status {
        Success = 2,
        Continue = 1,
        Failure = 3,
        Invalid = 0,
        InvalidWearing = 6,
        InvalidSignal = 7,
        InvalidMeasurement = 10,
        NotWearing = 4,
        Timeout = 5,
        LowBloodOxygen = 8,
        HighBloodOxygen = 9
    }
}
