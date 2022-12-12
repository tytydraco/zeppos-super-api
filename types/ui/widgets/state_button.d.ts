import { Builder, Widget } from "./widget";
export declare class StateButton extends Widget<StateButton.Configuration> {
    build(builder?: Builder): void;
    toNative(config: StateButton.Configuration): Record<string, any>;
    getChecked(): boolean;
}
export declare namespace StateButton {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
    }
}
