import { Widget } from "./widget"

export class StateButton extends Widget<StateButton.Configuration> {
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

    getChecked(): boolean {
        return this.widget.getProperty(hmUI.prop.CHECKED)
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