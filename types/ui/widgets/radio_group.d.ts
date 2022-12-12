import { StateButton } from "./state_button";
import { Builder, Widget } from "./widget";
export declare class RadioGroup extends Widget<RadioGroup.Configuration> {
    build(builder?: Builder): void;
    toNative(config: RadioGroup.Configuration): Record<string, any>;
    check(button: StateButton): void;
    uncheck(button: StateButton): void;
}
export declare namespace RadioGroup {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        imagePath: string;
        selectedImagePath: string;
        buttons: Array<StateButton>;
        onClick?: (index: number, checked: boolean) => void;
    }
}
