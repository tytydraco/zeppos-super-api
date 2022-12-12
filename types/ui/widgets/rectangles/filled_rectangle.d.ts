import { Builder, Widget } from "../widget";
export declare class FilledRectangle extends Widget<FilledRectangle.Configuration> {
    build(builder?: Builder): void;
    toNative(config: FilledRectangle.Configuration): Record<string, any>;
}
export declare namespace FilledRectangle {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        color: number;
        radius?: number;
        angle?: number;
    }
}
