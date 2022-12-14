import { Builder, Widget } from "./widget";
export declare class Circle extends Widget<Circle.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Circle.Configuration): Record<string, any>;
}
export declare namespace Circle {
    interface Configuration {
        x: number;
        y: number;
        radius: number;
        color?: number;
        alpha?: number;
    }
}
