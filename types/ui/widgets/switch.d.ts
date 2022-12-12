import { Builder, Widget } from "./widget";
export declare class Switch extends Widget<Switch.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Switch.Configuration): Record<string, any>;
    getChecked(): boolean;
    check(): void;
    uncheck(): void;
}
export declare namespace Switch {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        imagePath: string;
        backgroundImagePath: string;
        selectedBackgroundImagePath: string;
        xOffset: number;
        selectedXOffset: number;
        yOffset?: number;
        defaultChecked?: boolean;
        onChecked: (checked: boolean) => void;
    }
}
