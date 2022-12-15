import { Widget } from "./widget";
export declare class Text extends Widget<Text.Configuration> {
    build(builder?: Internal): void;
    toNative(config: Text.Configuration): Record<string, any>;
}
export declare namespace Text {
    enum Alignment {
        Left,
        Right,
        Top,
        Bottom,
        CenterVertically,
        CenterHorizontally
    }
    enum Overflow {
        None,
        Ellipses,
        WordWrap,
        CharacterWrap
    }
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        text?: string;
        fontSize?: number;
        color?: number;
        horizontalAlignment?: Alignment;
        verticalAlignment?: Alignment;
        lineSpacing?: number;
        characterSpacing?: number;
        overflow: Overflow;
    }
}
