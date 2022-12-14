import { Builder, Widget } from "./widget";
export declare class Rectangle extends Widget<Rectangle.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Rectangle.Configuration): Record<string, any>;
}
export declare namespace Rectangle {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        color?: number;
        filled?: boolean;
        radius?: number;
        angle?: number;
        borderThickness?: number;
    }
}
