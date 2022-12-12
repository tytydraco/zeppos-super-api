import { Cancellable } from "../cancellable";
export declare class Standing {
    private sensor;
    getHoursStanding(): number;
    getTargetHoursStanding(): number;
    onHoursStandingChange(callback: () => void): Cancellable;
}
