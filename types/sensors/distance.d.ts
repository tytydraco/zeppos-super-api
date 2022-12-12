import { Cancellable } from "../cancellable";
export declare class Distance {
    private sensor;
    getDistance(): number;
    onDistanceChange(callback: () => void): Cancellable;
}
