import { Text } from "./text"
import { Builder, Widget } from "./widget"

export class CustomDialog extends Widget<CustomDialog.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.DIALOG, this.toNative(this.config))
    }

    toNative(config: CustomDialog.Configuration): Record<string, any> {
        return {
            text: config.text,
            content_text_size: config.fontSize,
            content_text_color: config.textColor,
            content_bg_color: config.backgroundColor,
            content_text_align_h: config.textHorizontalAlignment,
            content_text_align_v: config.textHorizontalVertical,
            ok_text: config.confirmButtonConfig.text,
            ok_text_color: config.confirmButtonConfig.textColor,
            ok_press_color: config.confirmButtonConfig.pressedColor,
            ok_nomal_color: config.confirmButtonConfig.color,
            ok_press_src: config.confirmButtonConfig.pressedImagePath,
            ok_nomal_src: config.confirmButtonConfig.imagePath,
            cancel_text: config.cancelButtonConfig.text,
            cancel_text_color: config.cancelButtonConfig.textColor,
            cancel_press_color: config.cancelButtonConfig.pressedColor,
            cancel_nomal_color: config.cancelButtonConfig.color,
            cancel_press_src: config.cancelButtonConfig.pressedImagePath,
            cancel_nomal_src: config.cancelButtonConfig.imagePath,
            ok_func: (_: any) => config.confirmButtonConfig.onClick(),
            cancel_func: (_: any) => config.cancelButtonConfig.onClick(),
        }
    }

    show() {
        this.widget.setProperty(hmUI.prop.SHOW, true)
    }

    hide() {
        this.widget.setProperty(hmUI.prop.SHOW, false)
    }
}

export namespace CustomDialog {
    export interface ButtonConfiguration {
        text?: string,
        textColor?: number,
        color?: number,
        pressedColor?: number,
        imagePath?: string,
        pressedImagePath?: string,
        onClick?: () => void,
    }

    export interface Configuration {
        text: string,

        fontSize?: number,
        textColor?: number,
        backgroundColor?: number,
        textHorizontalAlignment: Text.Alignment,
        textHorizontalVertical: Text.Alignment,

        confirmButtonConfig: ButtonConfiguration,
        cancelButtonConfig: ButtonConfiguration,
    }
}