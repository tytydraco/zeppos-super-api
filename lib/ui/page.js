export class View {
    constructor(methods) {
        this.state = {};
        Page({
            onInit: methods.onInitialize,
            build: methods.onBuild,
            onDestroy: methods.onDestroy,
            data: this.state,
        });
    }
}
