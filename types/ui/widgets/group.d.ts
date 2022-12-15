import { Widget } from "./widget";
export declare class Group extends Widget<Group.Configuration> {
    build(builder?: Internal): void;
    toNative(config: Group.Configuration): Record<string, any>;
}
export declare namespace Group {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        children?: Array<Widget<any>>;
    }
}
