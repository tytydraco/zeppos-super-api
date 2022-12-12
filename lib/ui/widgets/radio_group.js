import { Widget } from "./widget";
export class RadioGroup extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.RADIO_GROUP, this.toNative(this.config));
        for (const stateButton of this.config.buttons) {
            this.widget.setProperty(hmUI.prop.INIT, stateButton.widget);
        }
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            select_src: config.selectedImagePath,
            unselect_src: config.imagePath,
            check_func: (_, index, checked) => config.onClick(index, checked),
        };
    }
    check(button) {
        button.widget.setProperty(hmUI.prop.CHECKED, this.widget);
    }
    uncheck(button) {
        button.widget.setProperty(hmUI.prop.UNCHECKED, this.widget);
    }
}
