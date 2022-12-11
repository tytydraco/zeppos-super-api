export abstract class Widget<T> {
    protected widget: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget

    update(config: T) {
        this.widget.setProperty(hmUI.prop.MORE, this.toNative(config))
    }

    protected abstract toNative(config: T): Record<string, any>
}