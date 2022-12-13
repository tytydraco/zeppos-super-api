import { Widget } from "./widget";
export class Rectangle extends Widget {
    build(builder = hmUI) {
        const widgetId = this.config.filled ? hmUI.widget.FILL_RECT : hmUI.widget.STROKE_RECT;
        this.widget = builder.createWidget(widgetId, this.toNative(this.config));
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
            line_width: config.borderThickness,
        };
    }
}
