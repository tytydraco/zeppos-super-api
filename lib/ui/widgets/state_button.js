import { Widget } from "./widget";
export class StateButton extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.STATE_BUTTON, this.toNative(this.config));
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        };
    }
    getChecked() {
        return this.widget.getProperty(hmUI.prop.CHECKED);
    }
}
