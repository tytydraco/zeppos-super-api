import { Builder, Widget } from "./widget";
export declare class QRCode extends Widget<QRCode.Configuration> {
    build(builder?: Builder): void;
    toNative(config: QRCode.Configuration): Record<string, any>;
}
export declare namespace QRCode {
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        content: string;
    }
}
