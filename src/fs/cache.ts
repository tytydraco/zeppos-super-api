export namespace Cache {
    export function setBoolean(key: string, value: boolean): boolean {
        return hmFS.SysProSetBool(key, value) == 0
    }

    export function getBoolean(key: string): boolean {
        return hmFS.SysProGetBool(key)
    }

    export function setInteger(key: string, value: number): boolean {
        return hmFS.SysProSetInt(key, value) == 0
    }

    export function getInteger(key: string): number {
        return hmFS.SysProGetInt(key)
    }

    export function setLong(key: string, value: number): boolean {
        return hmFS.SysProSetInt64(key, value) == 0
    }

    export function getLong(key: string): number {
        return hmFS.SysProGetInt64(key)
    }

    export function setDouble(key: string, value: number): boolean {
        return hmFS.SysProSetDouble(key, value) == 0
    }

    export function getDouble(key: string): number {
        return hmFS.SysProGetDouble(key)
    }

    export function setString(key: string, value: string): boolean {
        return hmFS.SysProSetChars(key, value) == 0
    }

    export function getString(key: string): string {
        return hmFS.SysProGetChars(key)
    }
}