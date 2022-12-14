import { Widget } from "./widget";
export class ScrollList extends Widget {
    getDataArrayForItems(items) {
        return items.map((item) => ({ value: item }));
    }
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.SCROLL_LIST, this.toNative(this.config));
    }
    toNative(config) {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_space: config.itemSpacing,
            item_config: {
                item_height: (_a = config.itemHeight) !== null && _a !== void 0 ? _a : config.height / 3,
                item_bg_color: (_b = config.itemBackgroundColor) !== null && _b !== void 0 ? _b : 0x000000,
                item_bg_radius: (_c = config.itemBackgroundRadius) !== null && _c !== void 0 ? _c : 0,
                text_view: (config.type == ScrollList.Type.Text) ? [{
                        x: config.itemConfig.x,
                        y: config.itemConfig.y,
                        w: (_d = config.itemConfig.width) !== null && _d !== void 0 ? _d : config.width,
                        h: (_e = config.itemConfig.height) !== null && _e !== void 0 ? _e : config.itemHeight,
                        color: config.itemConfig.textColor,
                        text_size: config.itemConfig.fontSize,
                        key: 'value',
                    }] : undefined,
                text_view_count: (config.type == ScrollList.Type.Text) ? 1 : 0,
                image_view: (config.type == ScrollList.Type.Image) ? [{
                        x: config.itemConfig.x,
                        y: config.itemConfig.y,
                        w: (_f = config.itemConfig.width) !== null && _f !== void 0 ? _f : config.width,
                        h: (_g = config.itemConfig.height) !== null && _g !== void 0 ? _g : config.itemHeight,
                        key: 'value',
                    }] : undefined,
                image_view_count: (config.type == ScrollList.Type.Image) ? 1 : 0,
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
(function (ScrollList) {
    let Type;
    (function (Type) {
        Type[Type["Text"] = 0] = "Text";
        Type[Type["Image"] = 1] = "Image";
    })(Type = ScrollList.Type || (ScrollList.Type = {}));
})(ScrollList || (ScrollList = {}));
