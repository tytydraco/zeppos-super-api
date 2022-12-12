/// <reference types="types" />
export interface Builder {
    createWidget(widgetType: number, options: HmWearableProgram.DeviceSide.HmUI.HmUIWidgetOptions): HmWearableProgram.DeviceSide.HmUI.IHmUIWidget;
}
export declare abstract class Widget<T> {
    readonly config: T;
    widget: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget;
    constructor(config: T);
    abstract build(builder: Builder): void;
    update(config: T): void;
    enable(): void;
    disable(): void;
    delete(): void;
    protected abstract toNative(config: T): Record<string, any>;
}
