import { Cancellable } from "../cancellable";
export declare class FatBurning {
    private sensor;
    getFatBurningMinutes(): number;
    getTargetFatBurningMinutes(): number;
    onFatBurningMinutesChange(callback: () => void): Cancellable;
}
