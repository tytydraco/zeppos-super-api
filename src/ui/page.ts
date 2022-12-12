export class View {
    state: Record<string, any> = {}

    constructor(methods: Page.Methods) {
        Page({
            onInit: methods.onInitialize,
            build: methods.onBuild,
            onDestroy: methods.onDestroy,
            data: this.state,
        })
    }
}

export namespace Page {
    export interface Methods {
        onInitialize?: (parameters: string) => void,
        onBuild?: () => void,
        onDestroy?: () => void,
    }
}