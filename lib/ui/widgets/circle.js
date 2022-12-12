import { Widget } from "./widget";
export class Circle extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.CIRCLE, this.toNative(this.config));
    }
    toNative(config) {
        return {
            center_x: config.x,
            center_y: config.y,
            radius: config.radius,
            color: config.color,
            alpha: config.alpha,
        };
    }
}
