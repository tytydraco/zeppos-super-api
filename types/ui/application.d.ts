export declare class Application {
    private static instance;
    state: Record<string, any>;
    constructor(config: Application.Configuration);
}
export declare namespace Application {
    interface Configuration {
        onCreate?: (parameters?: string) => void;
        onDestroy?: () => void;
    }
}
