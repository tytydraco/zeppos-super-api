import { Widget } from "./widget";
export declare class Button extends Widget<Button.Configuration> {
    build(builder?: Internal): void;
    toNative(config: Button.Configuration): Record<string, any>;
}
export declare namespace Button {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        text?: number;
        imagePath?: string;
        pressedImagePath?: string;
        color?: number;
        pressedColor?: number;
        textColor?: number;
        fontSize?: number;
        alpha?: number;
        radius?: number;
        onClick?: () => void;
    }
}
