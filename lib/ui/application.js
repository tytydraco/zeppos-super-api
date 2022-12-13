export class Application {
    constructor(config) {
        this.state = {};
        if (Application.instance != null)
            return;
        App({
            onCreate: config.onCreate,
            onDestroy: config.onDestroy,
            data: this.state,
        });
    }
}
