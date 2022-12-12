import { Widget } from "./widget";
export class TextCyclicList extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.CYCLE_IMAGE_TEXT_LIST, this.toNative(this.config));
    }
    toNative(config) {
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
            item_click_func: (_, index) => config.onClick(index),
        };
    }
}
