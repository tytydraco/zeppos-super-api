import { Builder, Widget } from "./widget"

export class Rectangle extends Widget<Rectangle.Configuration> {
    build(builder: Builder = hmUI) {
        const widgetId = this.config.filled ? hmUI.widget.FILL_RECT : hmUI.widget.STROKE_RECT

        this.widget = builder.createWidget(widgetId, this.toNative(this.config))
    }

    toNative(config: Rectangle.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color ?? 0xffffff,
            radius: config.radius,
            angle: config.angle,
            line_width: config.borderThickness,
        }
    }
}

export namespace Rectangle {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,

        color?: number,
        filled?: boolean,
        radius?: number,
        angle?: number,
        borderThickness?: number,
    }
}