export class Program {
    constructor(config) {
        this.state = {};
        if (Program.instance != null)
            return;
        App({
            onCreate: config.onCreate,
            onDestroy: config.onDestroy,
            data: this.state,
        });
    }
}
