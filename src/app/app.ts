export namespace App {
    export enum Type {
        App,
        Watchface,
    }

    export interface PackageInfo {
        id: number,
        name: string,
        description: string,
        type: Type,
        version: string,
        versionCode: number,
        iconPath: string,
        developerName: string,
        pagePaths: Array<string>,
    }

    export function start(appId: number, pagePath: string, createParameters?: string) {
        hmApp.startApp({
            appid: appId,
            url: pagePath,
            param: createParameters,
        })
    }

    export function setPage(pagePath: string, initParameters?: string) {
        hmApp.gotoPage({
            url: pagePath,
            param: initParameters,
        })
    }

    export function reload(pagePath: string, initParameters?: string) {
        hmApp.reloadPage({
            url: pagePath,
            param: initParameters,
        })
    }

    export function back() {
        hmApp.goBack()
    }

    export function home() {
        hmApp.gotoHome()
    }

    export function exit() {
        hmApp.exit()
    }

    export function setScrollOffset(offset: number) {
        hmApp.setLayerY(offset)
    }

    export function getScrollOffset(): number {
        return hmApp.getLayerY()
    }

    export function setStayAlive(enabled: boolean) {
        hmApp.setScreenKeep(enabled)
    }

    export function getPackageInfo(): PackageInfo {
        const packageInfo = hmApp.packageInfo()

        let appType = Type.App
        switch (packageInfo.appType) {
            case 'app':
                appType = Type.App
                break
            case 'watchface':
                appType = Type.Watchface
                break
        }

        return {
            id: packageInfo.appId,
            name: packageInfo.name,
            description: packageInfo.description,
            type: appType,
            version: packageInfo.version.name,
            versionCode: packageInfo.version.code,
            iconPath: packageInfo.icon,
            developerName: packageInfo.vender,
            pagePaths: packageInfo.pages,
        }
    }
}