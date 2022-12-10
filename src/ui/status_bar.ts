export namespace StatusBar {
    export function show() {
        hmUI.setStatusBarVisible(true)
    }

    export function hide() {
        hmUI.setStatusBarVisible(false)
    }

    export function setTitle(title: string) {
        hmUI.updateStatusBarTitle(title)
    }
}