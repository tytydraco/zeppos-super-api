import { Cancellable } from "../cancellable";
export declare class Pedometer {
    private sensor;
    getSteps(): number;
    getTargetSteps(): number;
    onStepsChange(callback: () => void): Cancellable;
}
