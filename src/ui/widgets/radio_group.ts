import { StateButton } from "./state_button"
import { Widget } from "./widget"

export class RadioGroup extends Widget<RadioGroup.Configuration> {
    constructor(config: RadioGroup.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.RADIO_GROUP, this.toNative(config))

        for (const stateButton of config.buttons) {
            stateButton.attach(this.widget)
        }
    }

    toNative(config: RadioGroup.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            select_src: config.selectedImagePath,
            unselect_src: config.imagePath,
            check_func: (_: any, index: number, checked: boolean) => config.onClick(index, checked),
        }
    }
}

export namespace RadioGroup {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        imagePath: string,
        selectedImagePath: string,
        buttons: Array<StateButton>,

        onClick?: (index: number, checked: boolean) => void,
    }
}