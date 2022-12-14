import { Builder, Widget } from "./widget";
export declare class Arc extends Widget<Arc.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Arc.Configuration): Record<string, any>;
}
export declare namespace Arc {
    interface Configuration {
        x: number;
        y: number;
        radius: number;
        width?: number;
        height?: number;
        startAngle?: number;
        endAngle?: number;
        lineWidth?: number;
        color?: number;
    }
}
