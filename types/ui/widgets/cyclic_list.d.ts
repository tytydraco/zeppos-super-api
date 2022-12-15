import { Text } from "./text";
import { Widget } from "./widget";
export declare class CyclicList extends Widget<CyclicList.Configuration> {
    build(builder?: Internal): void;
    private getDataArrayForItems;
    toNative(config: CyclicList.Configuration): Record<string, any>;
    setIndex(index: number): void;
}
export declare namespace CyclicList {
    enum Type {
        Text = 0,
        Image = 1
    }
    interface Configuration {
        type: Type;
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<string>;
        itemHeight?: number;
        itemBackgroundColor?: number;
        fontSize?: number;
        textColor?: number;
        horizontalTextAlignment?: Text.Alignment;
        verticalTextAlignment?: Text.Alignment;
        onClick?: (index: number) => void;
    }
}
