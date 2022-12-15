import { Widget } from "./widget";
export class Button extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.BUTTON, this.toNative(this.config));
    }
    toNative(config) {
        var _a;
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            text: (_a = config.text) !== null && _a !== void 0 ? _a : '',
            color: config.textColor,
            text_size: config.fontSize,
            press_src: config.pressedImagePath,
            normal_src: config.imagePath,
            press_color: config.pressedColor,
            normal_color: config.color,
            radius: config.radius,
            click_func: (config.onClick !== undefined) ? ((_) => config.onClick()) : undefined,
        };
    }
}
