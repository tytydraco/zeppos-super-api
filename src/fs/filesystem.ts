export namespace FileSystem {
    export enum FileMode {
        ReadOnly = hmFS.O_RDONLY,
        WriteOnly = hmFS.O_WRONLY,
        ReadWrite = hmFS.O_RDWR,
        Append = hmFS.O_APPEND,
        Create = hmFS.O_CREAT,
        Exclusive = hmFS.O_EXCL,
        Truncate = hmFS.O_TRUNC,
    }

    export enum Result {
        Success = 0,
        DiskError = -1,
        DiskError2 = -3, /* TODO: figure out why there are two error codes */
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
        InvalidParametersError = -18,
    }

    export enum FileWhence {
        Beginning = hmFS.SEEK_SET,
        Current = hmFS.SEEK_CUR,
        End = hmFS.SEEK_END,
    }

    export interface Stat {
        size: number,
        modifyTimeMilliseconds: number
    }

    export function statAsset(path: string): Stat {
        const [stat, error] = hmFS.stat_asset(path)

        if (error != 0)
            return null

        return {
            size: stat.size,
            modifyTimeMilliseconds: stat.mtime,
        }
    }

    export function statFile(path: string): Stat {
        const [stat, error] = hmFS.stat(path)

        if (error != 0)
            return null

        return {
            size: stat.size,
            modifyTimeMilliseconds: stat.mtime,
        }
    }

    export function openAsset(path: string, mode: FileMode): number {
        return hmFS.open_asset(path, mode)
    }

    export function openFile(path: string, mode: FileMode): number {
        return hmFS.open_asset(path, mode)
    }

    export function closeFile(fileId: number): Result {
        return hmFS.close(fileId)
    }

    export function seekFile(fileId: number, offset: number, whence: FileWhence) {
        hmFS.seek(fileId, offset, whence)
    }

    export function readFile(fileId: number, buffer: ArrayBuffer, offset: number, bytes: number): Result {
        /* TODO: check original API, unordered parameters */
        return hmFS.read(fileId, offset, buffer, length)
    }

    /* TODO: test read dir?? */

    export function writeFile(fileId: number, buffer: ArrayBuffer, offset: number, bytes: number): Result {
        return hmFS.write(fileId, offset, buffer, length)
    }

    export function deleteFile(path: string): Result {
        return hmFS.remove(path)
    }

    export function renameFile(path: string, newPath: string): Result {
        return hmFS.rename(path, newPath)
    }
}