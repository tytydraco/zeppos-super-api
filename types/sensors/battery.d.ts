import { Cancellable } from "../cancellable";
export declare class Battery {
    private sensor;
    getLevel(): number;
    onLevelChange(callback: () => void): Cancellable;
}
