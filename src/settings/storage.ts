import 'zeppos-device-types-v1'

export namespace Storage {
    export interface DiskInfo {
        totalBytes: number,
        freeBytes: number,
        appBytes: number,
        watchfaceBytes: number,
        musicBytes: number,
        systemBytes: number,
    }

    export function getDiskInfo(): DiskInfo {
        const diskInfo = hmSetting.getDiskInfo()
        return {
            totalBytes: diskInfo.total,
            freeBytes: diskInfo.free,
            appBytes: diskInfo.app,
            watchfaceBytes: diskInfo.watchface,
            musicBytes: diskInfo.music,
            systemBytes: diskInfo.system,
        }
    }
}