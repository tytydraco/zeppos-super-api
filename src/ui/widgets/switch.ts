import { Builder, Widget } from "./widget"

export class Switch extends Widget<Switch.Configuration> {
    constructor(public readonly config: Switch.Configuration) {
        super()
    }

    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.SLIDE_SWITCH, this.toNative(this.config))
    }

    toNative(config: Switch.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            select_bg: config.selectedBackgroundImagePath,
            un_select_bg: config.backgroundImagePath,
            slide_src: config.imagePath,
            slide_select_x: config.selectedXOffset,
            slide_un_select_x: config.xOffset,
            slide_y: config.yOffset,
            checked_change_func: (_: any, checked: boolean) => config.onChecked(checked),
            checked: config.defaultChecked,
        }
    }

    getChecked(): boolean {
        return this.widget.getProperty(hmUI.prop.CHECKED)
    }

    check() {
        this.widget.setProperty(hmUI.prop.CHECKED, true)
    }

    uncheck() {
        this.widget.setProperty(hmUI.prop.CHECKED, false)
    }
}

export namespace Switch {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        imagePath: string,
        backgroundImagePath: string,
        selectedBackgroundImagePath: string,
        xOffset: number,
        selectedXOffset: number,

        yOffset?: number,
        defaultChecked?: boolean,
        onChecked: (checked: boolean) => void,
    }
}