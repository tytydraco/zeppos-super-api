import { Widget } from "./widget";
export class Text extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.TEXT, this.toNative(this.config));
    }
    toNative(config) {
        var _a;
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            color: config.color,
            align_h: config.horizontalAlignment,
            align_v: config.verticalAlignment,
            text: config.text,
            text_size: config.fontSize,
            text_style: (_a = config.overflow) !== null && _a !== void 0 ? _a : Text.Overflow.None,
            line_space: config.lineSpacing,
            char_space: config.characterSpacing,
        };
    }
}
(function (Text) {
    let Alignment;
    (function (Alignment) {
        Alignment[Alignment["Left"] = hmUI.align.LEFT] = "Left";
        Alignment[Alignment["Right"] = hmUI.align.RIGHT] = "Right";
        Alignment[Alignment["Top"] = hmUI.align.TOP] = "Top";
        Alignment[Alignment["Bottom"] = hmUI.align.BOTTOM] = "Bottom";
        Alignment[Alignment["CenterVertically"] = hmUI.align.CENTER_V] = "CenterVertically";
        Alignment[Alignment["CenterHorizontally"] = hmUI.align.CENTER_H] = "CenterHorizontally";
    })(Alignment = Text.Alignment || (Text.Alignment = {}));
    let Overflow;
    (function (Overflow) {
        Overflow[Overflow["None"] = hmUI.text_style.NONE] = "None";
        Overflow[Overflow["Ellipses"] = hmUI.text_style.ELLIPSIS] = "Ellipses";
        Overflow[Overflow["WordWrap"] = hmUI.text_style.WRAP] = "WordWrap";
        Overflow[Overflow["CharacterWrap"] = hmUI.text_style.CHAR_WRAP] = "CharacterWrap";
    })(Overflow = Text.Overflow || (Text.Overflow = {}));
})(Text || (Text = {}));
