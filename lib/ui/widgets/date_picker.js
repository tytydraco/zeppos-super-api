import { Widget } from "./widget";
export class DatePicker extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.PICK_DATE, this.toNative(this.config));
    }
    toNative(config) {
        var _a, _b, _c, _d, _e;
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            font_size: config.fontSize,
            initYear: (_a = config.initialDate) === null || _a === void 0 ? void 0 : _a.getFullYear(),
            initMonth: (_b = config.initialDate) === null || _b === void 0 ? void 0 : _b.getMonth(),
            initDay: (_c = config.initialDate) === null || _c === void 0 ? void 0 : _c.getDay(),
            initHour: (_d = config.initialDate) === null || _d === void 0 ? void 0 : _d.getHours(),
            initMin: (_e = config.initialDate) === null || _e === void 0 ? void 0 : _e.getMinutes(),
        };
    }
    getDate() {
        const dateObject = this.widget.getProperty(hmUI.prop.MORE);
        return new Date(dateObject.year, dateObject.month, dateObject.day, dateObject.hour, dateObject.minute);
    }
}
