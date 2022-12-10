export namespace TextLayout {
    export interface Dimensions {
        width: number,
        height: number,
    }

    export function getTextDimensions(text: string, fontSize: number, lineWidth: number, textWrap?: boolean): Dimensions {
        return hmUI.getTextLayout(text, {
            text_size: fontSize,
            text_width: lineWidth,
            wrapped: Number(textWrap),
        })
    }
}