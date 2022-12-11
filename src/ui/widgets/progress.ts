import { Widget } from "./widget"

export class Progress extends Widget<Progress.Configuration> {
    constructor(config: Progress.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.ARC, this.toNative(config))
    }

    toNative(config: Progress.Configuration): Record<string, any> {
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

export namespace Progress {
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