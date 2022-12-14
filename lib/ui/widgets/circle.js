import { Widget } from "./widget";
export class Circle extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.CIRCLE, this.toNative(this.config));
    }
    toNative(config) {
        var _a;
        return {
            center_x: config.x + config.radius,
            center_y: config.y + config.radius,
            radius: config.radius,
            color: (_a = config.color) !== null && _a !== void 0 ? _a : 0xffffff,
            alpha: config.alpha,
        };
    }
}
