import { Text } from "./text"
import { Builder, Widget } from "./widget"

export class TextCyclicList extends Widget<TextCyclicList.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.CYCLE_IMAGE_TEXT_LIST, this.toNative(this.config))
    }

    toNative(config: TextCyclicList.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_text_size: config.fontSize,
            item_text_color: config.textColor,
            item_bg_color: config.itemBackgroundColor,
            item_height: config.itemHeight,
            data_array: config.items,
            data_size: config.items.length,
            item_text_align_h: config.horizontalAlignment,
            item_text_align_v: config.verticalAlignment,
            item_click_func: (_: any, index: number) => config.onClick(index),
        }
    }
}

export namespace TextCyclicList {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        items: Array<string>,
        itemHeight: number,
        itemBackgroundColor: number,
        fontSize: number,
        textColor: number,
        horizontalAlignment?: Text.Alignment,
        verticalAlignment?: Text.Alignment,
        onClick?: (index: number) => void,
    }
}