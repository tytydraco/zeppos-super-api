import { Builder, Widget } from "./widget";
export declare class DatePicker extends Widget<DatePicker.Configuration> {
    build(builder?: Builder): void;
    toNative(config: DatePicker.Configuration): Record<string, any>;
    getDate(): Date;
}
export declare namespace DatePicker {
    interface Configuration {
        x: number;
        y: number;
        width?: number;
        initialDate?: Date;
    }
}
