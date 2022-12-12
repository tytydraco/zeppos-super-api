export var Cache;
(function (Cache) {
    function setBoolean(key, value) {
        return hmFS.SysProSetBool(key, value) == 0;
    }
    Cache.setBoolean = setBoolean;
    function getBoolean(key) {
        return hmFS.SysProGetBool(key);
    }
    Cache.getBoolean = getBoolean;
    function setInteger(key, value) {
        return hmFS.SysProSetInt(key, value) == 0;
    }
    Cache.setInteger = setInteger;
    function getInteger(key) {
        return hmFS.SysProGetInt(key);
    }
    Cache.getInteger = getInteger;
    function setLong(key, value) {
        return hmFS.SysProSetInt64(key, value) == 0;
    }
    Cache.setLong = setLong;
    function getLong(key) {
        return hmFS.SysProGetInt64(key);
    }
    Cache.getLong = getLong;
    function setDouble(key, value) {
        return hmFS.SysProSetDouble(key, value) == 0;
    }
    Cache.setDouble = setDouble;
    function getDouble(key) {
        return hmFS.SysProGetDouble(key);
    }
    Cache.getDouble = getDouble;
    function setString(key, value) {
        return hmFS.SysProSetChars(key, value) == 0;
    }
    Cache.setString = setString;
    function getString(key) {
        return hmFS.SysProGetChars(key);
    }
    Cache.getString = getString;
})(Cache || (Cache = {}));
