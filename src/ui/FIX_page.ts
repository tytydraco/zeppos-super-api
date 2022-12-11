export class FIXPage {
    state: Record<string, any>

    constructor(methods: Application.Methods) {
        Page({
            onInit: methods.onInitialize,
            build: methods.onBuild,
            onDestroy: methods.onDestroy,
            data: this.state,
        })
    }
}

export namespace Application {
    export interface Methods {
        onInitialize?: (parameters: string) => void,
        onBuild?: () => void,
        onDestroy?: () => void,
    }
}