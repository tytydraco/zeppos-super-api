import { Builder, Widget } from "./widget"

export class Circle extends Widget<Circle.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.CIRCLE, this.toNative(this.config))
    }

    toNative(config: Circle.Configuration): Record<string, any> {
        return {
            center_x: config.x + config.radius,
            center_y: config.y + config.radius,
            radius: config.radius,
            color: config.color,
            alpha: config.alpha,
        }
    }
}

export namespace Circle {
    export interface Configuration {
        x: number,
        y: number,
        radius: number,
        color: number,

        alpha?: number,
    }
}