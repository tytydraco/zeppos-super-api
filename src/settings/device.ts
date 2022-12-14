import { Screen } from './screen'

export namespace Device {
    export interface Hardware {
        screenWidth: number,
        screenHeight: number,
        screenShape: Screen.Shape,
        deviceName: string,
        physicalKeyCount: number,
        deviceCode: number,
    }

    export enum SceneType {
        App = hmSetting.screen_type.APP,
        Watchface = hmSetting.screen_type.WATCHFACE,
        Settings = hmSetting.screen_type.SETTINGS,
        AlwaysOnDisplay = hmSetting.screen_type.AOD,
    }

    export function getDeviceInfo(): Hardware {
        const deviceInfo = hmSetting.getDeviceInfo()
        return {
            screenWidth: deviceInfo.width,
            screenHeight: deviceInfo.height,
            screenShape: deviceInfo.screenShape,
            deviceName: deviceInfo.deviceName,
            physicalKeyCount: deviceInfo.keyNumber,
            deviceCode: deviceInfo.deviceSource,
        }
    }

    export function getSceneType(): SceneType {
        return hmSetting.getScreenType()
    }
}