import { Widget } from "./widgets";
export declare class View {
    readonly config: View.Configuration;
    state: Record<string, any>;
    constructor(config: View.Configuration);
}
export declare namespace View {
    interface Configuration {
        onInitialize?: (parameters?: string) => void;
        onBuild?: () => void;
        onDestroy?: () => void;
        children?: Array<Widget<any>>;
    }
}
