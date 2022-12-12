export declare class View {
    state: Record<string, any>;
    constructor(methods: Page.Methods);
}
export declare namespace Page {
    interface Methods {
        onInitialize?: (parameters: string) => void;
        onBuild?: () => void;
        onDestroy?: () => void;
    }
}
