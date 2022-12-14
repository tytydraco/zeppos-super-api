import { Widget } from "./widget";
export class Arc extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.ARC, this.toNative(this.config));
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            radius: config.radius,
            start_angle: config.startAngle,
            end_angle: config.endAngle,
            line_width: config.lineWidth,
            color: config.color,
        };
    }
}
