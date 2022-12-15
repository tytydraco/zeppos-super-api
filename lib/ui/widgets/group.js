import { Widget } from "./widget";
export class Group extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.GROUP, this.toNative(this.config));
        if (this.config.children !== undefined) {
            for (const child of this.config.children) {
                child.build(this.widget);
            }
        }
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        };
    }
}
