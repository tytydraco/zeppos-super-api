import { Text } from "./text"
import { Builder, Widget } from "./widget"

export class CyclicList extends Widget<CyclicList.Configuration> {
    build(builder: Builder = hmUI): void {
        const widgetId = this.config.type == CyclicList.Type.Text ? hmUI.widget.CYCLE_IMAGE_TEXT_LIST : hmUI.widget.CYCLE_LIST

        this.widget = builder.createWidget(widgetId, this.toNative(this.config))
    }

    private getDataArrayForItems(items: Array<string>): Array<{ text: string }> {
        return items.map((item) => ({ text: item }))
    }

    toNative(config: CyclicList.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_text_size: config.fontSize ?? 18,
            item_text_color: config.textColor ?? 0xffffff,
            item_bg_color: config.itemBackgroundColor ?? 0x000000,
            item_height: config.itemHeight ?? (config.height / 3),
            data_array: this.getDataArrayForItems(config.items),
            data_size: config.items.length,
            item_text_align_h: config.horizontalTextAlignment,
            item_text_align_v: config.verticalTextAlignment,
            item_click_func: (_: any, index: number) => config.onClick(index),
        }
    }

    setIndex(index: number) {
        this.widget.setProperty(hmUI.prop.LIST_TOP, { index: index })
    }
}

export namespace CyclicList {
    export enum Type {
        Text,
        Image,
    }

    export interface Configuration {
        type: Type,

        x: number,
        y: number,
        width: number,
        height: number,
        items: Array<string>,

        itemHeight?: number,
        itemBackgroundColor?: number,

        fontSize?: number,
        textColor?: number,
        horizontalTextAlignment?: Text.Alignment,
        verticalTextAlignment?: Text.Alignment,

        onClick?: (index: number) => void,
    }
}