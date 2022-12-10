export class Dialog {
    private dialog: HmWearableProgram.DeviceSide.HmUI.IHmUIDialogType

    private _isShowing: boolean

    constructor(
        title: string,
        onSelect: (button: Dialog.Button) => void,
        autoShow: boolean,
        hideAfterSelect?: boolean,
    ) {
        this.dialog = hmUI.createDialog({
            title: title,
            show: autoShow,
            click_linster: onSelect,
            auto_hide: hideAfterSelect,
        })

        this._isShowing = autoShow
    }

    get isShowing(): boolean {
        return this._isShowing
    }

    show() {
        this.dialog.show(true)
        this._isShowing = true
    }

    hide() {
        this.dialog.show(false)
        this._isShowing = false
    }
}

export namespace Dialog {
    export enum Button {
        Cancel = 0,
        Confirm = 1,
    }
}