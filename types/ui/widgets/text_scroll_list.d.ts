import { Builder, Widget } from "./widget";
export declare class TextScrollList extends Widget<TextScrollList.Configuration> {
    private getDataArrayForItems;
    build(builder?: Builder): void;
    toNative(config: TextScrollList.Configuration): Record<string, any>;
    updateItems(items: Array<string>): void;
}
export declare namespace TextScrollList {
    interface ItemConfig {
        x: number;
        y: number;
        width: number;
        height: number;
        text: string;
        color?: number;
        fontSize?: number;
    }
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<string>;
        itemConfig: ItemConfig;
        itemHeight: number;
        itemBackgroundColor: number;
        itemBackgroundRadius: number;
        itemSpacing?: number;
        resetPositionOnUpdate?: boolean;
        onClick?: (index: number) => void;
    }
}
