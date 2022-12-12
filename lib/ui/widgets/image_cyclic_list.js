import { Widget } from "./widget";
export class ImageCyclicList extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.CYCLE_LIST, this.toNative(this.config));
    }
    getDataArrayForItems(items) {
        return items.map((item) => ({ text: item }));
    }
    toNative(config) {
        return {
            item_bg_color: config.itemBackgroundColor,
            item_height: config.itemHeight,
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            data_array: this.getDataArrayForItems(config.items),
            data_size: config.items.length,
            item_click_func: (_, index) => config.onClick(index),
        };
    }
    setIndex(index) {
        this.widget.setProperty(hmUI.prop.LIST_TOP, { index: index });
    }
}
