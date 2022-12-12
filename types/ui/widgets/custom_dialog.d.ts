import { Text } from "./text";
import { Builder, Widget } from "./widget";
export declare class CustomDialog extends Widget<CustomDialog.Configuration> {
    build(builder?: Builder): void;
    toNative(config: CustomDialog.Configuration): Record<string, any>;
    show(): void;
    hide(): void;
}
export declare namespace CustomDialog {
    interface ButtonConfiguration {
        text?: string;
        textColor?: number;
        color?: number;
        pressedColor?: number;
        imagePath?: string;
        pressedImagePath?: string;
        onClick?: () => void;
    }
    interface Configuration {
        text: string;
        fontSize?: number;
        textColor?: number;
        backgroundColor?: number;
        textHorizontalAlignment: Text.Alignment;
        textHorizontalVertical: Text.Alignment;
        confirmButtonConfig: ButtonConfiguration;
        cancelButtonConfig: ButtonConfiguration;
    }
}
