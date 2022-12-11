import { Widget } from "./widget"

export class ImageCyclicList extends Widget<ImageCyclicList.Configuration> {
    constructor(config: ImageCyclicList.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.CYCLE_LIST, this.toNative(config))
    }

    private getDataArrayForItems(items: Array<string>): Array<{ text: string }> {
        return items.map((item) => ({ text: item }))
    }

    toNative(config: ImageCyclicList.Configuration): Record<string, any> {
        return {
            item_bg_color: config.itemBackgroundColor,
            item_height: config.itemHeight,
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            data_array: this.getDataArrayForItems(config.items),
            data_size: config.items.length,
            item_click_func: (_: any, index: number) => config.onClick(index),
        }
    }

    setIndex(index: number) {
        this.widget.setProperty(hmUI.prop.LIST_TOP, { index: index })
    }
}

export namespace ImageCyclicList {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        items: Array<string>,
        itemHeight: number,
        itemBackgroundColor: number,
        onClick?: (index: number) => void,
    }
}