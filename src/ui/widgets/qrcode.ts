import { Builder, Widget } from "./widget"

export class QRCode extends Widget<QRCode.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.QRCODE, this.toNative(this.config))
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