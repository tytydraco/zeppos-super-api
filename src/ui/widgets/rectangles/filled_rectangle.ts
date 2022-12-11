import { Builder, Widget } from "../widget"

export class FilledRectangle extends Widget<FilledRectangle.Configuration> {
    constructor(public readonly config: FilledRectangle.Configuration) {
        super()
    }

    build(builder: Builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.FILL_RECT, this.toNative(this.config))
    }

    toNative(config: FilledRectangle.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color,
            radius: config.radius,
            angle: config.angle,
        }
    }
}

export namespace FilledRectangle {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        color: number,
        radius?: number,
        angle?: number,
    }
}