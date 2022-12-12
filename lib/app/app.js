export var App;
(function (App) {
    let Type;
    (function (Type) {
        Type[Type["App"] = 0] = "App";
        Type[Type["Watchface"] = 1] = "Watchface";
    })(Type = App.Type || (App.Type = {}));
    function start(appId, pagePath, createParameters) {
        hmApp.startApp({
            appid: appId,
            url: pagePath,
            param: createParameters,
        });
    }
    App.start = start;
    function setPage(pagePath, initParameters) {
        hmApp.gotoPage({
            url: pagePath,
            param: initParameters,
        });
    }
    App.setPage = setPage;
    function reload(pagePath, initParameters) {
        hmApp.reloadPage({
            url: pagePath,
            param: initParameters,
        });
    }
    App.reload = reload;
    function back() {
        hmApp.goBack();
    }
    App.back = back;
    function home() {
        hmApp.gotoHome();
    }
    App.home = home;
    function exit() {
        hmApp.exit();
    }
    App.exit = exit;
    function setScrollOffset(offset) {
        hmApp.setLayerY(offset);
    }
    App.setScrollOffset = setScrollOffset;
    function getScrollOffset() {
        return hmApp.getLayerY();
    }
    App.getScrollOffset = getScrollOffset;
    function setStayAlive(enabled) {
        hmApp.setScreenKeep(enabled);
    }
    App.setStayAlive = setStayAlive;
    function getPackageInfo() {
        const packageInfo = hmApp.packageInfo();
        let appType = Type.App;
        switch (packageInfo.appType) {
            case 'app':
                appType = Type.App;
                break;
            case 'watchface':
                appType = Type.Watchface;
                break;
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
        };
    }
    App.getPackageInfo = getPackageInfo;
})(App || (App = {}));
