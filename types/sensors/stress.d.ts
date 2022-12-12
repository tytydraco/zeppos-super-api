import { Cancellable } from "../cancellable";
export declare class Stress {
    private sensor;
    getStress(): number;
    getMostRecentTime(): Date;
    onStressChange(callback: () => void): Cancellable;
}
