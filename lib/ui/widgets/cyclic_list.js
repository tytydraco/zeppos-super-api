import { Widget } from "./widget";
export class CyclicList extends Widget {
    build(builder = hmUI) {
        const widgetId = this.config.type == CyclicList.Type.Text ? hmUI.widget.CYCLE_IMAGE_TEXT_LIST : hmUI.widget.CYCLE_LIST;
        this.widget = builder.createWidget(widgetId, this.toNative(this.config));
    }
    getDataArrayForItems(items) {
        return items.map((item) => ({ text: item }));
    }
    toNative(config) {
        var _a, _b, _c, _d;
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_text_size: (_a = config.fontSize) !== null && _a !== void 0 ? _a : 18,
            item_text_color: (_b = config.textColor) !== null && _b !== void 0 ? _b : 0xffffff,
            item_bg_color: (_c = config.itemBackgroundColor) !== null && _c !== void 0 ? _c : 0x000000,
            item_height: (_d = config.itemHeight) !== null && _d !== void 0 ? _d : (config.height / 3),
            data_array: this.getDataArrayForItems(config.items),
            data_size: config.items.length,
            item_text_align_h: config.horizontalTextAlignment,
            item_text_align_v: config.verticalTextAlignment,
            item_click_func: (config.onClick !== undefined) ? ((_, index) => config.onClick(index)) : undefined,
        };
    }
    setIndex(index) {
        this.widget.setProperty(hmUI.prop.LIST_TOP, { index: index });
    }
}
(function (CyclicList) {
    let Type;
    (function (Type) {
        Type[Type["Text"] = 0] = "Text";
        Type[Type["Image"] = 1] = "Image";
    })(Type = CyclicList.Type || (CyclicList.Type = {}));
})(CyclicList || (CyclicList = {}));
