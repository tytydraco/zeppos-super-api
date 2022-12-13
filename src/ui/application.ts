export class Application {
    private static instance: Application

    state: Record<string, any> = {}

    constructor(config: Application.Configuration) {
        if (Application.instance != null)
            return

        App({
            onCreate: config.onCreate,
            onDestroy: config.onDestroy,
            data: this.state,
        })
    }
}

export namespace Application {
    export interface Configuration {
        onCreate?: (parameters?: string) => void,
        onDestroy?: () => void,
    }
}