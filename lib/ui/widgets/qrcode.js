import { Widget } from "./widget";
export class QRCode extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.QRCODE, this.toNative(this.config));
    }
    toNative(config) {
        return {
            content: config.content,
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        };
    }
}
