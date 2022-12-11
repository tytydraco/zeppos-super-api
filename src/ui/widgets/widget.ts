import { Group } from "./group"

export interface Builder {
    createWidget(widgetType: number, options: HmWearableProgram.DeviceSide.HmUI.HmUIWidgetOptions): HmWearableProgram.DeviceSide.HmUI.IHmUIWidget
}

export abstract class Widget<T> {
    widget: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget

    abstract build(builder: Builder): void

    update(config: T) {
        this.widget.setProperty(hmUI.prop.MORE, this.toNative(config))
    }

    enable() {
        this.widget.setEnable(true)
    }

    disable() {
        this.widget.setEnable(false)
    }

    delete() {
        hmUI.deleteWidget(this.widget)
    }

    protected abstract toNative(config: T): Record<string, any>
}