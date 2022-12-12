import { Builder, Widget } from "../widget";
export declare class OutlinedRectangle extends Widget<OutlinedRectangle.Configuration> {
    build(builder?: Builder): void;
    toNative(config: OutlinedRectangle.Configuration): Record<string, any>;
}
export declare namespace OutlinedRectangle {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        color: number;
        radius?: number;
        lineWidth?: number;
        angle?: number;
    }
}
