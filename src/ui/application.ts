export class Application {
    private static instance: Application

    state: Record<string, any> = {}

    constructor(methods: Application.Methods) {
        if (Application.instance != null)
            return

        App({
            onCreate: methods.onCreate,
            onDestroy: methods.onDestroy,
            data: this.state,
        })
    }
}

export namespace Application {
    export interface Methods {
        onCreate?: (parameters: string) => void,
        onDestroy?: () => void,
    }
}