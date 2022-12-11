import { Widget } from "./widget"

export class Image extends Widget<Image.Configuration> {
    constructor(config: Image.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.IMG, this.toNative(config))
    }

    toNative(config: Image.Configuration): Record<string, any> {
        return {
            src: config.path,
            w: config.width,
            h: config.height,
            x: config.x,
            y: config.y,
            pos_x: config.xOffset,
            pos_y: config.yOffset,
            angle: config.rotationAngle,
            center_x: config.rotationCenterX,
            center_y: config.rotationCenterY,
        }
    }
}

export namespace Image {
    export interface Configuration {
        x: number,
        y: number,
        path: string,

        width?: number,
        height?: number,

        xOffset?: number,
        yOffset?: number,
        rotationAngle?: number,
        rotationCenterX?: number,
        rotationCenterY?: number,
    }
}