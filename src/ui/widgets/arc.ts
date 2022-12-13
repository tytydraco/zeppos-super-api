import { Builder, Widget } from "./widget"

export class Arc extends Widget<Arc.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.ARC, this.toNative(this.config))
    }

    toNative(config: Arc.Configuration): Record<string, any> {
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
        }
    }
}

export namespace Arc {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        lineWidth: number,
        color: number,
    }
}