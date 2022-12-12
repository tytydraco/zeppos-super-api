export declare namespace App {
    enum Type {
        App = 0,
        Watchface = 1
    }
    interface PackageInfo {
        id: number;
        name: string;
        description: string;
        type: Type;
        version: string;
        versionCode: number;
        iconPath: string;
        developerName: string;
        pagePaths: Array<string>;
    }
    function start(appId: number, pagePath: string, createParameters?: string): void;
    function setPage(pagePath: string, initParameters?: string): void;
    function reload(pagePath: string, initParameters?: string): void;
    function back(): void;
    function home(): void;
    function exit(): void;
    function setScrollOffset(offset: number): void;
    function getScrollOffset(): number;
    function setStayAlive(enabled: boolean): void;
    function getPackageInfo(): PackageInfo;
}
