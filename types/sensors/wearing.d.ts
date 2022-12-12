import { Cancellable } from "../cancellable";
export declare class Wearing {
    private sensor;
    getStatus(): Wearing.Status;
    onStatusChange(callback: () => void): Cancellable;
}
export declare namespace Wearing {
    enum Status {
        NotWearing = 0,
        Wearing = 1,
        InMotion = 2,
        Unsure = 3
    }
}
