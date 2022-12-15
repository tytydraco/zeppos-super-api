import { Cancellable } from "../../cancellable";
export declare abstract class Widget<T> {
    readonly config: T;
    widget: Internal;
    constructor(config: T);
    abstract build(builder: Internal): void;
    update(config: T): void;
    enable(): void;
    disable(): void;
    delete(): void;
    onDrag(callback: (x: number, y: number) => void): Cancellable;
    onPress(callback: (x: number, y: number) => void): Cancellable;
    onRelease(callback: (x: number, y: number) => void): Cancellable;
    protected abstract toNative(config: T): Record<string, any>;
}
