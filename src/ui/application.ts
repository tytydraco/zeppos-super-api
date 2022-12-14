export class Program {
    private static instance: Program

    state: Record<string, any> = {}

    constructor(config: Program.Configuration) {
        if (Program.instance != null)
            return

        App({
            onCreate: config.onCreate,
            onDestroy: config.onDestroy,
            data: this.state,
        })
    }
}

export namespace Program {
    export interface Configuration {
        onCreate?: (parameters?: string) => void,
        onDestroy?: () => void,
    }
}