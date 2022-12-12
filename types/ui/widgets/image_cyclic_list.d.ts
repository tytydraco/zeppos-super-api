import { Builder, Widget } from "./widget";
export declare class ImageCyclicList extends Widget<ImageCyclicList.Configuration> {
    build(builder?: Builder): void;
    private getDataArrayForItems;
    toNative(config: ImageCyclicList.Configuration): Record<string, any>;
    setIndex(index: number): void;
}
export declare namespace ImageCyclicList {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<string>;
        itemHeight: number;
        itemBackgroundColor: number;
        onClick?: (index: number) => void;
    }
}
