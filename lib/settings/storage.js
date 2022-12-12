export var Storage;
(function (Storage) {
    function getDiskInfo() {
        const diskInfo = hmSetting.getDiskInfo();
        return {
            totalBytes: diskInfo.total,
            freeBytes: diskInfo.free,
            appBytes: diskInfo.app,
            watchfaceBytes: diskInfo.watchface,
            musicBytes: diskInfo.music,
            systemBytes: diskInfo.system,
        };
    }
    Storage.getDiskInfo = getDiskInfo;
})(Storage || (Storage = {}));
