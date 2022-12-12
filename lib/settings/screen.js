export var Screen;
(function (Screen) {
    let Shape;
    (function (Shape) {
        Shape[Shape["Rectangular"] = 0] = "Rectangular";
        Shape[Shape["Round"] = 1] = "Round";
    })(Shape = Screen.Shape || (Screen.Shape = {}));
    function getAutoBrightness() {
        return hmSetting.getScreenAutoBright();
    }
    Screen.getAutoBrightness = getAutoBrightness;
    function setAutoBrightness(value) {
        hmSetting.setScreenAutoBright(value);
    }
    Screen.setAutoBrightness = setAutoBrightness;
    function getBrightness() {
        return hmSetting.getBrightness();
    }
    Screen.getBrightness = getBrightness;
    function setBrightness(value) {
        hmSetting.setBrightness(value);
    }
    Screen.setBrightness = setBrightness;
    function setTimeout(seconds) {
        hmSetting.setBrightScreen(seconds);
    }
    Screen.setTimeout = setTimeout;
    function cancelTimeout() {
        hmSetting.setBrightScreenCancel();
    }
    Screen.cancelTimeout = cancelTimeout;
    function screenOff() {
        hmSetting.setScreenOff();
    }
    Screen.screenOff = screenOff;
})(Screen || (Screen = {}));
