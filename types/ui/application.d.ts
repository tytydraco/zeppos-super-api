export declare class Application {
    private static instance;
    state: Record<string, any>;
    constructor(methods: Application.Methods);
}
export declare namespace Application {
    interface Methods {
        onCreate?: (parameters: string) => void;
        onDestroy?: () => void;
    }
}
