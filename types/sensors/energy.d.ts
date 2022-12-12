import { Cancellable } from "../cancellable";
export declare class Energy {
    private sensor;
    getCalories(): number;
    getTargetCalories(): number;
    onCaloriesChange(callback: () => void): Cancellable;
}
