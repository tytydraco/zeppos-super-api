import { Builder, Widget } from "../widget"

export class OutlinedRectangle extends Widget<OutlinedRectangle.Configuration> {
    constructor(public readonly config: OutlinedRectangle.Configuration) {
        super()
    }

    build(builder: Builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.STROKE_RECT, this.toNative(this.config))
    }

    toNative(config: OutlinedRectangle.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color,
            radius: config.radius,
            line_width: config.lineWidth,
            angle: config.angle,
        }
    }
}

export namespace OutlinedRectangle {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        color: number,
        radius?: number,
        lineWidth?: number,
        angle?: number,
    }
}