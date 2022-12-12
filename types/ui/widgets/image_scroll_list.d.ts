import { Builder, Widget } from "./widget";
export declare class ImageScrollList extends Widget<ImageScrollList.Configuration> {
    private getDataArrayForItems;
    build(builder?: Builder): void;
    toNative(config: ImageScrollList.Configuration): Record<string, any>;
    updateItems(items: Array<string>): void;
}
export declare namespace ImageScrollList {
    interface ItemConfig {
        x: number;
        y: number;
        width: number;
        height: number;
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
