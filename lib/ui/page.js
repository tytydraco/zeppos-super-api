export class View {
    constructor(config) {
        this.state = {};
        Page({
            onInit: config.onInitialize,
            build() {
                for (const child of config.children) {
                    child.build(hmUI);
                }
                config === null || config === void 0 ? void 0 : config.onBuild();
            },
            onDestroy: config.onDestroy,
            data: this.state,
        });
    }
}
