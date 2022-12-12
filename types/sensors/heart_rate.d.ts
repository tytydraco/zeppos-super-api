import { Cancellable } from "../cancellable";
export declare class HeartRate {
    private sensor;
    getBpm(): number;
    getLastBpm(): number;
    getTodaysBpm(): Array<number>;
    onBpmChange(callback: () => void): Cancellable;
    onLastBpmChange(callback: () => void): Cancellable;
}
