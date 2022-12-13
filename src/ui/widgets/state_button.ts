import { Builder, Widget } from "./widget"

export class StateButton extends Widget<StateButton.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.STATE_BUTTON, this.toNative(this.config))
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
    export interface Configuration extends Widget.Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
    }
}