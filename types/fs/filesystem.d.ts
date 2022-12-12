export declare namespace FileSystem {
    enum FileMode {
        ReadOnly,
        WriteOnly,
        ReadWrite,
        Append,
        Create,
        Exclusive,
        Truncate
    }
    enum Result {
        Success = 0,
        DiskError = -1,
        DiskError2 = -3,
        DiskError3 = -11,
        DiskError4 = -16,
        InternalError = -2,
        PathNotFoundError = -4,
        PathNotFoundError2 = -5,
        IncorrectPathFormatError = -6,
        AccessForbiddenError = -7,
        AccessForbiddenError2 = -8,
        AccessForbiddenError3 = -15,
        InvalidFileId = -9,
        DiskWriteProtectionError = -10,
        InsufficientSpaceError = -12,
        InsufficientSpaceError2 = -13,
        ExecutionError = -14,
        TooManyOpenFilesError = -17,
        InvalidParametersError = -18
    }
    enum FileWhence {
        Beginning,
        Current,
        End
    }
    interface Stat {
        size: number;
        modifyTimeMilliseconds: number;
    }
    function statAsset(path: string): Stat;
    function statFile(path: string): Stat;
    function openAsset(path: string, mode: FileMode): number;
    function openFile(path: string, mode: FileMode): number;
    function closeFile(fileId: number): Result;
    function seekFile(fileId: number, offset: number, whence: FileWhence): void;
    function readFile(fileId: number, buffer: ArrayBuffer, offset: number, bytes: number): Result;
    function writeFile(fileId: number, buffer: ArrayBuffer, offset: number, bytes: number): Result;
    function deleteFile(path: string): Result;
    function renameFile(path: string, newPath: string): Result;
}
