export var Device;
(function (Device) {
    let SceneType;
    (function (SceneType) {
        SceneType[SceneType["App"] = hmSetting.screen_type.APP] = "App";
        SceneType[SceneType["Watchface"] = hmSetting.screen_type.WATCHFACE] = "Watchface";
        SceneType[SceneType["Settings"] = hmSetting.screen_type.SETTINGS] = "Settings";
        SceneType[SceneType["AlwaysOnDisplay"] = hmSetting.screen_type.AOD] = "AlwaysOnDisplay";
    })(SceneType = Device.SceneType || (Device.SceneType = {}));
    function getDeviceInfo() {
        const deviceInfo = hmSetting.getDeviceInfo();
        return {
            screenWidth: deviceInfo.width,
            screenHeight: deviceInfo.height,
            screenShape: deviceInfo.screenShape,
            deviceName: deviceInfo.deviceName,
            physicalKeyCount: deviceInfo.keyNumber,
            deviceCode: deviceInfo.deviceSource,
        };
    }
    Device.getDeviceInfo = getDeviceInfo;
    function getSceneType() {
        return hmSetting.getScreenType();
    }
    Device.getSceneType = getSceneType;
})(Device || (Device = {}));
