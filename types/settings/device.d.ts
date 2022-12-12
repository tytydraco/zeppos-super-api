import { Screen } from './screen';
export declare namespace Device {
    interface Hardware {
        screenWidth: number;
        screenHeight: number;
        screenShape: Screen.Shape;
        deviceName: string;
        physicalKeyCount: number;
        deviceCodeId: number;
    }
    enum SceneType {
        App,
        Watchface,
        Settings,
        AlwaysOnDisplay
    }
    function getDeviceInfo(): Hardware;
    function getSceneType(): SceneType;
}
