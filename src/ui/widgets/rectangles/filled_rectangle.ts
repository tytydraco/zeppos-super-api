import { Widget, Builder } from "../widget"

export class FilledRectangle extends Widget<FilledRectangle.Configuration> {
    constructor(config: FilledRectangle.Configuration, builder: Builder = hmUI) {
        super(builder)
        this.widget = this.builder.createWidget(hmUI.widget.FILL_RECT, this.toNative(config))
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