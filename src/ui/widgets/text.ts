import { Widget } from "./widget"

export class Text extends Widget<Text.Configuration> {
    build(builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.TEXT, this.toNative(this.config))
    }

    toNative(config: Text.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color,
            align_h: config.horizontalAlignment,
            align_y: config.verticalAlignment,
            text: config.text,
            text_size: config.fontSize,
            text_style: config.overflow,
            line_space: config.lineSpacing,
            char_space: config.characterSpacing,
        }
    }
}

export namespace Text {
    export enum Alignment {
        Left = hmUI.align.LEFT,
        Right = hmUI.align.RIGHT,
        Top = hmUI.align.TOP,
        Bottom = hmUI.align.BOTTOM,
        CenterVertically = hmUI.align.CENTER_V,
        CenterHorizontally = hmUI.align.CENTER_H,
    }

    export enum Overflow {
        None = hmUI.text_style.NONE,
        Ellipses = hmUI.text_style.ELLIPSIS,
        WordWrap = hmUI.text_style.WRAP,
        CharacterWrap = hmUI.text_style.CHAR_WRAP,
    }

    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,

        text?: string,
        fontSize?: number,
        color?: number,
        horizontalAlignment?: Alignment,
        verticalAlignment?: Alignment,
        lineSpacing?: number,
        characterSpacing?: number,
        overflow: Overflow,
    }
}