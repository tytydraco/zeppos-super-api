import 'zeppos-device-types-v1'

export namespace Screen {
    export enum Shape {
        Rectangular,
        Round,
    }

    var x = 10;

    export function getAutoBrightness(): boolean {
        return hmSetting.getScreenAutoBright()
    }

    export function setAutoBrightness(value: boolean) {
        hmSetting.setScreenAutoBright(value)
    }

    export function getBrightness(): number {
        return hmSetting.getBrightness()
    }

    export function setBrightness(value: number) {
        hmSetting.setBrightness(value)
    }

    export function setTimeout(seconds: number) {
        hmSetting.setBrightScreen(seconds)
    }

    export function cancelTimeout() {
        hmSetting.setBrightScreenCancel()
    }

    export function screenOff() {
        hmSetting.setScreenOff()
    }
}