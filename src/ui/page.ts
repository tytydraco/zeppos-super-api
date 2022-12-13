import { Widget } from "./widgets"

export class View {
    state: Record<string, any> = {}

    constructor(config: View.Configuration) {
        Page({
            onInit: config.onInitialize,
            build() {
                for (const child of config.children) {
                    child.build(hmUI)
                }

                config?.onBuild()
            },
            onDestroy: config.onDestroy,
            data: this.state,
        })
    }
}

export namespace View {
    export interface Configuration {
        onInitialize?: (parameters?: string) => void,
        onBuild?: () => void,
        onDestroy?: () => void,
        children?: Array<Widget<any>>,
    }
}