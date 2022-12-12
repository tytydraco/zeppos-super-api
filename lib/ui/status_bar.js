export var StatusBar;
(function (StatusBar) {
    function show() {
        hmUI.setStatusBarVisible(true);
    }
    StatusBar.show = show;
    function hide() {
        hmUI.setStatusBarVisible(false);
    }
    StatusBar.hide = hide;
    function setTitle(title) {
        hmUI.updateStatusBarTitle(title);
    }
    StatusBar.setTitle = setTitle;
})(StatusBar || (StatusBar = {}));
