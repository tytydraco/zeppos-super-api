import { Widget } from "./widget";
export class Image extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.IMG, this.toNative(this.config));
    }
    toNative(config) {
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
        };
    }
}
