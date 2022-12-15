export class Widget {
    constructor(config) {
        this.config = config;
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
    onDrag(callback) {
        const innerCallback = (info) => {
            callback(info.x, info.y);
        };
        this.widget.addEventListener(hmUI.event.MOVE, innerCallback);
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.MOVE, innerCallback);
            },
        };
    }
    onPress(callback) {
        const innerCallback = (info) => {
            callback(info.x, info.y);
        };
        this.widget.addEventListener(hmUI.event.CLICK_DOWN, innerCallback);
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.CLICK_DOWN, innerCallback);
            },
        };
    }
    onRelease(callback) {
        const innerCallback = (info) => {
            callback(info.x, info.y);
        };
        this.widget.addEventListener(hmUI.event.CLICK_UP, innerCallback);
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.CLICK_UP, innerCallback);
            },
        };
    }
}
