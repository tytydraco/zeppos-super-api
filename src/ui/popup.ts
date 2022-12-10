export namespace PopUp {
    export function present(message: string) {
        hmUI.showToast({ text: message })
    }
}