export class Widget {
    constructor(config) {
        this.config = config;
        this.widget = null;
    }
    update(config) {
        this.widget.setProperty(hmUI.prop.MORE, this.toNative(config));
    }
    enable() {
        this.widget.setEnable(true);
    }
    disable() {
        this.widget.setEnable(false);
    }
    delete() {
        hmUI.deleteWidget(this.widget);
    }
}
