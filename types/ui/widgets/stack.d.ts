import { Builder, Widget } from "./widget";
export declare class Stack extends Widget<Stack.Configuration> {
    build(builder?: Builder): void;
    private getTotalSize;
    private getChildSize;
    private getChildOffset;
    private addChildOffset;
    toNative(config: Stack.Configuration): Record<string, any>;
}
export declare namespace Stack {
    enum Direction {
        Vertical = 0,
        Horizontal = 1
    }
    interface Configuration {
        direction: Direction;
        x: number;
        y: number;
        width?: number;
        height?: number;
        children: Array<Widget<any>>;
    }
}
