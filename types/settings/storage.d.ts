export declare namespace Storage {
    interface DiskInfo {
        totalBytes: number;
        freeBytes: number;
        appBytes: number;
        watchfaceBytes: number;
        musicBytes: number;
        systemBytes: number;
    }
    function getDiskInfo(): DiskInfo;
}
