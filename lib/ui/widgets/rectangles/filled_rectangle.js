import { Widget } from "../widget";
export class FilledRectangle extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.FILL_RECT, this.toNative(this.config));
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color,
            radius: config.radius,
            angle: config.angle,
        };
    }
}
