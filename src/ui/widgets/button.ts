import { Builder, Widget } from "./widget"

export class Button extends Widget<Button.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.BUTTON, this.toNative(this.config))
    }

    toNative(config: Button.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            text: config.text,
            color: config.textColor,
            text_size: config.fontSize,
            press_src: config.pressedImagePath,
            normal_src: config.imagePath,
            press_color: config.pressedColor,
            normal_color: config.color,
            radius: config.radius,
            click_func: (_: any) => config.onClick(),
        }
    }
}

export namespace Button {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        text: number,

        imagePath?: string,
        pressedImagePath?: string,

        color?: number,
        pressedColor?: number,

        textColor?: number,
        fontSize?: number,
        alpha?: number,
        radius?: number,

        onClick?: () => void,
    }
}