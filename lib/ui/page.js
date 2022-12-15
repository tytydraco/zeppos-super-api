export class View {
    constructor(config) {
        this.config = config;
        this.state = {};
        Page({
            onInit: config.onInitialize,
            build() {
                var _a;
                if (config.children !== undefined) {
                    for (const child of config.children) {
                        child.build(hmUI);
                    }
                }
                (_a = config === null || config === void 0 ? void 0 : config.onBuild) === null || _a === void 0 ? void 0 : _a.call(config);
            },
            onDestroy: config.onDestroy,
            data: this.state,
        });
    }
}
