import { Widget } from "./widget"

export class StateButton extends Widget<StateButton.Configuration> {
    private _parent: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget

    constructor(config: StateButton.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.STATE_BUTTON, this.toNative(config))
    }

    toNative(config: StateButton.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        }
    }

    attach(parent: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget) {
        this._parent = parent
        parent.setProperty(hmUI.prop.INIT, this.widget)
    }

    getChecked(): boolean {
        return this.widget.getProperty(hmUI.prop.CHECKED)
    }

    check() {
        this._parent.setProperty(hmUI.prop.CHECKED, this.widget)
    }

    uncheck() {
        this._parent.setProperty(hmUI.prop.UNCHECKED, this.widget)
    }
}

export namespace StateButton {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
    }
}