import { Builder, Widget } from "./widget";
export declare class Progress extends Widget<Progress.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Progress.Configuration): Record<string, any>;
}
export declare namespace Progress {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        startAngle: number;
        endAngle: number;
        lineWidth: number;
        color: number;
    }
}
