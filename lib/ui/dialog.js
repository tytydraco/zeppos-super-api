export class Dialog {
    constructor(title, onSelect, autoShow, hideAfterSelect) {
        this.dialog = hmUI.createDialog({
            title: title,
            show: autoShow,
            click_linster: onSelect,
            auto_hide: hideAfterSelect,
        });
        this._isShowing = autoShow;
    }
    get isShowing() {
        return this._isShowing;
    }
    show() {
        this.dialog.show(true);
        this._isShowing = true;
    }
    hide() {
        this.dialog.show(false);
        this._isShowing = false;
    }
}
(function (Dialog) {
    let Button;
    (function (Button) {
        Button[Button["Cancel"] = 0] = "Cancel";
        Button[Button["Confirm"] = 1] = "Confirm";
    })(Button = Dialog.Button || (Dialog.Button = {}));
})(Dialog || (Dialog = {}));
