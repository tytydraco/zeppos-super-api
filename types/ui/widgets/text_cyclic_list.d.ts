import { Text } from "./text";
import { Builder, Widget } from "./widget";
export declare class TextCyclicList extends Widget<TextCyclicList.Configuration> {
    build(builder?: Builder): void;
    toNative(config: TextCyclicList.Configuration): Record<string, any>;
}
export declare namespace TextCyclicList {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<string>;
        itemHeight: number;
        itemBackgroundColor: number;
        fontSize: number;
        textColor: number;
        horizontalAlignment?: Text.Alignment;
        verticalAlignment?: Text.Alignment;
        onClick?: (index: number) => void;
    }
}
