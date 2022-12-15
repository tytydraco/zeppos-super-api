import { Widget } from "./widget"

export class Arc extends Widget<Arc.Configuration> {
    build(builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.ARC, this.toNative(this.config))
    }

    toNative(config: Arc.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width ?? config.radius * 2,
            h: config.height ?? config.radius * 2,
            radius: config.radius,
            start_angle: config.startAngle ?? 0,
            end_angle: config.endAngle ?? 0,
            line_width: config.lineWidth ?? 1,
            color: config.color ?? 0xffffff,
        }
    }
}

export namespace Arc {
    export interface Configuration {
        x: number,
        y: number,
        radius: number,

        width?: number,
        height?: number,
        startAngle?: number,
        endAngle?: number,
        lineWidth?: number,
        color?: number,
    }
}