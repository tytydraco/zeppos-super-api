import { Widget } from "./widget"

export class Circle extends Widget<Circle.Configuration> {
    constructor(config: Circle.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.CIRCLE, this.toNative(config))
    }

    toNative(config: Circle.Configuration): Record<string, any> {
        return {
            center_x: config.x,
            center_y: config.y,
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