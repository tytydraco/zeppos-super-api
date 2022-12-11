import { StateButton } from "./state_button"
import { Builder, Widget } from "./widget"

export class RadioGroup extends Widget<RadioGroup.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.RADIO_GROUP, this.toNative(this.config))

        for (const stateButton of this.config.buttons) {
            this.widget.setProperty(hmUI.prop.INIT, stateButton.widget)
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

    check(button: StateButton) {
        button.widget.setProperty(hmUI.prop.CHECKED, this.widget)
    }

    uncheck(button: StateButton) {
        button.widget.setProperty(hmUI.prop.UNCHECKED, this.widget)
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