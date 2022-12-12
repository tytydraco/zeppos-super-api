export class Application {
    constructor(methods) {
        this.state = {};
        if (Application.instance != null)
            return;
        App({
            onCreate: methods.onCreate,
            onDestroy: methods.onDestroy,
            data: this.state,
        });
    }
}
