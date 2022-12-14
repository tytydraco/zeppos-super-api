export declare class Program {
    private static instance;
    state: Record<string, any>;
    constructor(config: Program.Configuration);
}
export declare namespace Program {
    interface Configuration {
        onCreate?: (parameters?: string) => void;
        onDestroy?: () => void;
    }
}
