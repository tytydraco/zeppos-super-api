export var Scroll;
(function (Scroll) {
    function enable() {
        hmUI.setLayerScrolling(true);
    }
    Scroll.enable = enable;
    function disable() {
        hmUI.setLayerScrolling(false);
    }
    Scroll.disable = disable;
})(Scroll || (Scroll = {}));
