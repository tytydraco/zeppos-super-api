import { Widget } from "./widget";
export declare class Image extends Widget<Image.Configuration> {
    build(builder?: Internal): void;
    toNative(config: Image.Configuration): Record<string, any>;
}
export declare namespace Image {
    interface Configuration {
        x: number;
        y: number;
        path: string;
        width?: number;
        height?: number;
        xOffset?: number;
        yOffset?: number;
        rotationAngle?: number;
        rotationCenterX?: number;
        rotationCenterY?: number;
    }
}
