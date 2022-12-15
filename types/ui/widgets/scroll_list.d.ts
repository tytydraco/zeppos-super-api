import { Widget } from "./widget";
export declare class ScrollList extends Widget<ScrollList.Configuration> {
    private getDataArrayForItems;
    build(builder?: Internal): void;
    toNative(config: ScrollList.Configuration): Record<string, any>;
    updateItems(items: Array<string>): void;
}
export declare namespace ScrollList {
    enum Type {
        Text = 0,
        Image = 1
    }
    interface ItemConfig {
        x: number;
        y: number;
        width?: number;
        height?: number;
        text?: string;
        textColor?: number;
        fontSize?: number;
    }
    interface Configuration {
        type: Type;
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<string>;
        itemConfig: ItemConfig;
        itemBackgroundColor?: number;
        itemBackgroundRadius?: number;
        itemHeight?: number;
        itemSpacing?: number;
        resetPositionOnUpdate?: boolean;
        onClick?: (index: number) => void;
    }
}
