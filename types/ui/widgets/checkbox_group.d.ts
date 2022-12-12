import { StateButton } from "./state_button";
import { Builder, Widget } from "./widget";
export declare class CheckBoxGroup extends Widget<CheckBoxGroup.Configuration> {
    build(builder?: Builder): void;
    toNative(config: CheckBoxGroup.Configuration): Record<string, any>;
    check(button: StateButton): void;
    uncheck(button: StateButton): void;
}
export declare namespace CheckBoxGroup {
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
