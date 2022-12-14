import { Widget } from "./widget";
export class Arc extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.ARC, this.toNative(this.config));
    }
    toNative(config) {
        var _a, _b, _c, _d, _e, _f;
        return {
            x: config.x,
            y: config.y,
            w: (_a = config.width) !== null && _a !== void 0 ? _a : config.radius * 2,
            h: (_b = config.height) !== null && _b !== void 0 ? _b : config.radius * 2,
            radius: config.radius,
            start_angle: (_c = config.startAngle) !== null && _c !== void 0 ? _c : 0,
            end_angle: (_d = config.endAngle) !== null && _d !== void 0 ? _d : 0,
            line_width: (_e = config.lineWidth) !== null && _e !== void 0 ? _e : 1,
            color: (_f = config.color) !== null && _f !== void 0 ? _f : 0xffffff,
        };
    }
}
