export var FileSystem;
(function (FileSystem) {
    let FileMode;
    (function (FileMode) {
        FileMode[FileMode["ReadOnly"] = hmFS.O_RDONLY] = "ReadOnly";
        FileMode[FileMode["WriteOnly"] = hmFS.O_WRONLY] = "WriteOnly";
        FileMode[FileMode["ReadWrite"] = hmFS.O_RDWR] = "ReadWrite";
        FileMode[FileMode["Append"] = hmFS.O_APPEND] = "Append";
        FileMode[FileMode["Create"] = hmFS.O_CREAT] = "Create";
        FileMode[FileMode["Exclusive"] = hmFS.O_EXCL] = "Exclusive";
        FileMode[FileMode["Truncate"] = hmFS.O_TRUNC] = "Truncate";
    })(FileMode = FileSystem.FileMode || (FileSystem.FileMode = {}));
    let Result;
    (function (Result) {
        Result[Result["Success"] = 0] = "Success";
        Result[Result["DiskError"] = -1] = "DiskError";
        Result[Result["DiskError2"] = -3] = "DiskError2";
        Result[Result["DiskError3"] = -11] = "DiskError3";
        Result[Result["DiskError4"] = -16] = "DiskError4";
        Result[Result["InternalError"] = -2] = "InternalError";
        Result[Result["PathNotFoundError"] = -4] = "PathNotFoundError";
        Result[Result["PathNotFoundError2"] = -5] = "PathNotFoundError2";
        Result[Result["IncorrectPathFormatError"] = -6] = "IncorrectPathFormatError";
        Result[Result["AccessForbiddenError"] = -7] = "AccessForbiddenError";
        Result[Result["AccessForbiddenError2"] = -8] = "AccessForbiddenError2";
        Result[Result["AccessForbiddenError3"] = -15] = "AccessForbiddenError3";
        Result[Result["InvalidFileId"] = -9] = "InvalidFileId";
        Result[Result["DiskWriteProtectionError"] = -10] = "DiskWriteProtectionError";
        Result[Result["InsufficientSpaceError"] = -12] = "InsufficientSpaceError";
        Result[Result["InsufficientSpaceError2"] = -13] = "InsufficientSpaceError2";
        Result[Result["ExecutionError"] = -14] = "ExecutionError";
        Result[Result["TooManyOpenFilesError"] = -17] = "TooManyOpenFilesError";
        Result[Result["InvalidParametersError"] = -18] = "InvalidParametersError";
    })(Result = FileSystem.Result || (FileSystem.Result = {}));
    let FileWhence;
    (function (FileWhence) {
        FileWhence[FileWhence["Beginning"] = hmFS.SEEK_SET] = "Beginning";
        FileWhence[FileWhence["Current"] = hmFS.SEEK_CUR] = "Current";
        FileWhence[FileWhence["End"] = hmFS.SEEK_END] = "End";
    })(FileWhence = FileSystem.FileWhence || (FileSystem.FileWhence = {}));
    function statAsset(path) {
        const [stat, error] = hmFS.stat_asset(path);
        if (error != 0)
            return null;
        return {
            size: stat.size,
            modifyTimeMilliseconds: stat.mtime,
        };
    }
    FileSystem.statAsset = statAsset;
    function statFile(path) {
        const [stat, error] = hmFS.stat(path);
        if (error != 0)
            return null;
        return {
            size: stat.size,
            modifyTimeMilliseconds: stat.mtime,
        };
    }
    FileSystem.statFile = statFile;
    function openAsset(path, mode) {
        return hmFS.open_asset(path, mode);
    }
    FileSystem.openAsset = openAsset;
    function openFile(path, mode) {
        return hmFS.open_asset(path, mode);
    }
    FileSystem.openFile = openFile;
    function closeFile(fileId) {
        return hmFS.close(fileId);
    }
    FileSystem.closeFile = closeFile;
    function seekFile(fileId, offset, whence) {
        hmFS.seek(fileId, offset, whence);
    }
    FileSystem.seekFile = seekFile;
    function readFile(fileId, buffer, offset, bytes) {
        /* TODO: check original API, unordered parameters */
        return hmFS.read(fileId, offset, buffer, length);
    }
    FileSystem.readFile = readFile;
    /* TODO: test read dir?? */
    function writeFile(fileId, buffer, offset, bytes) {
        return hmFS.write(fileId, offset, buffer, length);
    }
    FileSystem.writeFile = writeFile;
    function deleteFile(path) {
        return hmFS.remove(path);
    }
    FileSystem.deleteFile = deleteFile;
    function renameFile(path, newPath) {
        return hmFS.rename(path, newPath);
    }
    FileSystem.renameFile = renameFile;
})(FileSystem || (FileSystem = {}));
