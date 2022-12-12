import { Widget } from "./widget";
export class ImageScrollList extends Widget {
    getDataArrayForItems(items) {
        return items.map((item) => ({ value: item }));
    }
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.SCROLL_LIST, this.toNative(this.config));
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_space: config.itemSpacing,
            item_config: {
                item_height: config.itemHeight,
                item_bg_color: config.itemBackgroundColor,
                item_bg_radius: config.itemBackgroundRadius,
                image_view: [{
                        x: config.itemConfig.x,
                        y: config.itemConfig.y,
                        w: config.itemConfig.width,
                        h: config.itemConfig.height,
                        key: 'value',
                    }],
                image_view_count: 1,
            },
            item_config_count: 1,
            data_array: this.getDataArrayForItems(config.items),
            data_count: config.items.length,
            item_click_func: (_, index) => config.onClick(index),
            on_page: config.resetPositionOnUpdate ? 0 : 1,
        };
    }
    updateItems(items) {
        this.widget.setProperty(hmUI.prop.UPDATE_DATA, {
            data_array: this.getDataArrayForItems(items),
            data_count: items.length,
        });
    }
}
