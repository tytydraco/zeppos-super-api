import { Widget } from "./widget";
export class Switch extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.SLIDE_SWITCH, this.toNative(this.config));
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            select_bg: config.selectedBackgroundImagePath,
            un_select_bg: config.backgroundImagePath,
            slide_src: config.imagePath,
            slide_select_x: config.selectedXOffset,
            slide_un_select_x: config.xOffset,
            slide_y: config.yOffset,
            checked_change_func: (_, checked) => config.onChecked(checked),
            checked: config.defaultChecked,
        };
    }
    getChecked() {
        return this.widget.getProperty(hmUI.prop.CHECKED);
    }
    check() {
        this.widget.setProperty(hmUI.prop.CHECKED, true);
    }
    uncheck() {
        this.widget.setProperty(hmUI.prop.CHECKED, false);
    }
}
