export declare class Dialog {
    private dialog;
    private _isShowing;
    constructor(title: string, onSelect: (button: Dialog.Button) => void, autoShow: boolean, hideAfterSelect?: boolean);
    get isShowing(): boolean;
    show(): void;
    hide(): void;
}
export declare namespace Dialog {
    enum Button {
        Cancel = 0,
        Confirm = 1
    }
}
