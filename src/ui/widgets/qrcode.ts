import { Widget } from "./widget"

export class QRCode extends Widget<QRCode.Configuration> {
    constructor(config: QRCode.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.QRCODE, this.toNative(config))
    }

    toNative(config: QRCode.Configuration): Record<string, any> {
        return {
            content: config.content,
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        }
    }
}

export namespace QRCode {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        content: string,
    }
}